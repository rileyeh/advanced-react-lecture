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
        // console.log(this.props.children)
      return (
        <div className='hover-comp hover-holder' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          {this.props.children(this.state.hovering)}

          {/* {this.props.children[0](this.state.hovering)} */}
          {/* {this.props.children[1]} */}
        </div>
      )
    }
  }

  export default Hover