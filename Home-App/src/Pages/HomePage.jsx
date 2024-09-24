import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <Link to='/'>
          <h1>Home Page </h1>
        </Link>
    </div>
  )
}
