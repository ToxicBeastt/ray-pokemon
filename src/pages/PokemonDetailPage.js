import React from 'react';
import DetailView from '../views/Detail/DetailView';

const PokemonDetailPage = ({ match }) => {
  return <DetailView match={match} />;
};

export default PokemonDetailPage;