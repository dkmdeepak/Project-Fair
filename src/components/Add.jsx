import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div>
        <button className='btn btn-info mb-4' onClick={handleShow}>
                Add
        </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                <img className='img-fluid' src="https://static.thenounproject.com/png/212328-200.png" alt="" />
                </Col>
                <Col>
                <FloatingLabel controlId="titleinp" label="Title" className="mb-3">
                    <Form.Control type="text" placeholder="Title" />
                </FloatingLabel>
                <FloatingLabel controlId="overview" label="Overview" className="mb-3">
                    <Form.Control type="text" placeholder="Brief" />
                </FloatingLabel>
                <FloatingLabel controlId="github" label="Github Url" className="mb-3">
                    <Form.Control type="text" placeholder="Github Url" />
                </FloatingLabel>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default Add