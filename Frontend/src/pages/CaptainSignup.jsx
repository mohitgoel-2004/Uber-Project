import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiPhone, FiTruck } from 'react-icons/fi'

const CaptainSignup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullname: {
      firstname: '',
      lastname: ''
    },
    email: '',
    password: '',
    vehicle: {
      color: '',
      plate: '',
      capacity: '',
      vehicleType: ''
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your API call here
    console.log('Captain Signup Data:', formData)
    // navigate('/captain-home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/Traffic.jpeg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-md mx-4 my-8">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Drive with <span className="text-yellow-400">UBER</span>
          </h1>
          <p className="text-gray-300 text-sm">Join as a Captain Partner</p>
        </div>

        {/* Form Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Captain Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  name="fullname.firstname"
                  value={formData.fullname.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  name="fullname.lastname"
                  value={formData.fullname.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password (min. 6 characters)"
                required
                minLength="6"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Vehicle Type */}
            <div className="relative">
              <FiTruck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <select
                name="vehicle.vehicleType"
                value={formData.vehicle.vehicleType}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>

            {/* Vehicle Details */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="vehicle.color"
                value={formData.vehicle.color}
                onChange={handleChange}
                placeholder="Vehicle Color"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
              />
              <input
                type="text"
                name="vehicle.plate"
                value={formData.vehicle.plate}
                onChange={handleChange}
                placeholder="Plate Number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
              />
            </div>

            <input
              type="number"
              name="vehicle.capacity"
              value={formData.vehicle.capacity}
              onChange={handleChange}
              placeholder="Vehicle Capacity (seats)"
              required
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Register as Captain
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link 
                to="/captain-login" 
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="mt-6 text-xs text-gray-500 text-center leading-relaxed">
            By signing up, you agree to our{' '}
            <span className="text-yellow-600 cursor-pointer hover:underline">Terms of Service</span>
            {' '}and{' '}
            <span className="text-yellow-600 cursor-pointer hover:underline">Privacy Policy</span>
          </p>
        </div>

        {/* Back to User */}
        <div className="text-center mt-6">
          <Link 
            to="/user-signup" 
            className="text-white text-sm hover:text-yellow-400 transition-colors inline-flex items-center gap-2"
          >
            ← Join as a User instead
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
