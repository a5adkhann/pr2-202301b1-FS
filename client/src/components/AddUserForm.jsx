import React from 'react'

const AddUserForm = () => {
  return (
    <>
      <div className='flex justify-center my-20'>
        <form>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Add User</legend>

            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            <label className="label">Message</label>
            <input type="text" className="input" placeholder="Message" />

            <button className="btn btn-neutral mt-4">Add</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default AddUserForm
