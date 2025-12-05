import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ email, password })
    // Add your login logic here
    setEmail('')
    setPassword('')
  }

  return (
    <div className='h-screen w-full relative flex flex-col justify-between'>
      
      {/* Background Image with Overlay */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=800&auto=format&fit=crop)',
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/95'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 h-full flex flex-col justify-between'>
        
        {/* Top Section */}
        <div className='p-7'>
          {/* Logo */}
          <img 
            className='w-20 mb-10' 
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
            alt="Uber Logo" 
          />

          <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
            <input 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email" 
              placeholder="email@example.com" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-5 bg-white/90 backdrop-blur-sm focus:outline-none focus:border-black focus:bg-white transition" 
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password" 
              placeholder="password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-7 bg-white/90 backdrop-blur-sm focus:outline-none focus:border-black focus:bg-white transition" 
            />

            <button 
              type="submit" 
              className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg active:scale-95 transition-transform hover:bg-gray-900"
            >
              Login
            </button>
          </form>

          <p className='text-center mt-4 text-base'>
            New here? 
            <Link to='/User-Signup' className='text-blue-600 font-semibold ml-1'>
              Create new Account
            </Link>
          </p>
        </div>

        {/* Bottom Section */}
        <div className='bg-gradient-to-r from-orange-500 to-orange-600 text-white p-7'>
          <h2 className='text-xl font-bold mb-3'>Sign in as Captain</h2>
          <Link 
            to='/Captain-Login' 
            className='flex items-center justify-center w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg active:scale-95 transition-transform hover:bg-green-700'
          >
            Captain Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
