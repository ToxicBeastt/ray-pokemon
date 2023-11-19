import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const ListView = () => {
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

  return (
    <div className="mx-4 my-2">
      <div className="flex flex-wrap justify-center gap-4">
        <Grid container spacing={2}>
          {pokemonList.map((pokemon, index) => (
            <Grid item key={index}>
              <Card
                key={pokemon.name}
                sx={{
                  maxWidth: 200,
                  height: 350,
                  margin: "0 auto",
                  padding: "0.1em",
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  width="100"
                  image={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                  alt={pokemon.name}
                  sx={{ height: 250, width: 300, objectFit: "contain" }}
                />
                <CardMedia></CardMedia>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {pokemon.name}
                  </Typography>
                  <Link to={`/pokemon/${pokemon.name}`}>View Details</Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="flex justify-end mt-4">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span> Page {currentPage} </span>
          <Button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListView;
