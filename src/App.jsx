import './css/App.css';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </main>
    </MovieProvider>
  );
}

  export default App