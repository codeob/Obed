import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className=''>
      <nav className='flex  space-x-4'>
        <Link to='/'>
        Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to="/details">
          Details
        </Link>
      </nav>
    </div>
  )
}
