import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const RegisterationForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisteration = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:2000/register", {
            fullName,
            email,
            password
          })
          toast.success(response.data.message);
          setFullName("");
          setEmail("");
          setPassword("");
        }
        catch(err){
          console.log(err);
        }
    }


  return (
    <>
            <div className='flex w-[30%] border border-gray-600 p-10 mx-auto mt-[15%]'>
                <form onSubmit={handleRegisteration}>
                    <label>Full Name:</label>
                    <input type="text" className='w-[100%] border border-gray-600 focus:outline-none focus:border-red-600 p-2'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    />

                    <label>Email Address:</label>
                    <input type="email" className='w-[100%] border border-gray-600 p-2 focus:outline-none focus:border-red-600'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password:</label>
                    <input type="password" className='w-[100%] border border-gray-600 p-2 focus:outline-none focus:border-red-600'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className='text-center'>Already have an Account? <Link className='text-blue-600' to="/login">Login</Link></p>

                    <button className='w-[100%] py-1 border border-gray-600 mt-3 rounded hover:bg-red-600'>Register</button>

                </form>
            </div>
    </>
  )
}

export default RegisterationForm
