import React, { useEffect, useState } from 'react';
import '../../scss/model.scss';
import { editAddress } from '../../ApiService';
import { useForm } from 'react-hook-form';
import sweetalert from 'sweetalert';

const EditAddress = (props) => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.zip === '') {
      data.zip = props.address?.zip;
    }
    if (data.doorNo === '') {
      data.doorNo = props.address?.doorNo;
    }
    if (data.building === '') {
      data.building = props.address?.building;
    }
    if (data.city === '') {
      data.city = props.address?.city;
    }
    if (data.state === '') {
      data.state = props.address?.state;
    }
    if (data.street === '') {
      data.street = props.address?.street;
    }

    editAddress(data).then(({ data }) => {
      if (data.status) {
        props.close();
        sweetalert('Address saved !', '', 'success');
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="mt-3"
                  className="modal-title"
                  id="edit_model"
                  className="edit_title"
                >
                  Edit Address
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
              {/* {responseData !== undefined ? (
                <div>{responseData.message}</div>
              ) : (
                <div>
                  {' '} */}
              <div className="modal-body">
                <div class="container-fluid">
                  {/* <div className="m-3">
                    <div className="d-flex justify-content-center">
                      <img
                        src={'./../../img/profile_img_2.png'}
                        className="edit_profile_image"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="change_profile">Change profile photo</div>
                    </div>
                  </div> */}
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">Door No.</div>
                    <div>
                      <input
                        type="text"
                        name="doorNo"
                        className="edit_input w-100 form-control"
                        defaultValue={props.address?.doorNo}
                        // onChange={onInputChange}
                        {...register('doorNo')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">Street</div>
                    <div>
                      <input
                        type="text"
                        name="street"
                        className="edit_input w-100 form-control"
                        defaultValue={props.address?.street}
                        // onChange={onInputChange}
                        {...register('street')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">Building</div>
                    <div>
                      <input
                        type="text"
                        name="building"
                        className="edit_input w-100 form-control"
                        defaultValue={props.address?.building}
                        // onChange={onInputChange}
                        {...register('building')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">City</div>
                    <div>
                      <input
                        type="text"
                        name="city"
                        className="edit_input w-100 form-control"
                        defaultValue={props.address?.city}
                        // onChange={onInputChange}
                        {...register('city')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">State</div>
                    <div>
                      <input
                        type="text"
                        name="state"
                        defaultValue={props.address?.state}
                        className="edit_input w-100 form-control"
                        // onChange={onInputChange}
                        {...register('state')}
                      />
                    </div>
                  </div>
                  <div className="ml-3 mr-3">
                    <div className="edit_lable  mt-2">Zipcode</div>
                    <div>
                      <input
                        type="number"
                        name="zip"
                        defaultValue={props.address?.zip}
                        className="edit_input w-100 form-control"
                        // onChange={onInputChange}
                        {...register('zip')}
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
              {/* </div>
              )} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAddress;
