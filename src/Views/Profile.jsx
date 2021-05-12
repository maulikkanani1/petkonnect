import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap';
import Header from '../components/Header.jsx';
import Footer from '../components/footer.jsx';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import MyJumbotron from '../components/MyJumbotron';
import Editprofile from '../components/Model/Editprofile';
import Editpet from '../components/Model/Edit_pet_profile';
import './../scss/profile.scss';
import sweetalert from 'sweetalert';
import { GetUserData, getUserPets } from '../ApiService.js';
import { editUser } from '../ApiService.js';

const Store = () => {
  const location = useLocation();
  const history = useHistory();
  const [editprofile, seteditprofile] = useState(false);
  const [editpet, seteditpet] = useState(false);
  const [userData, setuserData] = useState();
  const [userPets, setUserPets] = useState();
  const [id, setId] = useState(false);
  const [showEditButton,setEditButton] = useState(false);

  const close_edit = () => {
    seteditprofile(!editprofile);
  };
  const close_edit_profile = (id) => {
    seteditpet(!editpet);
    setId(id);
  };

  const open_my_order = () => {
    history.push('/MyOrder');
  };

  useEffect(() => {
    GetUserData().then(({ data }) => {
      setuserData(data);
      
    });

    getUserPets().then(({ data }) => setUserPets(data));
  }, []);

  console.log('hey user',userData);
  const { register, handleSubmit, setValue, reset, watch } = useForm();
  const isUpdate = true;

  const image = watch('image');

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) =>
      formData.append(key, key === 'image' ? image[0] : data[key])
    );
    if (isUpdate) {
      editUser(formData, data.id).then(({ data }) => {
        console.log(data);
        if (data.status) {
          sweetalert('User Updated !', '', 'success');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });
    } else {
      // addPet(formData).then(({ data }) => {
      //   console.log(data);
      //   if (data.status) {
      //     props.close();
      //     sweetalert('Pet added !', '', 'success');
      //     props.close();
      //     setTimeout(() => {
      //       window.location.reload();
      //     }, 2000);
      //   }
      // });
    }
  };

  return (
    <div className="product_listing_page">
      <Header />
      <MyJumbotron
        title="Profile"
        route={[
          { title: 'Home', to: '/' },
          { title: 'Profile', isActive: true },
        ]}
      />
      <Container>
        {userData && (
          <div className="row mt-5 mb-5">
            <div className="col-lg-10 m-auto">
              <div className="row">
                <div className="col-md-8 profile_border m-2">
                  <div>Profile</div>
                  <div className="d-flex justify-content-between">
                    <div className="profile_name">{userData.name}</div>
                    <div className="d-flex">
                      <div className="p-1">
                        <img
                          src={'./../../icons/add_post.svg'}
                          className="profile_side_images"
                        />
                      </div>
                      <div className="p-1">
                        <img
                          src={'./../../icons/message.svg'}
                          className="profile_side_images"
                        />{' '}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="image-wrapper rounded-circle" on={() => setEditButton(true)}>
                        <img
                          src={image !== undefined && image.length !== 0 ? window.URL.createObjectURL(image[0]) : './../../img/profile_img_2.png'}
                          className="profile_image rounded-circle"
                        />
                        <div>
                        <input className="image-input" id="img" name="image" type="file" placeholder="Change User Image" {...register('image')} />
                        <label className="image-input-label" htmlFor="img">
                        <img
                            src={'./../../icons/edit.svg'}
                            className="profile_edit"
                          />
                        </label>
                        </div>
                      </div>
                      <div className="name mt-2">{userData.name}</div>
                      <div className="mt-2">
                        <p>{userData.email}</p>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-center">
                        <div>
                          <div className="count">20</div>
                          <div className="count_title">Post</div>
                        </div>
                        <div>
                          <div className="count">783</div>
                          <div className="count_title">Follower</div>
                        </div>
                        <div>
                          <div className="count">129</div>
                          <div className="count_title">Following</div>
                        </div>
                      </div>

                      <div>
                        <button
                          className="follow_button w-100 mt-2 "
                          onClick={close_edit}
                        >
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div claaname="story font-weight-bold">My Pets</div>
                    <div className="d-flex">
                      {userPets &&
                        userPets?.pets.map((pet) => (
                          <div
                            className="p-2"
                            onClick={() => close_edit_profile(pet.id)}
                          >
                            <img
                              src={
                                pet.petImage
                                  ? pet.petImage
                                  : `./../../img/store_img_2.png`
                              }
                              className="story_img"
                            />
                          </div>
                        ))}
                      {/* <div className="p-2">
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="story_img"
                        ></img>
                      </div>
                      <div className="p-2">
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="story_img"
                        ></img>
                      </div> */}
                      <div className="p-2" onClick={close_edit_profile}>
                        <img
                          src={'./../../img/add_post.png'}
                          className="story_img"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 d-flex">
                    <div className="tab_text">
                      <u>Posts</u>
                    </div>
                    <div className="tab_text">Tags</div>
                    <div className="tab_text">Saved</div>
                  </div>
                  <div className="w-100">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="post_img"
                        />
                      </div>
                      <div className="col-md-4">
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="post_img"
                        />
                      </div>
                      <div className="col-md-4">
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="post_img"
                        />
                      </div>
                      <div className="col-md-4">
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="post_img"
                        />
                      </div>
                      <div className="col-md-4">
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="post_img"
                        />
                      </div>
                      <div className="col-md-4">
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="post_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 profile_border m-2">
                  <div>
                    <div className="left-side-title">Jasmine_Jassie</div>
                    <div className="d-flex justify-content-center mt-3">
                      <div className="p-1">
                        <img
                          src={'./../../icons/insights.svg'}
                          className="profile_side_images"
                        />
                      </div>
                      <div className="p-1">Insights</div>
                    </div>
                    <div
                      className="d-flex justify-content-center mt-3"
                      Onclick={open_my_order}
                    >
                      <div className="p-1">
                        <img
                          src={'./../../icons/my_orders.svg'}
                          className="profile_side_images"
                        />
                      </div>
                      <div className="p-1">My Orders</div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <div className="p-1">
                        <img
                          src={'./../../icons/my_store.svg'}
                          className="profile_side_images"
                        />
                      </div>
                      <div className="p-1">My Store</div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <div className="p-1">
                        <img
                          src={'./../../icons/account.svg'}
                          className="profile_side_images"
                        />
                      </div>
                      <div className="p-1">Account</div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <div className="p-1">
                        <img
                          src={'./../../icons/settings.svg'}
                          className="profile_side_images"
                        />
                      </div>
                      <div className="p-1">Settings</div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <div className="p-1">
                        <img
                          src={'./../../icons/help.svg'}
                          className="profile_side_images"
                        />
                      </div>
                      <div className="p-1">Help</div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mt-3">
                    <div className="suggested_profiles">Suggested Profiles</div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="suggested_profiles_img"
                        />
                        <span className="profile_texts">User1</span>{' '}
                      </div>
                      <div className="follow_text">Follow</div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="suggested_profiles_img"
                        />
                        <span className="profile_texts">User1</span>{' '}
                      </div>
                      <div className="follow_text">Follow</div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <img
                          src={'./../../img/store_img_2.png'}
                          className="suggested_profiles_img"
                        />
                        <span className="profile_texts">User1</span>{' '}
                      </div>
                      <div className="follow_text">Follow</div>
                    </div>
                    <div className="mt-5">
                      <div className="m-auto">
                        <div className="Explore">Explore</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
      <Editprofile status={editprofile} profile={userData} close={close_edit} />
      <Editpet
        status={editpet}
        id={id ? id : false}
        close={close_edit_profile}
      />
      <Footer />
    </div>
  );
};

export default Store;
