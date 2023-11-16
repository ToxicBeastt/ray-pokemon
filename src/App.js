import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PokemonDetailPage from './pages/PokemonDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
