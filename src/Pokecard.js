import React, {Component} from 'react';
import "./Pokecard.css"

// const Poke_Api = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Poke_Api= "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let padTothree = (Number)=> (Number<=999 ? `00${Number}`.slice(-3):Number);

class Pokecard extends Component{
    render(){
        let imgSrc = `${Poke_Api}${padTothree(this.props.id)}.png` 
        return (
        <div className="Pokecard">
                <h1 className="title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div className="Pokecard-data"> type:{this.props.type}</div>
                <div className="Pokecard-data"> exp:{this.props.exp}</div>
        </div>

        )
    }
}
export default Pokecard;