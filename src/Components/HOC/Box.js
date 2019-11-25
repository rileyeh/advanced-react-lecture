import React, { Component } from 'react'
import HoverHOC from './HoverHOC'
import Tooltip from '../RenderProps/Tooltip'

class Box extends Component {
    render() {
        return (
            <div className='hover-comp'>
                <h1>Box</h1>
                {this.props.hover && <Tooltip text='more text in a box'/>}
            </div>
        )
    }
}

export default HoverHOC(Box)