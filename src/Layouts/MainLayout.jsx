import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../Components/Footer';


const MainLayout = () => {
  return (
    <div>
      <>
      <Navbar />
      <Outlet/>
      <ToastContainer/>
      <Footer/>
      </>
    </div>
  )
}

export default MainLayout
