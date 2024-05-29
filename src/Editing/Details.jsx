import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import BackButton from '../components/BackButton'
import { Spinner } from 'react-bootstrap'


function Details() {
const [book,setBook]=useState({})
const [loading,setLoading]=useState(false)
const { id } =useParams()

useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/book/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <div className='p-4 '>
    {/* <BackButton /> */}
    <h1>***Show Every</h1>
    {
        loading?(
            <Spinner />
        ):(
            <div className='flex flex-col border-2 rounded-xl w-fit p-4'>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-blue-500'>ID</span>
                    <span>{book._id}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-blue-500'>Title</span>
                    <span>{book.title}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-blue-500'>Author</span>
                    <span>{book.author}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-blue-500'>Publish Year</span>
                    <span>{book.publishYear}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-blue-500'>Created Time</span>
                    <span>{new Date(book.createdAt).toString()}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-blue-500'>Last Update Time</span>
                    <span>{new Date(book.updatedAt).toString()}</span>
                </div>
            </div>            
        )}    
    </div>
    </>
  )
}

export default Details