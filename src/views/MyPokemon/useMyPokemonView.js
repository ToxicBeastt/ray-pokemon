import { useEffect, useState } from "react";

const useMyPokemonView = () => {
    const [caughtPokemons, setCaughtPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      const storedPokemons = JSON.parse(localStorage.getItem('caughtPokemons')) || [];
      setCaughtPokemons(storedPokemons);
    }, []);

    return {
        caughtPokemons,
        currentPage,
        setCurrentPage,
    }
}

export default useMyPokemonView;
