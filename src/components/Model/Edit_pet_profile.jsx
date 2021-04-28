import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import sweetalert from 'sweetalert';
import { addPet, editPet, getPet } from '../../ApiService';
import '../../scss/model.scss';

const EditProfile = (props) => {
  console.log('Props', props);
  const [pet, setPet] = useState({});
  const { register, handleSubmit, setValue, reset, watch } = useForm();

  const image = watch('image');

  const onSubmit = (data) => {
    console.log('petData', data);
    const formData = new FormData();
    Object.keys(data).forEach((key) =>
      formData.append(key, key === 'image' ? image[0] : data[key])
    );
    addPet(formData).then(({ data }) => {
      if (data.status) {
        props.close();
        sweetalert('Pet added !', '', 'success');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };

  useEffect(() => {
    // if (typeof props.id === String) {
    console.log(typeof props.id);
    getPet(props?.id).then(({ data }) => {
      console.log('DDDD', data);
      if (data.status) {
        setPet(data.pet);
      }
    });
    // }
  }, [props?.id]);

  useEffect(() => {
    if (pet) {
      console.log('Ifp', pet);
      Object.keys(pet).map((item) => setValue(item, pet[item]));
    }
  }, [pet]);

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
                  Edit Pet Profile
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span
                    aria-hidden="true"
                    onClick={() => {
                      reset();
                      props.close();
                    }}
                  >
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div class="container-fluid">
                  <div className="m-3">
                    <div className="d-flex justify-content-center">
                      <img
                        name="image"
                        src={'./../../img/profile_img_2.png'}
                        className="edit_profile_image"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="change_profile">Change pet image</div>
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    {/* <div className="edit_lable  mt-2">Pet Name</div> */}
                    <div>
                      <input
                        type="select"
                        name="petName"
                        className="edit_input w-100 form-control"
                        placeholder="Pet Name"
                        {...register('petName')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3 ">
                    {/* <div className="edit_lable  mt-2">Pet Type</div> */}
                    {/* <br/> */}
                    <select
                      className="custom-select mt-2"
                      name="petType"
                      {...register('petType')}
                    >
                      <option selected>Choose Pet Type</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                    </select>
                  </div>
                  <div className="ml-3 mr-3">
                    {/* <div className="edit_lable  mt-2">Name</div> */}
                    <div>
                      <input
                        type="text"
                        name="breed"
                        className="edit_input w-100 form-control mt-2"
                        placeholder="Breed"
                        {...register('breed')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    {/* <div className="edit_lable  mt-2">Website</div> */}
                    <div>
                      <input
                        type="number"
                        name="age"
                        className="edit_input w-100 form-control mt-2"
                        placeholder="Age"
                        {...register('age')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    {/* <div className="edit_lable  mt-2">Name</div> */}
                    <div>
                      <input
                        type="text"
                        name="gender"
                        className="edit_input w-100 form-control mt-2"
                        placeholder="Gender"
                        {...register('gender')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    {/* <div className="edit_lable  mt-2">Name</div> */}
                    <div>
                      <input
                        type="number"
                        name="weight"
                        className="edit_input w-100 form-control mt-2"
                        placeholder="Weight"
                        {...register('weight')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    {/* <div className="edit_lable  mt-2">Name</div> */}
                    <div>
                      <input
                        type="number"
                        name="height"
                        className="edit_input w-100 form-control mt-2"
                        placeholder="Height"
                        {...register('height')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    {/* <div className="edit_lable  mt-2">Name</div> */}
                    <div>
                      <input
                        type="text"
                        name="color"
                        className="edit_input w-100 form-control mt-2"
                        placeholder="Color"
                        {...register('color')}
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
