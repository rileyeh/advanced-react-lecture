import React, { Component } from 'react'
import HoverDisplay from './HoverDisplay'

export default class HoverContainer extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            hovering: false
        }

        this.mouseOver = this.mouseOver.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
    }

    mouseOver() {
        this.setState({
            hovering: true
        })
    }

    mouseOut() {
        this.setState({
            hovering: false
        })
    }

    render() {
        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='hover-holder'>
                <HoverDisplay hover={this.state.hovering}/>
            </div>
        )
    }
}