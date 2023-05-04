import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";


export default function Header() {
    const [toggle, setToggle] = useState(false);
    const { loginWithRedirect, isAuthenticated, logout, user} = useAuth0();

  return (
    <div className='bg-black w-full py-[21px] p-10'>

      <div className='items-center flex justify-between mx-auto'>
        <div className=' text-3xl font-bold text-white'>
            WAULT
        </div>

        {/* Right corner button Javascript part */}
        {
            toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/> 
            :
           <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>

        }
        {/* Full Page Menu*/}
        
        <ul className='hidden md:flex items-center text-white gap-10 '>
            <li className='hover:text-green-600 focus:outline-text' >
              <a href = "/home">Home</a>
                
            </li>
            <li className='hover:text-green-600 focus:outline-text'>
              <a href="/registration">Apply</a>
              
            </li >
            <li className='hover:text-green-600 focus:outline-text'>
              <a href = "/about">About</a>
                 
            </li>
            <li className='hover:text-green-600 focus:outline-text'>
              <a href = "/contact">Contact</a>
                
            </li>
            <li className='hover:text-green-600 focus:outline-text'>
              <a href = "/LLogin">Login</a>
                
            </li>
      
      {/* Authentication Part via Auth0
           
            { isAuthenticated && (
              <li>
             <p>{user.name}</p>
             </li>
             )}
           

            { isAuthenticated ? (
            <li>
              <button onClick={() => logout( { returnTo: window.location.origin } )} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log out
           </button>
            
           </li>
            ) : (
           <li>
           <button onClick={() => loginWithRedirect() } className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Log in
           </button>
           </li>
            )}  */}
        </ul>

        {/* Responsive Menu*/}
        <ul className={`duration-500 md:hidden w-full h-half-screen text-yellow fixed bg-[#F6F7C1] top-[78px]
        ${toggle ? 'right-[0]' : 'right-[-100%]'}`}>
            <li className='p-4 hover:text-green-600 focus:outline-text' >
            <a href = "/home">Home</a>
            </li>
            <li className='p-4 hover:text-green-600 focus:outline-text'>
            <a href = "/registration">Apply</a>
            </li>
            <li className='p-4 hover:text-green-600 focus:outline-text'>
            <a href = "/home">About</a>
            </li>
            <li className='p-4 hover:text-green-600 focus:outline-text'>
            <a href = "/home">Contact</a>
            </li>
            { isAuthenticated ? (
            <li>
              <button onClick={() => logout( { returnTo: window.location.origin } )} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log out
           </button>
            
           </li>
            ) : (
           <li>
           <button onClick={() => loginWithRedirect() } className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Log in
           </button>
           </li>
            )} 

        </ul>

      </div>
    </div>
  )
}


