import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PokemonDetailPage from './pages/PokemonDetailPage';
import Sidebar from './components/Sidebar';
import MyPokemonPage from './pages/MyPokemonPage';

const App = () => {

  return (
    <Router>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='w-full'>
          <Routes>
            <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/my-pokemon" element={<MyPokemonPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
