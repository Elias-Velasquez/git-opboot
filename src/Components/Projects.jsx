import React from 'react'
import '../App.css'

const Projects = () => {
  return (
    <>
        <div className='w-full ProjectsDiv flex flex-col justify-center'>
            <h2 className='bg-indigo-200'>Projects</h2>
            <div className='w-full flex flex-row justify-evenly items-center bg-indigo-50'>
                <div className='bg-red-500'>
                    <p>Proyecto 1</p>
                </div>

                <div>
                    <p>Proyecto 2</p>
                </div>

                <div>
                    <p>Proyecto 3</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects