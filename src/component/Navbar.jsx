import React from 'react'

const Navbar = () => {
  return (
      <nav className="cont flex justify-between px-1 md:px-10 py-1 text-white bg-blue-600">
        <span className='font-bold text-xl'>my-Tasks</span>
        <ul className='flex gap-2'>
            <li className='cursor-pointer hover:font-bold text-sm transition-all py-1 px-3 rounded-xl hover:bg-blue-500'>Home</li>
            <li className='cursor-pointer hover:font-bold text-sm transition-all py-1 px-3 rounded-xl hover:bg-blue-500'>Your Tasks</li>
        </ul>
      </nav>
  )
}

export default Navbar
