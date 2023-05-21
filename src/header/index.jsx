import React from 'react'
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <section className='mb-18'>
      <div className='fixed top-0 border-b-2 shadow-md w-full bg-green-50 h-18 z-20 cursor-pointer' onClick={()=>navigate('/')}>
        <img src="/img/logo-text-recipehub.png" alt="logo with text" className='h-16 m-1 ml-4' />
      </div>
    </section>
  )
}

export default Header