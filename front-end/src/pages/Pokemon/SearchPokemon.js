import React from 'react'
import { useState } from 'react';
import { Button } from "react-bootstrap";
import './SearchPokemon.css'
import { api } from '../../api/api';
import PokemonDetail from './PokemonDetail';
const SearchPokemon = () =>{
    const [searchMon, setSearchMon] = useState('')
    const [pokemonDetails, setPokemonDetails] = useState()
    const onChangeInput = (e) => setSearchMon(e.target.value)
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const onClickButton = async(e) =>{
        e.preventDefault()
        let search = (capitalizeFirstLetter(searchMon))
        searchMon!=='' && await api.post('/api/getPokemonDetails',{name:search}).then(res=> setPokemonDetails(res.data))
    }

    return(
        <>
            <input type='text' name='pokemonName' className='input' value={searchMon} onChange={onChangeInput} /><br/>
            <Button onClick={onClickButton} > search </Button><br/>
            {pokemonDetails!==undefined && <PokemonDetail details={pokemonDetails} />}
        </>

    )
}

export default SearchPokemon