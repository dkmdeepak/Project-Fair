import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { userRegister,userLogin } from '../../services/allApis';
import { useNavigate } from 'react-router-dom';


function Auth() {

    const[status, setStatus] = useState(true)
    const [data,setData]=useState({
      username:'',password:'',email:''
    })
    const navigate=useNavigate()
    // console.log(data);

    const changeStatus = () => {
        setStatus(!status)
    }

    const handleRegister=async()=>{
      console.log(data);
      const{username,password,email}=data
      if(!username || !password || !email){
        toast.warning("Please Fill the Form Properly!!");
      }
      else{
        const result=await userRegister(data)
        console.log(result);
        if(result.status==201){
          toast.success("User Registered Successfully!!");
          setData({username:"",password:"",email:""})
          setStatus(true)
        }
        else{
          toast.error(result.response.data);
        }
      }
    }

    const handleLogin=async()=>{
      const {email,password}=data
      if(!email || !password){
      toast.warning()
      }
      else{
        const result=await userLogin({email,password})
        console.log(result);
        sessionStorage.setItem('token',result.data.token)
        sessionStorage.setItem('username',result.data.user)
        toast.success("Login Successfull")
        navigate('/')
      }
    }
  return (
   <>
    <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
    <div className='shadow border w-50 p-4'>
    <Row>
        <div className='d-flex justify-content-center'>
            <Col sm={12} md={6}>
                {
                    status?
                    <span className='d-flex justify-content-center'>
                    <div className='text' style={{fontSize:'90px',fontWeight:'30px',color:'rgb(0, 168, 45)', marginTop:'3px'}}>
                     LogIn
                    <p className='mx-auto' style={{width:'81px', height:'13px',background:'rgb(0, 168, 45)',borderRadius:'30px'}}></p>
                    </div>
                    </span>
                    :
                    <span className='d-flex justify-content-center'>
                    <div className='text' style={{fontSize:'90px',fontWeight:'30px',color:'rgb(0, 168, 45)', marginTop:'3px'}}>
                    SignUp
                    <p className='mx-auto' style={{width:'81px', height:'13px',background:'rgb(0, 168, 45)',borderRadius:'30px'}}></p>
                    </div>
                    </span>
                }
    <div className='p-5 '>
            {
              !status &&
    <FloatingLabel controlId="user" label="Username" className="mb-3">
        <Form.Control type="text" placeholder="username" onChange={(e)=>{setData({...data,username:e.target.value})}}/>
      </FloatingLabel>
                    }
      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>{setData({...data,email:e.target.value})}} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setData({...data,password:e.target.value})}} />
      </FloatingLabel>
                </div>
                <div className='mt-3 d-flex justify-content-between'>
                  {
                    status?
                    <button className='btn' onClick={handleLogin} style={{color:'white',width:'100px',height:'50px',textAlign:'center',fontSize:'15px',fontWeight:'20px',border:'none',backgroundColor:'rgb(0, 168, 45)'}} >
                     <span>Login</span>
                     </button>
                     :
                     <button className='btn' onClick={handleRegister}  style={{color:'white',width:'100px',height:'50px',textAlign:'center',fontSize:'15px',fontWeight:'20px',border:'none',backgroundColor:'rgb(0, 168, 45)'}} >
                     <span>SignUp</span>
                     </button>
                  } 
                       <button className='btn btn-link'  onClick={changeStatus}>
                        {
                           status ?
                           <span>I don't have an Account</span>
                           :
                           <span>Already have an Account?</span>
                       }
                    </button>
                    <div>

                    </div>
                    <br />
               </div>
           </Col>
           </div>
       </Row>
       </div>

    </div>
    <ToastContainer />
   </>
  )
}

export default Auth