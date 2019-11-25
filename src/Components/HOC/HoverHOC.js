import React from 'react'

export default function HoverHOC(SomeComp) {
    return class extends React.Component {
        constructor(props) {
            super(props) 

            this.state = {
                hovering: false
            }
        }

        mouseOver = () => this.setState({hovering: true})

        mouseOut = () => this.setState({hovering: false})

        render() {
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='hover-holder'>
                    <SomeComp hover={this.state.hovering} />
                </div>
            )
        }
    }
}