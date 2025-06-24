import React from 'react'

const FetchUsersTable = () => {
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className='flex gap-2'>
                <button className="btn btn-soft btn-info">Edit</button>
                <button className="btn btn-soft btn-error">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default FetchUsersTable
