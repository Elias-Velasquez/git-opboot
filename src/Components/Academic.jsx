import React from 'react'
import '../App.css'
import Carrousel from './Carrousel'

const Academic = () => {
  return (
    <>
        <div className='w-full AcademicDiv flex flex-row justify-center'>
            <h2 className='bg-indigo-200'>Education</h2>
            <Carrousel></Carrousel>
        </div>
    </>
  )
}

export default Academic