import { useEffect, useState } from "react";

const useMyPokemonView = () => {
    const [caughtPokemons, setCaughtPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      // Retrieve caught Pokémon names from local storage
      const storedPokemons = JSON.parse(localStorage.getItem('caughtPokemons')) || [];
      setCaughtPokemons(storedPokemons);
      console.log(storedPokemons)
    }, []);

    return {
        caughtPokemons,
        currentPage,
        setCurrentPage,
    }
}

export default useMyPokemonView;
