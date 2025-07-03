import React, { useState } from 'react'

const RegisterationForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisteration = () => {
        
    }


  return (
    <>
            <div className='flex w-[30%] border border-gray-600 p-3 mx-auto mt-[15%]'>
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

                    <button className='w-[100%] py-1 border border-gray-600 mt-3 rounded hover:bg-red-600'>Register</button>

                </form>
            </div>
    </>
  )
}

export default RegisterationForm
