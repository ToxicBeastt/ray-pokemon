import React, { useState, useEffect } from "react";
import axios from "axios";

const useListView = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      const fetchPokemonList = async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            (currentPage - 1) * 10
          }&limit=10`
        );
        setPokemonList(response.data.results);
      };
  
      fetchPokemonList();
    }, [currentPage]);

    return {
        pokemonList,
        currentPage,
        setCurrentPage,
    }
}

export default useListView();