import React, { Component } from 'react'
import axios from 'axios'
import Display from './Display'

export default class CharContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/people`).then(characters => {
            this.setState({
                characters: characters.data.results
            })
        })
    }

    render() {
        return <Display characters={this.state.characters}/>
    }
}