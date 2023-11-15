import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ListView = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 10}&limit=10`);
      setPokemonList(response.data.results);
    };

    fetchPokemonList();
  }, [currentPage]);

  return (
    <div className="m-8">
      <div className='flex flex-wrap justify-center gap-4'>
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.name} style={{ maxWidth: 300, margin: '1em' }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
              alt={pokemon.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {pokemon.name}
              </Typography>
              <Link to={`/pokemon/${pokemon.name}`}>View Details</Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='flex justify-end mt-4'>
        <div className="flex items-center gap-2">
          <Button 
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
            >
            Previous
          </Button>
          <span> Page {currentPage} </span>
          <Button 
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            >
              Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListView;