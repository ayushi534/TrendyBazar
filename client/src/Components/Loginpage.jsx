import React from 'react'
import Images from "../assets/backgroundimg.jpg";


const Loginpage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center font-mono ">
    <div className="flex shadow-2xl">

      <div className='absolute inset-0'>
        <img src={Images} alt='Art Background' className='w-full h-full object-cover blur-sm scale-105'/>
        <div className='absolute inset-0 bg-Brown mix-blend-multiply'></div>
      </div>

      <div className="relative bg-amber-50 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-[100%]  max-w-md text-center text-Brown">
        <h1 className="text-5xl font-bold">Welcome Back to ArtAmour</h1>
        <p className='text-sm mb-8 text-Redwood'> Login to explore exclusive collections of art and creativity</p>

        <div className="flex flex-col text-2xl text-left gap-1">
          <span>Username</span>
          <input type="text" placeholder='Enter your Name' className="rounded-md  p-1 border-2 outline-none focus:border-Brown focus:bg-slate-50"/>
        </div>

        <div className="flex flex-col text-2xl text-left gap-1">
          <span>Password</span>
          <input type="password" placeholder='Enter your Password' className="rounded-md p-1 border-2 outline-none focus:border-Brown focus:bg-slate-50"/>
          
          <div className="flex gap-1 items-center">
            <input type="checkbox"/>
            <span className="text-sm">Forget Password</span>
          </div>

          <button className="px-10 py-2 text-2xl rounded-md bg-Brown hover:bg-Redwood text-Cream">Login</button>
          <p className="text-sm text-center text-Redwood">Don't have an account? <a className="text-Brown text-semibold hover:underline">Signup</a></p>
        </div>

      </div>
    </div>
  
  </section>
  )
}

export default Loginpage
