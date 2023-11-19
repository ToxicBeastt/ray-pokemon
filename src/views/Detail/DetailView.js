import React from "react";
import {
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Button from "../../components/Button";
import useDetailView from "./useDetailView";

const DetailView = () => {
  const {
    pokemon,
    comparePokemon,
    allPokemonList,
    selectedComparisonPokemon,
    setSelectedComparisonPokemon,
    handleCompareClick,
    handleCatch,
  } = useDetailView();

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full py-2 px-8">
      <div className="absolute bottom-8 right-1/4 transform -translate-x-1/2">
        <Paper elevation={3} className="p-2">
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Stats
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {pokemon.name}
                    </Typography>
                  </TableCell>
                  {comparePokemon && (
                    <>
                      <TableCell>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {comparePokemon.name}
                        </Typography>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {pokemon.stats.map((stat, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <Typography variant="body1" fontWeight="bold">
                        {stat.statName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        className={
                          comparePokemon
                            ? stat.baseStat >
                              comparePokemon.stats[index].baseStat
                              ? "text-green-500"
                              : "text-red-500"
                            : "text-black"
                        }
                      >
                        {stat.baseStat}
                      </Typography>
                    </TableCell>
                    {comparePokemon && (
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          className={
                            stat.baseStat < comparePokemon.stats[index].baseStat
                              ? "text-green-500"
                              : "text-red-500"
                          }
                        >
                          {comparePokemon.stats[index].baseStat}
                        </Typography>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="body1" fontWeight="bold">
                      Types
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {pokemon.types.map((val) => (
                      <Typography variant="body1" fontWeight="bold">
                        {val.typeName}
                      </Typography>
                    ))}
                  </TableCell>
                  {comparePokemon && (
                    <TableCell>
                      {comparePokemon.types.map((val) => (
                        <Typography variant="body1" fontWeight="bold">
                          {val.typeName}
                        </Typography>
                      ))}
                    </TableCell>
                  )}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid
            container
            spacing={2}
            className="pt-2 flex items-center justify-center"
          >
            <Grid item>
              <Select
                value={selectedComparisonPokemon}
                onChange={(e) => setSelectedComparisonPokemon(e.target.value)}
                displayEmpty
                className="min-w-[150px] max-w[150px]"
              >
                <MenuItem value="" disabled>
                  Select Pokemon
                </MenuItem>
                {allPokemonList.map((p) => (
                  <MenuItem key={p.label} value={p.value}>
                    {p.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item className="flex items-center justify-center">
              <Button
                onClick={handleCompareClick}
                variant="contained"
                color="primary"
              >
                {!comparePokemon ? "Compare" : "Clear"}
              </Button>
            </Grid>
          </Grid>
          <div className="pt-2 flex items-center justify-center">
            <Button onClick={handleCatch}>Catch</Button>
          </div>
        </Paper>
      </div>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={comparePokemon ? 6 : 12}
          className="flex items-center justify-center"
        >
          <div className="h-screen">
            <img
              className="h-3/4 object-contain"
              src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
            />
          </div>
        </Grid>
        {comparePokemon && (
          <Grid
            item
            xs={12}
            sm={6}
            className="flex items-center justify-center"
          >
            <div className="h-screen">
              <img
                className="h-3/4 object-contain"
                src={`https://img.pokemondb.net/artwork/${comparePokemon.name}.jpg`}
              />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
export default DetailView;
