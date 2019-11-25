import React, { Component } from 'react'
import HoverHOC from './HoverHOC'
import Tooltip from '../RenderProps/Tooltip'

class Circle extends Component {
    render() {
        return (
            <div className='hover-comp circle'>
                <h1>Circle</h1>
                {this.props.hover && <Tooltip text='yet another tooltip'/>}
            </div>
        )
    }
}

export default HoverHOC(Circle)