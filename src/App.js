import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import AddMovieForm from './components/AddMovieForm';
import Home from './pages/Home';
import About from './pages/About';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://projet-phase-2-backend.onrender.com';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/movies`)
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  function addLike(id) {
    const target = movies.find((m) => m.id === id);
    if (!target) return;

    fetch(`${BASE_URL}/movies/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: target.likes + 1 })
    })
      .then((res) => res.json())
      .then((updated) => {
        setMovies(movies.map((m) => (m.id === id ? updated : m)));
      });
  }

  return (
    <main style={{ padding: '20px' }}>
      <AddMovieForm addMovie={addMovie} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies movies={movies} addLike={addLike} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;

