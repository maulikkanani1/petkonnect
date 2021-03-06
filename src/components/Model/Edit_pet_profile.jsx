import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import sweetalert from 'sweetalert';
import { addPet, editPet, getPet, removePet } from '../../ApiService';
import '../../scss/model.scss';
import '../../scss/editpetprofile.scss';

const EditProfile = (props) => {
  const [pet, setPet] = useState({});
  const { register, handleSubmit, setValue, reset, watch } = useForm();
  const isUpdate = Object.keys(pet).length !== 0;

  const image = watch('image');

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) =>
      formData.append(key, key === 'image' ? image[0] : data[key])
    );
    if (isUpdate) {
      editPet(formData, data.id).then(({ data }) => {
        console.log(data);
        if (data.status) {
          sweetalert('Pet Updated !', '', 'success');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });
    } else {
      addPet(formData).then(({ data }) => {
        console.log('hey data', data);
        if (data.status) {
          props.close();
          sweetalert('Pet added !', '', 'success');
          props.close();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });
    }
  };

  useEffect(() => {
    // if (props.id !== false) {
    getPet(props?.id).then(({ data }) => {
      if (data.status) {
        setPet(data.pet);
      }
    });
    // }
  }, [props?.id]);

  useEffect(() => {
    if (pet) {
      Object.keys(pet).map((item) => setValue(item, pet[item]));
    }
  }, [pet]);

  const onRemove = (data) => {
    removePet(data.id).then(({ data }) => {
      if (data.status) {
        props.close();
        sweetalert(data.message, '', 'success');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };

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
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="mt-3"
                  className="modal-title"
                  id="edit_model"
                  className="edit_title"
                >
                  {`${isUpdate ? 'Edit' : 'Add'} Pet Profile`}
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
                      // e.preventDefault();
                      setPet({});
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
                    <div className="image-wrapper rounded-circle">
                      <img
                        src={
                          image !== undefined && image.length !== 0
                            ? window.URL.createObjectURL(image[0])
                            : isUpdate
                            ? pet.petImage
                              ? pet.petImage
                              : './../../img/profile_img_2.png'
                            : './../../img/profile_img_2.png'
                        }
                        className="pet-image rounded-circle"
                      />
                    </div>
                    <div>
                      <input
                        className="image-input"
                        id="img"
                        name="image"
                        type="file"
                        placeholder="Change Pet Image"
                        {...register('image')}
                      />
                      <label className="image-input-label" htmlFor="img">
                        {pet.petImage ? 'Change Pet Image' : 'Upload Pet Image'}
                      </label>
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
                      <option value="Mice">Mice </option>
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
                {isUpdate ? (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleSubmit(onRemove)}
                  >
                    Remove
                  </button>
                ) : (
                  ''
                )}
                <button
                  type="button"
                  className="btn btn-secondary edit_save"
                  onClick={handleSubmit(onSubmit)}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
