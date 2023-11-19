import React from "react";
import useMyPokemonView from "./useMyPokemonView";
import Button from "../../components/Button";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MyPokemonView = () => {
  const { caughtPokemons, currentPage, setCurrentPage } = useMyPokemonView();

  return (
    <div className="m-8">
      <div className="flex flex-wrap justify-center gap-4">
        {caughtPokemons.map((pokemon) => (
          <Card key={pokemon} style={{ maxWidth: 300, margin: "1em" }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://img.pokemondb.net/artwork/${pokemon}.jpg`}
              alt={pokemon}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {pokemon}
              </Typography>
              <Link to={`/pokemon/${pokemon}`}>View Details</Link>
            </CardContent>
          </Card>
        ))}
        {caughtPokemons.length === 0 && <p>No Pokémon caught yet.</p>}
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
          <Button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={caughtPokemons.length < 10}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyPokemonView;
