import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import FetchUsers from './pages/FetchUsers'
import AddUser from './pages/AddUser'

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<FetchUsers/>}></Route>
                <Route path='/adduser' element={<AddUser/>}></Route>
            </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
