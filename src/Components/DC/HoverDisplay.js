import React from 'react'
import Tooltip from '../RenderProps/Tooltip'

export default function HoverDisplay(props) {
    return (
        <div className='hover-comp'>
            <h1>Box</h1>
            {props.hover && <Tooltip text='more text in a box'/>}
        </div>
    )
}