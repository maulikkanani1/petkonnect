import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Star,StarFill,StarHalf} from 'react-bootstrap-icons'
import '../scss/rateNreviewModal.scss'; 
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {addReviews} from '.././ApiService';
import sweetalert from 'sweetalert';
import StarRating from './StarRating';


const RateAndReviewModal = (props) => {

    const {products,show,onHide} = props;
    const [starsCount,setStarsCount] = useState(0);
    const [review,setReview] = useState('');

    const ratingChanged = (newRating) => {
      setStarsCount(newRating);
    };

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Rate And Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="rating">
{              products['productIDs'].map((product,i) => (
                <Accordion>
                  <Card className="w-100 prodCard">
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        {product['productName']}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="accordion-content">
                            <div className="top-half">
                              <h6>Rate this product:</h6>
                              <StarRating handleRating={ratingChanged}/>
                            </div>
                            <Form>
                              <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <h6>Write a review:</h6> </Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => setReview(e.target.value)}/>
                              </Form.Group>
                            </Form>
                            <button onClick={() => {
                              addReviews({
                                rating : starsCount,
                                review : review
                              },products['id']).then(({data}) =>{
                                if (data.status) {
                                  console.log(data);
                                  sweetalert('Thanks for your review !', '', 'success');
                                }
                              });
                              console.log(`ratings--${starsCount} review--${review} id--${product['id']}`);
                              
                            }} className="btn btn-primary">
                              CONFIRM{' '}
                            </button>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                  </Card>
              </Accordion>
              ))}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={onHide}
           className="btn btn-primary">
            CLOSE{' '}
          </button>
        </Modal.Footer>
      </Modal>
    )
}

export default RateAndReviewModal


