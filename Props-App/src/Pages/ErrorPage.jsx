import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='flex justify-center items-center  '>
         <h1 className='text-blue-500'>Page not  found <Link to="/" className='hover:shadow-lg shadow-slate-600 rounded-lg '>Go back Home Page</Link></h1>
    </div>
  )
}
