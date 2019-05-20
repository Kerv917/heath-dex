import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
    state= {
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000',
        pokemon: null
    };

    // called after the components has initilized all of its variableas, visible to the user
    async componentDidMount() {
      const res = await axios.get(this.state.url);
    //this updating the state, if there isn't a key in there, it will create it or if it hasn't been used it will overwrite it.  
      this.setState({pokemon: res.data['results'] });
    }

    render() {
        return (
            <React.Fragment>
            {this.state.pokemon ? (
                <div className="row">
            {this.state.pokemon.map(pokemon => (
                <PokemonCard 
                key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
            ))}
              </div>
              ) : (
                  <h1>Loading Pokemon</h1>
                )}
                </React.Fragment>
            
        );
    }
}