import React from 'react'
import './index.scss'

export const Resetbtn = ({resetBoard}) => {
  return (
    //Just calls the resetBoard function from app.js that is passed through with props
    <button className='reset-btn' onClick={resetBoard}>Reset</button>
  )
}
