import React from 'react'

const Home = () => {
  return (
    <div>
    <div className='h-screen pt-8 w-full bg-red-400 flex justify-between flex-col'>
        <img className='w-32 ml-8' src="https://imgs.search.brave.com/pxnVl2e6h7DzoUB7XLGfhK_uQEKE-fiyU6gf4lAe_k4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nby10/ZXh0LXBuZy0xLnBu/Zw" alt="" />
        <div className='bg-white pb-7 py-4 px-4'> 
            <h2 className='text-3xl font-bold flex items-center justify-center'>Get Started with Uber</h2>
            <button className='w-full bg-black text-white py-3 rounded mt-5'>Continue</button>
        </div>

    </div>
    </div>
  )
}

export default Home
