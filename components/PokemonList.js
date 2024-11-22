import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div style={styles.list}>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

const styles = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default PokemonList;
