import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from  'react-router-dom'
import HomePage from './Pages/HomePage'
import NavLayout from './Layout/NavLayout'

export default function App() {
    const NewVersion = createBrowserRouter(
       createRoutesFromElements(
           <Route path='/' element={<NavLayout/>}>
             <Route index element={<HomePage/>}/>
             <Route path='/about' element={<h1>About</h1>}/>
             <Route path='/details' element={<h1>Details</h1>}/>
           </Route>
       )
    )

  return (
    <div className='flex justify-center'>
       <RouterProvider router={NewVersion}/>
    </div>
  )
}
