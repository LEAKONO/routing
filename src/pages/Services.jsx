import React from 'react'

export default function Services() {
  return (
    <div className='flex flex-col p-6 justify-center items-center'>
      <h1 className='font-bold text-3xl'>Services</h1>
      <ul className='flex gap-5'>
        <li className='border p-10 rounded'>Web Development</li>
        <li className='border p-10 rounded'>API Development</li>
        <li className='border p-10 rounded'>Database Management</li>
      </ul>
    </div>
  )
}

