import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Spinners() {
  return (
    <>
    <div className='d-flex justify-content-center'>
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="light" />
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="light" />
    </div>
    </>
  )
}

export default Spinners