import React from 'react'
/* import './Navbar.css' */

function Navbar() {
  return (
    <div className='Navbar justify-between flex bg-[#1D1D1D] py-3 px-10 cursor-pointer sticky top-0'>

      <h1 className=' text-white hover:font-extrabold drop-shadow-2xl'>FLASHFEED</h1>
      <h1 className=' text-red-700 hover:text-green-700'>BREAKING NEWS</h1>

      <ul className='flex text-[#2272FF] gap-x-10'>
        <li className='hover:text-red-600 underline decoration-1 px-3 py-0.5'>ABOUT</li>
        <li className='hover:text-red-600 underline decoration-1 px-3 py-0.5'>CONTACT-US</li>
      </ul>

    </div>
  )
}

export default Navbar


/*
p-[8px] */