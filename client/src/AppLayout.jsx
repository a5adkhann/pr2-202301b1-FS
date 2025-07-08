import React from 'react'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = ({logoutUser}) => {
  return (
    <>
        <Navbar logoutUser={logoutUser}/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default AppLayout
