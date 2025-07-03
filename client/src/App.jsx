import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchUsers from './pages/FetchUsers'
import AddUser from './pages/AddUser'
import { Toaster } from 'react-hot-toast'
import Registeration from './pages/Registeration'
import AppLayout from './AppLayout'
import Login from './pages/Login'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout/>}>
                <Route path='/' element={<FetchUsers/>}></Route>
                <Route path='/adduser' element={<AddUser/>}></Route>
                </Route>
                <Route path='/registeration' element={<Registeration/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>

        <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
