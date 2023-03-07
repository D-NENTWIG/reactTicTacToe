import React from 'react'
import { Box } from '../box';
import './index.scss'


export const Board = ({board, onClick}) => {
  return (
    <div className='board'>
        {board.map((value,idx) => {
            //First creates a button for each slot in the array gives it an index (e.g. 0-8) and sets its value to null(setup in app.js)

            //This sets up that when onClick is sent, the index associated with the button is sent to app.js so that it knows which button
            //to change the value on
            //also checks if value is null so you can't change an already claimed box
            return <Box value={value} onClick={() => value === null && onClick(idx)} />
})}
        
    </div>
  )
}
