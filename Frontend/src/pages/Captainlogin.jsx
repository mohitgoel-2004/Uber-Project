import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiTruck } from 'react-icons/fi'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format'
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    return newErrors
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    setIsLoading(true)
    
    try {
      console.log({ email, password })
      // Add your login logic here
      await new Promise(resolve => setTimeout(resolve, 1500))
      setEmail('')
      setPassword('')
      alert('Captain login successful!')
    } catch (error) {
      console.error('Captain login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col relative overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
      
      {/* Header */}
      <div className='bg-white/60 backdrop-blur-xl border-b border-blue-200/50 relative z-10'>
        <div className='max-w-md mx-auto px-6 py-5 flex items-center gap-3'>
          <div className='bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-sm'>
            U
          </div>
          <div>
            <p className='text-gray-900 font-black text-lg'>Uber</p>
            <p className='text-blue-600 text-xs font-semibold'>Driver</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex items-center justify-center px-4 py-8 relative z-20'>
        <div className='w-full max-w-md'>
          
          {/* Card Container */}
          <div className='bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-200/30'>
            
            {/* Title Section */}
            <div className='mb-8'>
              <h1 className='text-4xl font-black text-gray-900 mb-2'>
                Driver Login
              </h1>
              <p className='text-gray-600 text-sm font-medium'>
                Access your Uber driver account to manage rides and earnings
              </p>
            </div>

            {/* Form */}
            <form onSubmit={submitHandler} className='space-y-6'>
              
              {/* Email Field */}
              <div>
                <label className='block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2'>
                  <FiMail size={16} className='text-blue-600' />
                  Email address
                </label>
                <input 
                  required 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors({...errors, email: ''})
                  }}
                  type="email" 
                  placeholder="you@example.com" 
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all outline-none bg-blue-50 text-gray-900 placeholder-gray-500 font-medium ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-300/30' 
                      : 'border-blue-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                  }`}
                />
                {errors.email && <p className='text-red-600 text-sm mt-2 flex items-center gap-1'>
                  <span>⚠️</span> {errors.email}
                </p>}
              </div>

              {/* Password Field */}
              <div>
                <label className='block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2'>
                  <FiLock size={16} className='text-blue-600' />
                  Password
                </label>
                <div className='relative'>
                  <input 
                    required 
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      if (errors.password) setErrors({...errors, password: ''})
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••" 
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all outline-none bg-blue-50 text-gray-900 placeholder-gray-500 font-medium pr-12 ${
                      errors.password 
                        ? 'border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-300/30' 
                        : 'border-blue-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors'
                  >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
                {errors.password && <p className='text-red-600 text-sm mt-2 flex items-center gap-1'>
                  <span>⚠️</span> {errors.password}
                </p>}
              </div>

              {/* Forgot Password Link */}
              <div className='flex justify-end'>
                <Link 
                  to='/captain-forgot-password' 
                  className='text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors'
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold text-lg transition-all shadow-lg ${
                  isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-blue-700 active:scale-95 hover:shadow-xl'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <FiArrowRight size={20} />
                  </>
                )}
              </button>

            </form>

            {/* Divider */}
            <div className='my-8 flex items-center gap-4'>
              <div className='flex-1 h-px bg-blue-200'></div>
              <span className='text-gray-600 text-sm font-semibold'>or</span>
              <div className='flex-1 h-px bg-blue-200'></div>
            </div>

            {/* Sign Up Link */}
            <p className='text-center text-gray-700 font-medium'>
              New driver?{' '}
              <Link 
                to='/Captain-Signup' 
                className='text-blue-600 font-bold hover:text-blue-700 hover:underline transition-all'
              >
                Sign up here
              </Link>
            </p>

          </div>

          {/* User Section Card */}
          <div className='mt-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-300/50 p-6 shadow-lg hover:shadow-xl hover:border-blue-400/70 transition-all'>
            <div className='mb-4'>
              <p className='text-gray-700 text-sm font-bold'>🚗 Looking for a ride?</p>
              <h3 className='text-xl font-bold text-gray-900 mt-1'>
                I'm a passenger
              </h3>
            </div>
            <Link 
              to='/User-Login' 
              className='w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95'
            >
              Passenger Login
              <FiArrowRight size={18} />
            </Link>
          </div>

          {/* Info Cards */}
          <div className='mt-6 grid grid-cols-2 gap-4'>
            <div className='bg-blue-50 border border-blue-300/50 rounded-2xl p-4 hover:border-blue-400 transition-all'>
              <div className='text-3xl font-black text-blue-600 mb-1'>24/7</div>
              <p className='text-xs text-gray-700 font-semibold'>24/7 Support</p>
            </div>
            <div className='bg-blue-50 border border-blue-300/50 rounded-2xl p-4 hover:border-blue-400 transition-all'>
              <div className='text-3xl font-black text-blue-600 mb-1'>🔒</div>
              <p className='text-xs text-gray-700 font-semibold'>Safe & Secure</p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className='bg-white/60 backdrop-blur-xl border-t border-blue-200/50 py-6 relative z-10'>
        <div className='max-w-md mx-auto px-4 text-center text-xs text-gray-600 font-medium'>
          <p>By signing in, you agree to our <span className='text-gray-800'>Terms of Service</span> and <span className='text-gray-800'>Privacy Policy</span></p>
        </div>
      </div>

    </div>
  )
}

export default CaptainLogin
