import React from "react";
import Layout from "./components/Layout";
import PokemonList from "./components/PokemonList";
import pokemonData from "./data/pokemonData";

const App = () => {
  return (
    <Layout>
      <PokemonList pokemons={pokemonData} />
    </Layout>
  );
};

export default App;
