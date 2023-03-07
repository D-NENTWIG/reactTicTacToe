import './index.scss'
import React from 'react'

export const Box = ({value, onClick}) => {
    //depending on which letter value is assigned to, changes the styling on button (e.g. changes text colour)
    const style = value === 'X' ? 'box x' : 'box o'

    return(
        <button className={style} onClick={onClick}>{value}</button>
    )

}
