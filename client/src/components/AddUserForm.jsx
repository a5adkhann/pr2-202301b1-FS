import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleUserAddition = async (f) => {
    f.preventDefault();
    try {
      const response = await axios.post("http://localhost:2000/adduser", {
        name,
        message
      });
      console.log(response);
      toast.success(response.data.message);
      setName("");
      setMessage("");
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className='flex justify-center my-20'>
        <form onSubmit={handleUserAddition}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Add User</legend>

            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

            <label className="label">Message</label>
            <input type="text" className="input" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />

            <button className="btn btn-neutral mt-4">Add</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default AddUserForm
