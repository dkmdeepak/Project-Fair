import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


function Edit() {
    const[title,setTitle]=useState('');
    const[author,setAuthor]=useState('');
    const[loading,setLoading]=useState('');
    const[publishYear,setpublishYear]=useState(false);
    const navigate=useNavigate()
    const {id} =useParams()
    useEffect(() => {
      setLoading(true)
      axios.get(`http://localhost:3000/book/${id}`)
      .then((res)=>{
        setAuthor(res.data.author)
        setPublishYear(res.data.publishYear)
        setTitle(res.data.title)
        setLoading(false)
      }).catch((err)=>{
        setLoading(false)
        alert('An Error happened.Please Check Console')
        console.log(err);
      })
    },[])
    const handleCreate=()=>{
        const data={
            title,
            author,
            publishYear,
        }
        setLoading(true)
        axios
        .post('http://localhost:3000/book',data)
        .then(()=>{
            setLoading(false)
            navigate('/')
        })
        .catch((err)=>{
            setLoading(false)
            alert('An error happened Please Check console')
            console.log(err);
        })
    }
  return (
    <>
    <div className='p-4'>
        <h1 className='text-3xl my-4'>Edit Book</h1>
        { loading? <Spinner />:'' }
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Title</label>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Author</label>
        <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
        <input type="number" value={publishYear} onChange={(e)=> setpublishYear(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className='bg-sky-300 m-8' onClick={handleCreate}>
            Save
        </button>
    </div>
    </div>
    </>
  )
}

export default Edit