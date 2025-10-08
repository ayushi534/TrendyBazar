import React from 'react'

const WelCome = () => {
  return (
    <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
    <div className="flex shadow-2xl">
      <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-2xl">

        <h1 className="text-5xl font-bold">WELCOME</h1>

        <div className="flex flex-col text-2xl text-left gap-1">
          <span>Username</span>
          <input type="text" className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-slate-50"/>
        </div>

        <div className="flex flex-col text-1xl text-left gap-1">
          <span>Password</span>
          <input type="password" className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-slate-50"/>
          <div className="flex gap-2 items-center">
            <input type="checkbox"/>
            <span className="text-base">Remember Password</span>
          </div>

          <button className="px-10 py-2 text-2xl rounded-md bg-gradient-to-t from-blue-800 hover:from-pink-500 hover:to-yellow-200 text-white">Login</button>
          <p className="font-semibold">Don't have an account? <a href="#" className="text-blue-900">Regestier</a></p>
        </div>

      </div>
    </div>
  
  </section>

  )
  
}

export default WelCome
