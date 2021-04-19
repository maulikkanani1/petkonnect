import React, { useEffect, useState } from "react";
import '../../scss/model.scss';

const EditProfile = (props) => {
  return (
    <div classNameName="col-lg-4 product-menu">
            <div className={props.status ? 'modal fade show' : 'modal fade'}  style={{display:props.status ? 'block' : 'none'}} id="edit_model" tabindex="-1" role="dialog" aria-labelledby="edit_model" aria-hidden="true" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5  className='mt-3'className="modal-title" id="edit_model" className="edit_title">Edit Profile</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" onClick={props.close}>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <div class="container-fluid">
                    <div className="m-3">
                        <div className="d-flex justify-content-center"><img src={'./../../img/profile_img_2.png'}  className="edit_profile_image"/></div>
                        <div className="d-flex justify-content-center"><div className="change_profile">Change profile photo</div></div>
                        
                    </div>
                    <div className='ml-3 mr-3'>
                    <div className="edit_lable  mt-2">
                        Username
                    </div>
                    <div>
                        <input type="text" name="username" className="edit_input w-100" />
                    </div>
                    </div>
                    <div className='ml-3 mr-3'>
                    <div className="edit_lable  mt-2">
                        Name
                    </div>
                    <div>
                        <input type="text" name="name" className="edit_input w-100" />
                    </div>
                    </div>
                    <div className='ml-3 mr-3'>
                    <div className="edit_lable  mt-2">
                        Website
                    </div>
                    <div>
                        <input type="text" name="website" className="edit_input w-100" />
                    </div>
                    </div>
                    <div  className='ml-3 mr-3'>
                    <div className="edit_lable  mt-2">
                        Email
                    </div>
                    <div>
                        <input type="email" name="email" className="edit_input w-100" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary edit_save m-auto w-50">Save</button>                  
                </div>
                </div>
            </div>
            </div>
    </div>
  );
};

export default EditProfile;


