import React from 'react'
import Hover from './Hover'
import Box from '../RenderProps/Box'
// import Tool from '../RenderProps/Tooltip'

export default function Index() {
    return (
        <>
            <h1>props.children</h1>

            <Hover>
                {hovering => <div>Is hovering? {hovering ? 'yes' : 'no'}</div>}
            </Hover> 

            <Hover>
                {hovering => <Box isHovered={hovering} text='more text'/>}
                {/* <Tool /> */}
            </Hover>

            <Hover>
                {hovering => <Box isHovered={hovering} text='what is this thing'/>}
            </Hover>
        </>
    )
}