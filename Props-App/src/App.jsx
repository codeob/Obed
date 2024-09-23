import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Details from './Pages/Details'
import ErrorPage from './Pages/ErrorPage'

export default function App() {
    
    const PlatForm = createBrowserRouter(
       createRoutesFromElements(
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route  path='/about/:id' element={<Details/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route  path='*' element={<ErrorPage/>}/>
        </Route>
       )
    )

  return (
    <div>
      <RouterProvider router={PlatForm}/>
    </div>
  )
}

