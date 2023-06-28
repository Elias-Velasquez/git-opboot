import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='Hero w-full flex flex-col justify-center items-center'>
            <h2 className='text-center'>Welcome to my Website!! This is my space & your space</h2>
        </div>

        <div className='ButtonDiv w-full flex justify-evenly items-center'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>My Projects</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>My Space</button>
        </div>
    </>
  )
}

export default Hero