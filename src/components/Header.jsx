import React from 'react'
import Toggle from "../images/but_toggle.png"

export default function Header() {
  return (
    <header>
        <nav className='flex justify-between p-[30px] ml-5 mr-5'>
          <h1 className='text-2xl text-white font-bold font-serif'>HANJIN.</h1>
          <label htmlFor="toggle">
            <img src={Toggle} alt="Toggle_menu" />
          </label>          
          <input className='hidden' type="checkbox" id='toggle' />              
        </nav>        
    </header>
  )
}
