import React from 'react'
import { useLocation } from 'react-router-dom'
const Header = () => {

  return (
    <section className='mb-20'>
      <div className='fixed top-0 border-b-2 shadow-md w-full bg-green-50 h-20'>
        <img src="img/logo-text-recipehub.png" alt="logo with text" className='h-[4.5rem] m-1 ml-4' />
        <span></span>
      </div>
    </section>
  )
}

export default Header