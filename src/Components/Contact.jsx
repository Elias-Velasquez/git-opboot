import React from 'react'
import '../App.css'

const Contact = () => {
  return (
    <>
        <div className='w-full ContactDiv flex flex-col justify-center'>
            <h2 className='bg-indigo-200'>Contact</h2>
            <div className='ContactLinks w-full flex flex-row justify-evenly items-center bg-indigo-50'>
                <div className='flex flex-col'>
                    <h4>Message me</h4>
                    <input></input>
                    <input></input>
                    <input></input>
                    <textarea></textarea>
                    <button type='submit'>Send</button>
                </div>
                <div>
                    <h4>Dowload My Cv</h4>
                    <div>
                        <button>Dowload</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact