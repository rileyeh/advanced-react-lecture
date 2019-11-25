import React from 'react'
import axios from 'axios'

function MyHOC(MyComponent, url) {
    return class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                data: null
            }
        }

        getData = () => {
            axios.get(url).then(data => {
                this.setState({
                    data: data.data
                })
            })
        }

        render() {
            return (
                <>
                    {this.state.data ? (
                        <MyComponent {...this.props} data={this.state.data}/>
                    ) : (
                        this.getData()
                    )}
                </>
            )
        }
    }
}

export default MyHOC