import React from 'react'
import Profile from "../images/profile.png"

export default function Page_1() {
  return (
    <div className='flex justify-evenly items-center overflow-hidden text-white'>
      <ul>
        <li className='text-7xl leading-[1] font-bold'>
          <p className='opacity-50'>I am</p>
          Lee HanJin
        </li>

        <li className='text-2xl leading-[1.5] pt-7'>
          I'm Lee Han Jin, an AI engineer<br />
          with a passion for deep thinking
        </li>
      </ul>
      <div><img src={Profile} alt="Profile" /></div>
    </div>
  )
}
