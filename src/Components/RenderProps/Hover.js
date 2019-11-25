import React from 'react'

class Hover extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hovering: false
        }
    }

    mouseOver = () => this.setState({ hovering: true })
    
    mouseOut = () => this.setState({ hovering: false })

    render() {
      return (
        <div className='hover-comp hover-holder' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          {this.props.render(this.state.hovering)}
        </div>
      )
    }
  }

  export default Hover