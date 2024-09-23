
import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {

  const NBA_Players = [
    {name: 'Lebron James',
     team: 'Los Angeles Lakers',
     img:"https://images2.thanhnien.vn/528068263637045248/2023/12/22/lebron1-17032315384931989776698.jpg",
     details:"LeBron James is an American professional basketball player who is widely considered one of the greatest all-around basketball players of all time."
    },
    {name: 'Kevin Durant',
    team:"Chicago",
    img:"https://people.com/thmb/D20Z23S7fAT7XAehcfBZ4i9-qaw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x169:721x171)/kevin-durant-purcahses-major-league-pickleball-team-102022-2-d7e6dffd0ccc4045953884ab9fedc26b.jpg"
  }
  ]

  return (
    <div className='flex justify-center'>
      {NBA_Players.map((Play)=>{
        return(
           
              <Link to={`/about/${Play.name}`}>
              <div className='flex justify-center'>
                 <div className='flex justify-center p-5 '>
             <div className=' flex-wrap bg-gray-100 gap-x-7 h-[70vh] w-[20rem] px-16 rounded-xl'>
             <h1 className='text-center font-serif font-semibold mt-3'>{Play.name}</h1>
             <img src={Play.img} alt="" className='h-[30vh] w-[16rem] rounded-lg mt-5'  />
             <p className='text-center mt-3 font-thin'>{Play.details}</p>
             </div>
           </div>
           </div>
              </Link>
          
        )
      })}
    </div>
  )
}
