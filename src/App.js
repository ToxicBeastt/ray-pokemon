import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PokemonDetailPage from './pages/PokemonDetailPage';
import Sidebar from './components/Sidebar';

const App = () => {

  return (
    <Router>
      <div className='flex h-screen'>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
