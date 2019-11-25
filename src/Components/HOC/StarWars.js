import React, { Component } from 'react'
import MyHOC from './MyHOC'

class StarWars extends Component {
    render() {
        const characterList = this.props.data.results.map((character, i) => {
            return (
                <div className="star-wars-char" key={i}>
					<h2>name: {character.name}</h2>
					<h3>height: {character.height}</h3>
					<h3>mass: {character.mass}</h3>
				</div>
            )
        })

        return <div>{characterList}</div>
    }
}

export default MyHOC(StarWars, `https://swapi.co/api/people`)