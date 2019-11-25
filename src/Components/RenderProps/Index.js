import React from 'react'
import Hover from './Hover'
import Box from './Box'

export default function Index() {
    return (
        <div>
            <h1>Render Props</h1>
            <Hover render={hovering => <div>Is hovering? {hovering ? 'yes' : 'no'}</div>} /> 

            <Hover render={hovering => <Box isHovered={hovering} text='this is the 1st tooltip'/>} />
            
            <Hover render={hovering => <Box isHovered={hovering} text='this is the second tooltip'/>} />

        </div>
    )
}

