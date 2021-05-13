import React, { useEffect, useState } from 'react';
import '../../scss/model.scss';
import { editUser } from '../../ApiService';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import sweetalert from 'sweetalert';
import '../../scss/edituserpicture.scss';

const EditProfile = (props) => {
  const [user, setUser] = useState({});

  const { register, handleSubmit, setValue, watch } = useForm();
  const image = watch('image');
  const isUpdate = Object.keys(user).length !== 0;

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) =>
      formData.append(key, key === 'image' ? image[0] : data[key])
    );

    editUser(formData, data.id).then(({ data }) => {
      if (data.status) {
        sweetalert('Profile Updated !', '', 'success');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };

  useEffect(() => {
    setUser(props.profile);
  }, [props.profile]);

  useEffect(() => {
    setUser(user);
    if (user) {
      Object.keys(user).map((item) => setValue(item, user[item]));
    }
  }, [user]);

  return (
    <div classNameName="col-lg-4 product-menu">
      <div
        className={props.status ? 'modal fade show' : 'modal fade'}
        style={{ display: props.status ? 'block' : 'none' }}
        id="edit_model"
        tabindex="-1"
        role="dialog"
        aria-labelledby="edit_model"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="mt-3"
                  className="modal-title"
                  id="edit_model"
                  className="edit_title"
                >
                  Edit Profile
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" onClick={props.close}>
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div class="container-fluid">
                  <div className="m-3">
                    <div className="image-wrapper rounded-circle">
                      <img
                        src={
                          image !== undefined && image.length !== 0
                            ? window.URL.createObjectURL(image[0])
                            : isUpdate
                            ? user.userImage
                              ? user.userImage
                              : './../../img/profile_img_2.png'
                            : './../../img/profile_img_2.png'
                        }
                        className="pet-image rounded-circle"
                      />
                    </div>
                    <div>
                      <input
                        className="image-input"
                        id="userImg"
                        name="image"
                        type="file"
                        placeholder={user.userImage ? 'Change Image' : 'Upload Image'}
                        {...register('image')}
                      />
                      <label className="image-input-label" htmlFor="userImg">
                        {user.userImage
                          ? 'Change Profile Picture'
                          : 'Upload Image'}
                      </label>
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">Name</div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        className="edit_input w-100"
                        {...register('name')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">Email</div>
                    <div>
                      <input
                        type="text"
                        name="email"
                        className="edit_input w-100"
                        {...register('email')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">Phone Number</div>
                    <div>
                      <input
                        type="text"
                        name="phoneNumber"
                        className="edit_input w-100"
                        {...register('phoneNumber')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">Date of Birth</div>
                    <div>
                      <Form.Control
                        type="date"
                        name="dob"
                        className="edit_input w-100"
                        {...register('dob')}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="Submit"
                  className="btn btn-secondary edit_save m-auto w-50"
                  value="Save"
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
