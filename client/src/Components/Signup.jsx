import React from 'react'

const Signup = () => {
   
  return (
 <section className='min-h-screen flex items-center justify-center font-sans bg-blue-950'>
    <div className='flex shadow-2xl'>
        <div className='flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-2xl'>

            <h1 className='text-3xl font-bold'>Sign Up</h1>

            <div className='flex flex-col text-xl text-left gap-1'>
                
                <input type='text' placeholder='Name' className='rounded-md p-1 border-2 outline-none focus:border-blue-300'/>
                <input type='Email' placeholder='Email' className='rounded-md p-1 border-2 outline-none focus:border-blue-300'/>
                <input type='password' placeholder='Password'className='rounded-md p-1 border-2 outline-none focus:border-blue-300' />    
                <input type='Confirm password' placeholder='Confirm Password'className='rounded-md p-1 border-2 outline-none focus:border-blue-300' />
            
            <button type='Submit' className='px-9 py-2 text-xl rounded-md bg-blue-400 hover:bg-blue-800'>Submit</button>
            </div>

           
        </div>
    </div>
 </section>
   
  )
}

export default Signup
