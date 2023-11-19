import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useDetailView = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [comparePokemon, setComparePokemon] = useState(null);
  const [selectedComparisonPokemon, setSelectedComparisonPokemon] =
    useState("");
  const [allPokemonList, setAllPokemonList] = useState([]);

  const normalizePokemonDetails = (data) => {
    const { id, name, types, stats } = data;

    const normalizedTypes = types.map(({ slot, type }) => ({
      slot,
      typeName: type.name || "",
    }));

    const normalizedStats = stats.map(({ base_stat, stat }) => ({
      baseStat: base_stat || 0,
      statName: stat.name || "",
    }));

    const pokemonDetail = {
      id: id || "",
      name: name || "",
      types: normalizedTypes,
      stats: normalizedStats,
    };

    return pokemonDetail;
  };

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemon(normalizePokemonDetails(response.data));
    };
    const getAllPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        setAllPokemonList(
          response.data.results.map((val) => ({
            value: val.name || "",
            label: val.name || "",
          }))
        );
      } catch (error) {
        console.error("Error fetching all Pokémon:", error);
        return [];
      }
    };
    getAllPokemon();
    fetchPokemonDetail();
  }, [name]);

  const handleCompareClick = async () => {
    if (!comparePokemon) {
      if (selectedComparisonPokemon) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${selectedComparisonPokemon}`
        );
        setComparePokemon(normalizePokemonDetails(response.data));
      }
    } else {
      setComparePokemon(null);
      setSelectedComparisonPokemon("");
    }
  };

  const handleCatch = () => {
    // Store the caught Pokémon's name in local storage
    const caughtPokemons =
      JSON.parse(localStorage.getItem("caughtPokemons")) || [];
    caughtPokemons.push(name);
    localStorage.setItem("caughtPokemons", JSON.stringify(caughtPokemons));
  };

  return {
    pokemon,
    comparePokemon,
    allPokemonList,
    selectedComparisonPokemon,
    setSelectedComparisonPokemon,
    handleCompareClick,
    handleCatch,
  };
};

export default useDetailView;
