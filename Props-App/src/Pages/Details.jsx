import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
 const {id} = useParams();

  return (
    <div className='flex justify-center  bg-orange-700 text-white items-center mt-20 shadow-lg shadow-slate-500 rounded-xl min-h-48 w-[30rem] hover:animate-spin delay-300 ease-in-out'>
      {id}
    </div>
  )
}
