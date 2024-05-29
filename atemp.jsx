<a href="#" datatype='mobile-demo' className='sidenav-trigger show-on-large'>
<i className='fas fa-bars'></i></a>
{/* <ul className='sidenav' id='mobile-demo'>
  <li><Link to='/'>Home</Link></li>
</ul> */}


________________________________________________________________________________________________________
import React from 'react'
import Addfile from '../components/Addfile'
import { Col,Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Add from '../components/Add';
import Editfile from '../components/Editfile';
import { Link } from 'react-router-dom';



function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='m-5'>

    <Container style={{backgroundColor:'white'}} className="text-center">
      <Row>
      <div>
      <h1>Welcome</h1>
      <h5>***Everything is here!!!</h5>
    </div>
        <div>
            <Col className='p-3'>
              <div className=' border-3 p-4'>
                  
              <div className='d-flex justify-content-between  shadow mb-3 p-3 rounded'>
                      <h4>Project title 1</h4>
                      <div>
                      <Link className='btn'>
                        <i className="fa-solid fa-circle-info fa-2xl" />
                        </Link>
                        <Link className='btn x-1 y-3'>
                        <i className='fa-solid fa-pen-to-square fa-2xl'/>
                        </Link>
                        <Link className='btn x-3' >
                        <i className='fa-solid fa-trash fa-2xl' style={{color:'#e1141e'}} onClick={handleShow}/>
                        </Link>
                      </div>
                  </div>
                  
                  <div className='d-flex justify-content-between  shadow mb-3 p-3 rounded'>
                      <h4>Project title 1</h4>
                      <div>
                        <Link className='btn'>
                        <i className="fa-solid fa-circle-info fa-2xl" />
                        </Link>
                        <Link className='btn'>
                        <i className='fa-solid fa-pen-to-square fa-2xl'/>
                        </Link>
                        <Link className='btn' >
                        <i className='fa-solid fa-trash fa-2xl' style={{color:'#e1141e'}} onClick={handleShow}/>
                        </Link>
                      </div>
                  </div>
              </div>
            </Col>
      </div>
      
          <Add />
          <Addfile/>

      </Row>
      </Container>
    </div>
    </>
  )
}

export default Dashboard
_______________________________________________________________________________________________________________________________________


