import React from 'react'
import '../App.css'

const Tecnologies = () => {
  return (
    <>
        <div className='w-full TecDiv flex flex-col justify-center'>
            <h2 className='bg-indigo-200'>Tecnologies</h2>
            <div className='w-full flex flex-row justify-evenly items-center bg-indigo-50'>
                <div className='bg-red-500'>
                    <p>JavaScript</p>
                </div>

                <div>
                    <p>React</p>
                </div>

                <div>
                    <p>Node</p>
                </div>
            </div>
            <div>
                <div>
                    <label>Frontend</label>
                    <input type='checkbox'></input>
                </div>
                <div>
                    <label>Backend</label>
                    <input type='checkbox'></input>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tecnologies