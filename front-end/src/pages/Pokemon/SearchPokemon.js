import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./SearchPokemon.css";
import { api } from "../../api/api";
import PokemonDetail from "./PokemonDetail";
import NotFound from "./NotFound";
import EvolutionLine from "./EvolutionLine";
const SearchPokemon = () => {
  const [searchMon, setSearchMon] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState();
  const [evolutionLine, setEvolutionLine] = useState()
  const onChangeInput = (e) => setSearchMon(e.target.value);
  const [notFound, setNotFound] = useState(false)
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const onClickButton = async (e) => {
    e.preventDefault();
    let search = capitalizeFirstLetter(searchMon);
    searchMon !== "" &&
      (await api
        .post("/api/getPokemonDetails", { name: search })
        .then((res) => {
          console.log('response',res)
            if(res.data.length>0){
                setPokemonDetails(res.data)
                 api.post("/api/getEvolutionLine",{candy:res.data[0].candy}).then(res=>{
                   res.data = res.data.filter(pokemon => pokemon.name.toLowerCase()!==searchMon)
                    if(res.data.length>0)
                        setEvolutionLine(res.data)
                })
            }
            else
                setNotFound(true)
            }
        ));

  };

  return (
    <>
      <input
        type="text"
        name="pokemonName"
        className="input"
        value={searchMon}
        onChange={onChangeInput}
      />
      <br />
      <Button onClick={onClickButton}> search </Button>
      <br />
      {(pokemonDetails !== undefined && notFound === false) && (
        <PokemonDetail details={pokemonDetails} />
      )}
      <br/>
      {
        evolutionLine!==undefined && <h2>Evolution Line</h2>
      }
      {
          (evolutionLine !== undefined && notFound === false) && (
              evolutionLine.map((pokemon)=> 
              <EvolutionLine data={pokemon} len={evolutionLine.length}/>
            )
          )
      }
      {notFound == true && <NotFound />}
      <br/>
    </>
  );
};

export default SearchPokemon;
