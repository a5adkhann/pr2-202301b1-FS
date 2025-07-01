import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const FetchUsersTable = () => {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("")
  const [editMessage, setEditMessage] = useState("")

  const fetchUsers = async() => {
    try{
      const response = await axios.get("http://localhost:2000/getusers");
      console.log(response.data.users);
      setUsers(response.data.users);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [users])

  const handleEdit = (user) => {
    setEditingId(user._id);
    setEditName(user.name);
    setEditMessage(user.message);
    console.log(editingId);
  }

  const saveEdit = async() => {
    try {
      const response = await axios.put(`http://localhost:2000/updateuser/${editingId}`, {
        name: editName,
        message: editMessage
      });
      console.log(response);
      toast.success(response.data.message);
      setEditingId(null);
      setEditName("");
      setEditMessage("");
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-[50%] mx-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
            <tr key={index}>
              <th>{index+1}</th>
              <td>
                
                {
                editingId == user._id ? 
                <input type="text" className='border border-gray-300 p-2 focus:border-red-600 focus:outline-none' value={editName} onChange={(e) => setEditName(e.target.value)}/>
                :
                user.name
                
                }
                
                </td>
              <td>

                {
                editingId == user._id ? 
                <input type="text" className='border border-gray-300 p-2 focus:border-red-600 focus:outline-none' value={editMessage} onChange={(e) => setEditMessage(e.target.value)}/>
                :
                user.message
                
                }
              </td>
              <td className='flex gap-2'>
                {editingId == user._id ?
                  <>
                <button className="btn btn-soft btn-accent" onClick={() => saveEdit()}>Save</button>
                <button className="btn btn-soft btn-warning" onClick={() => setEditingId(null)}>Cancel</button>
                </>
                :
                <>
                <button className="btn btn-soft btn-info" onClick={() => handleEdit(user)}>Edit</button>
                <button className="btn btn-soft btn-error">Delete</button>
                </>
              }
              </td>
            </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default FetchUsersTable
