import React from 'react'
import Tooltip from './Tooltip'

export default function Box(props) {
    return (
        <div>
            <h1>Box</h1>
            {props.isHovered && <Tooltip {...props}/>}
        </div>
    )
}