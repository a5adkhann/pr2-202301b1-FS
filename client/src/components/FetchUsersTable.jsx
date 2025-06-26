import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchUsersTable = () => {
  const [users, setUsers] = useState([]);

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
  }, [])

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
            <tr>
              <th>{index+1}</th>
              <td>{user.name}</td>
              <td>{user.message}</td>
              <td className='flex gap-2'>
                <button className="btn btn-soft btn-info">Edit</button>
                <button className="btn btn-soft btn-error">Delete</button>
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
