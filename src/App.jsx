
// import './App.css'
import './bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Novel from './pages/Novel'
import About from './footer/resources/About'
import Blog from './footer/resources/Blog'
import Files from './components/Files'
import Wishlist from './shopping/Wishlist'
import Carts from './shopping/Carts'
import Public from './pages/Public'
import Product from './shopping/Product'
import Auth from './pages/Auth'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Spinner from './components/Spinners'
import Create from './Editing/Create'
import Edit from './Editing/Edit'
import Delete from './Editing/Delete'
import Details from './Editing/Details'

function App() {

  return (
    <>
    <div>
    <Header/>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dash' element={<Dashboard/>} />
        <Route path='/nov' element={<Novel/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/ab' element={<About/>} />
        <Route path='/bl' element={<Blog/>} />
        <Route path='/file' element={<Files/>} />
        <Route path='/pub' element={<Public/>} />
        <Route path='/spin' element={<Spinner/>} />
        <Route path='/books/edt/:id' element={<Edit/>} />
        <Route path='/books/crt' element={<Create/>} />
        <Route path='/books/dtls/:id' element={<Details/>} />
        <Route path='/books/dlt/:id' element={<Delete/>} />
        <Route path='/cart' element={<Carts/>} />
        <Route path='/prod' element={<Product/>} />
        <Route path='/wish' element={<Wishlist/>} />
      </Routes>
    <Footer/>  
    <ToastContainer />
    </div>
    </>
  )
}

export default App
