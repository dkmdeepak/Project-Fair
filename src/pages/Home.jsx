import React,{useEffect,useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import './Home.css'

function Home() {
  const [token,setToken]=useState("")
  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
  })

  return (
    <>
    <div className='p-5'>
      <div className='p-4'>
        <h1 style={{fontSize:'80px',opacity:'60%'}}>****Read What you Like or Write What you want </h1>
      </div>
      <br />

    
      <div style={{display:'flex' , justifyContent:'center'}}>
      {
        token?
        <Link className='btn btn-success' to={"/dash"}>All Items</Link>
        :
        <Link to={'/auth'} className='btn' style={{backgroundColor: 'rgb(0, 168, 45)', color: '#ffffff', borderColor:'rgb(23, 23, 23)',  width: "350px",height: "90px"}}>
        <h3 className='mx-auto p-3'>Start for free</h3>
        </Link>
      }

      </div>

      <br /><br />


      <div>
      <Nav.Item>
        <Nav.Link href="/dash">NOVEL STORE 2024</Nav.Link>
      </Nav.Item>
        <p>Ut et sem nibh. Vestibulum in ultricies metus. Duis laoreet urna a volutpat sollicitudin. Nulla facilisi. Integer id ullamcorper dui, quis pulvinar ligula. Cras quis augue eros. Nam sed lorem lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div><br/>
      <div>
        <Link to='/dash'>
        <img style={{width:'100%'}} src="https://evernote.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-widgets.b4be340b.webp&w=3840&q=75" alt="" />
        </Link>
      </div>
      </div>
      <div>
        <img style={{width:'100%'}} src="https://evernote.com/images/backgrounds/green-dark-one.webp" alt="" />
      </div>
      <br />
    </>
  )
}

export default Home