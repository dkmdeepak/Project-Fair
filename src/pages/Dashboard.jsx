import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinners from '../components/Spinners'
import { Link } from 'react-router-dom'
import Addfile from '../components/Addfile'
import '../App.css'


function Dashboard() {
  const [books,setBooks]=useState([])
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    axios.get('http://localhost:3000/book').then((res)=>{
      setBooks(res.data.data)
      setLoading(false)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
    <div className='p-4'>
      <h1>***Everything is Here</h1>
      <div className='flex justify-content-between items-center'>
        <Addfile />
      </div>
        {
        loading?(
        <Spinners/>)
        :
        ( 
          <div style={{boxShadow:' 0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
          <table className='w-full border border-spacing-2'>
            <thead>
              <tr>
                <th>No</th>
                <th className='bg-gray-200 p-2'>Title</th>
                <th>Author</th>
                <th>Publish Year</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book,index)=>(
                    <tr key={book._id} className='h-8'>
                      <td className='border text-center'>
                        {index+1}
                      </td>
                      <td className='border text-center'>
                        {book.title}
                      </td>
                      <td className='border text-center max-md:hidden'>
                        {book.author}
                        </td>
                        <td className='border text-center max-md:hidden'>
                        {book.publishYear}
                        </td>
                        <td className='border text-center max-md:hidden'>
                        <div className='flex justify-center gap-x-4'>
                        <Link to={'/books/dtls/:id'} className='btn'>
                        <i className="fa-solid fa-circle-info fa-2xl" />
                        </Link>
                        <Link to={'/books/edt/:id'} className='btn x-1 y-3'>
                        <i className='fa-solid fa-pen-to-square fa-2xl'/>
                        </Link>
                        <Link to={'/books/dlt/:id'} className='btn x-3' >
                        <i className='fa-solid fa-trash fa-2xl' style={{color:'#e1141e'}} />
                        </Link>
                        </div>
                        </td>
                    </tr>
                )
              )}
            </tbody>

          </table>
          </div>
         ) 
      } 
    </div>
    </>
  )
}

export default Dashboard