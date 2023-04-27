import React from 'react'

import Typed from 'react-typed'


export default function Bflogin()  {
  return (
    <div className='bg-black w-full py-[170px] flex px-20 ' >
        
        

    <div className= 'max-w-[1240px] mx-auto py-[69px] font-bold text-center '>
                <div className='text-xl text-white md:text-3xl '>
                Safe & Secure
                </div>
              <h2 className='text-white text-[40px] md:text-[60px]'>
                 Grow With Us
              </h2>
              <div className='text-[36px] md:text-[50px] text-white'> 
                    
                    <Typed 
                      strings={[' Stop Moonlighting',' Verify Employee via BlockChain']}
                      typeSpeed={200}
                      loop={true}
                      backSpeed ={50}
                    />
               </div>
            </div> 
            </div>
        
  )
}


