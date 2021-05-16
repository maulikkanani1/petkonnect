import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Star,StarFill} from 'react-bootstrap-icons'
import '../scss/rateNreviewModal.scss'; 
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {addReviews} from '.././ApiService';


const RateAndReviewModal = (props) => {

    const {products,show,onHide} = props;
    const [starsCount,setStarsCount] = useState(0);
    const [review,setReview] = useState('');
    const [clicked1,setClicked1] = useState(false);
    const [clicked2,setClicked2] = useState(false);
    const [clicked3,setClicked3] = useState(false);
    const [clicked4,setClicked4] = useState(false);
    const [clicked5,setClicked5] = useState(false);
    const [countArray,setCounArray] = useState([]);
    




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
                              <h6>Rate our product:</h6>
                              <div className="stars">
                                <span onClick={() => {setClicked1(!clicked1);setCounArray([...countArray,clicked1])}}>{clicked1 ? <StarFill color="#ff801e"/> : <Star color="#ff801e"/>}</span>
                                <span onClick={() => {setClicked2(!clicked2);setCounArray([...countArray,clicked2])}}>{clicked2 ? <StarFill color="#ff801e"/> : <Star color="#ff801e"/>}</span>
                                <span onClick={() => {setClicked3(!clicked3);setCounArray([...countArray,clicked3])}}>{clicked3 ? <StarFill color="#ff801e"/> : <Star color="#ff801e"/>}</span>
                                <span onClick={() => {setClicked4(!clicked4);setCounArray([...countArray,clicked4])}}>{clicked4 ? <StarFill color="#ff801e"/> : <Star color="#ff801e"/>}</span>
                                <span onClick={() => {setClicked5(!clicked5);setCounArray([...countArray,clicked5])}}>{clicked5 ? <StarFill color="#ff801e"/> : <Star color="#ff801e"/>}</span>
                              </div>
                            </div>
                            <Form>
                              <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <h6>Write a review:</h6> </Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => setReview(e.target.value)}/>
                              </Form.Group>
                            </Form>
                            <button onClick={() => {
                              console.log('review---',review);
                              let countF = 0;
                              let countT = 0;
                              for(let i=0;i<countArray.length;i++) {
                                countArray[i] ? countT++ : countF++;
                              }
                              setStarsCount(countF-countT);
                              addReviews({
                                'userID' : products['id'], 
                                'rating' : starsCount,
                                'review' : review
                              },products['id']);
                              setClicked1(false);
                              setClicked2(false);
                              setClicked3(false);
                              setClicked4(false);
                              setClicked5(false);
                              setReview('');
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
          <button onClick={console.log('heyoo:::',products['productIDs'])} className="btn btn-primary">
            CLOSE{' '}
          </button>
        </Modal.Footer>
      </Modal>
    )
}

export default RateAndReviewModal
