import { Link, Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'

export default function Navbar() {
  return (
    <div className=' flex justify-center'>
       <div>
         <div className='flex justify-center gap-x-6'>
         <Nav />
         </div>
       <Outlet/>
       </div>
    </div>
  )
}
