import React, { useState } from 'react'

const LoginForm = () => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    
        const handleLogin = () => {
            
        }
    

  return (
    <>
        <div className='flex w-[30%] border border-gray-600 p-3 mx-auto mt-[15%]'>
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

                    <button className='w-[100%] py-1 border border-gray-600 mt-3 rounded hover:bg-red-600'>Login</button>

                </form>
            </div>
    </>
  )
}

export default LoginForm
