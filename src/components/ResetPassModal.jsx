import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { forgotPassword } from '../ApiService';
import { propTypes } from 'react-bootstrap/esm/Image';

const ResetPassModal = (props) => {
  const [email, setEmail] = useState('');
  const handleConfirm = (e) => {
    e.preventDefault();
    forgotPassword({ email }).then(({ data }) => {
      if (data.status) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    });
    props.onHide();
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
          Reset Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Enter your registered email:</h4>
        <Form>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleConfirm} className="btn btn-primary">
          CONFIRM{' '}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResetPassModal;
