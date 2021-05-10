import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ResetPassModal = (props) => {
    return (
       <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
           <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                   Reset Password
               </Modal.Title>
           </Modal.Header>
           <Modal.Body>
               <h4>Enter your registered email:</h4>
               <Form>
                   <Form.Control type="email" placeholder="Enter your email..." />
               </Form>
           </Modal.Body>
           <Modal.Footer>
               <button onClick={props.onHide} className="btn btn-primary" >CONFIRM </button>
           </Modal.Footer>
       </Modal>
    );
}

export default ResetPassModal
