import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header.jsx";
import { useHistory, useLocation, useParams } from "react-router-dom";
import MyJumbotron from "../components/MyJumbotron";
import "./../scss/profile.scss";

const Store = () => {
  const location = useLocation();
  const history = useHistory();


  useEffect(() => {
  
  }, []);

  return (
    <div className="product_listing_page">
      <Header />
      <MyJumbotron
        title="Profile"
        route={[
          { title: "Home", to: "/" },
          { title: "Profile", isActive: true },
        ]}
      />
      <Container>
        <div className="row mt-5 mb-5">
          <div className="col-lg-10 m-auto">
            <div className="row">
                <div className="col-md-8 profile_border m-2" >
                    <div>
                        Profile 
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="profile_name">
                            Jasmin_Jassie
                        </div>
                        <div className="d-flex">
                            <div className="p-1"><img src={'./../../icons/add_post.svg'} className="profile_side_images" /></div>
                            <div className="p-1"><img src={'./../../icons/message.svg'} className="profile_side_images" /> </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="position-relative">
                                <img src={'./../../img/profile_img_2.png'}  className="profile_image"/>
                                <div><img src={'./../../icons/edit.svg'} className="profile_edit" /></div>
                            </div>
                            <div className="name">Jasmine Jassie</div>
                            <div ><a href="www.petowner.com" className="link">www.petowner.com</a></div>
                            <div >deepti@gmail.com</div>
                        </div>
                          
                        <div>
                            <div className="d-flex justify-content-center">
                                <div>
                                   <div className="count"> 
                                     20
                                   </div> 
                                   <div className="count_title">
                                       Post
                                   </div>
                                </div>
                                <div>
                                   <div className="count"> 
                                     783
                                   </div> 
                                   <div className="count_title">
                                       Follower
                                   </div>
                                </div>
                                <div>
                                   <div className="count"> 
                                     129
                                   </div> 
                                   <div className="count_title">
                                       Following
                                   </div>
                                </div>
                            </div>
                            
                            <div>
                                    <button className="follow_button w-100 mt-2 ">
                                        Edit Profile
                                    </button>
                            </div>

                        </div>
                        
                    </div>

                    <div>
                            <div claaname="story">
                                My pets
                            </div>
                            <div className="d-flex">
                                <div  className="p-2">

                                <img src={'./../../img/store_img_2.png'} className="story_img" ></img>
                                </div>
                                <div className="p-2">
                                <img src={'./../../img/store_img_2.png'} className="story_img" ></img>
                                    
                                </div>
                                <div className="p-2">
                                    
                                <img src={'./../../img/store_img_2.png'} className="story_img" ></img>
                                </div>
                                <div className="p-2">
                                    
                                <img src={'./../../img/add_post.png'} className="story_img" ></img>
                                 </div>
                            </div>
                    </div>
                    <div className="mt-2 d-flex">
                        <div  className="tab_text">
                            <u>Posts</u>
                        </div>
                        <div  className="tab_text">
                            Tags
                        </div>
                        <div  className="tab_text">
                        Saved
                        </div>
                    </div>
                    <div className="w-100">
                    <div className="row">
                        <div className="col-md-4">
                        <img src={'./../../img/store_img_2.png'} className="post_img" />
                        </div>
                        <div className="col-md-4">
                        <img src={'./../../img/store_img_2.png'} className="post_img" />
                        </div>
                        <div className="col-md-4">
                        <img src={'./../../img/store_img_2.png'} className="post_img" />
                        </div>
                        <div className="col-md-4">
                        <img src={'./../../img/store_img_2.png'} className="post_img" />
                        </div>
                        <div className="col-md-4">
                        <img src={'./../../img/store_img_2.png'} className="post_img" />
                        </div>
                        <div className="col-md-4">
                        <img src={'./../../img/store_img_2.png'} className="post_img" />
                        </div>
                        
                    </div>
                    </div>
                </div>

                <div className="col-md-3 profile_border m-2">

                <div >
                <div className="left-side-title">Jasmine_Jassie</div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-1"><img src={'./../../icons/insights.svg'} className="profile_side_images" /></div>
                    <div className="p-1">Insights</div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-1"><img src={'./../../icons/my_orders.svg'} className="profile_side_images" /></div>
                    <div className="p-1">My Orders</div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-1"><img src={'./../../icons/my_store.svg'} className="profile_side_images" /></div>
                    <div className="p-1">My Store</div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-1"><img src={'./../../icons/account.svg'} className="profile_side_images" /></div>
                    <div className="p-1">Account</div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-1"><img src={'./../../icons/settings.svg'} className="profile_side_images" /></div>
                    <div className="p-1">Settings</div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-1"><img src={'./../../icons/help.svg'} className="profile_side_images" /></div>
                    <div className="p-1">Help</div>
                </div>
                </div>


                  <div className="d-flex justify-content-center mt-3">
                    
                    <div className="suggested_profiles">
                        Suggested Profiles
                    </div>

                
                </div>
                <div >
                <div className="d-flex justify-content-between mt-3">
                    <div><img src={'./../../img/store_img_2.png'} className="suggested_profiles_img" /> 
                        <span className="profile_texts">User1</span>  </div>
                       <div className="follow_text">
                           Follow
                       </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <div><img src={'./../../img/store_img_2.png'} className="suggested_profiles_img" /> 
                        <span className="profile_texts">User1</span>  </div>
                       <div className="follow_text">
                           Follow
                       </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <div><img src={'./../../img/store_img_2.png'} className="suggested_profiles_img" /> 
                        <span className="profile_texts">User1</span>  </div>
                       <div className="follow_text">
                           Follow
                       </div>
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
      </Container>
    </div>
  );
};

export default Store;
