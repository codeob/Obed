import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-center gap-5'>
        <Link to="/">HomePage</Link>
        <Link to="/about">AboutPage</Link>
        <Link to="/details">DetailsPage</Link>
    </div>
  )
}
