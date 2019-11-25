import React, { Component } from 'react'
import Container from './Container'
import HoverContainer from './HoverContainer'

export default class Index extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            display: 'sw'
        }
    }

    toggle = display => this.setState({display})

    render() {
        let {display} = this.state
        return (
            <div>
                <div className='btns'>
                    <h1>Display and Container Components</h1>
                    <button onClick={() => this.toggle('sw')}>star wars</button>
                    <button onClick={() => this.toggle('hs')}>hover stuff</button>
                </div>
                
                {display === 'sw' && <Container />}
                {display === 'hs' && <HoverContainer />}
            </div>
        )
    }
}