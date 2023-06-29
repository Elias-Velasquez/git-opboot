import React from 'react'
import '../App.css'

const Websites = () => {
  return (
    <>
        <div className='w-full ContactDiv flex flex-col justify-center'>
            <h2 className='bg-indigo-200'>Websites</h2>
            <div className='ContactLinks w-full flex flex-col justify-evenly items-end bg-indigo-50'>
                <div className='bg-green-500'>
                    <p>Linkedin</p>
                </div>

                <div>
                    <p>Github</p>
                </div>

                <div>
                    <p>Youtube</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Websites