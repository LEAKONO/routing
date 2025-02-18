import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    
  return (
    <div>
        <nav>
          <div className='bg-neutral-100 p-6 shadow' >
          <ul className='flex justify-end items-center gap-10 font-bold'>
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about"className="hover:text-blue-600">About</Link></li>
            <li><Link to="/skills"className="hover:text-blue-600">Skills</Link></li>
            <li><Link to="/services"className="hover:text-blue-600">Services</Link></li>
            <li> <Link to="/contact"className="hover:text-blue-600">Contact</Link></li>
            <li> <Link to="/theme"className="hover:text-blue-600">Theme</Link></li>

          </ul>
          </div>
        </nav>
      
    </div>
  )
}

export default Navbar
