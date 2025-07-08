import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const LoginForm = ({loginUser}) => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    
        const handleLogin = async(e) => {
            e.preventDefault();
            try {
              const response = await axios.post("http://localhost:2000/login", {
                email,
                password
              });
              toast.success(response.data.message);
              setEmail("");
              setPassword("");
              loginUser(response.data.registeredUser);
            }
            catch(err){
              console.log(err);
            }
        }
    

  return (
    <>
        <div className='flex w-[30%] border border-gray-600 p-10 mx-auto mt-[15%]'>
                <form onSubmit={handleLogin}>
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

                    <p className='text-center'>Don't have an account? <Link className='text-blue-600' to="/registeration">Register</Link></p>

                    <button className='w-[100%] py-1 border border-gray-600 mt-3 rounded hover:bg-red-600'>Login</button>

                </form>
            </div>
    </>
  )
}

export default LoginForm
