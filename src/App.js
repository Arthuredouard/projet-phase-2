import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Home from './pages/Home';
import About from './pages/About';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

function App() {
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(`${API_URL}/movies`);
        if (!res.ok) throw new Error('Failed to fetch movies');
        const data = await res.json();
        
        setMovies(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  async function addLike(id) {
    const movieToUpdate = movies.find(movie => movie.id === id);
    if (!movieToUpdate) return;
    const updatedLikes=movieToUpdate.likes+1;


    try {
      const res = await fetch(`${API_URL}/movies/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: updatedLikes }),
      });
      const updatedMovie = await res.json();
      setMovies(prev => prev.map(movie => (movie.id === id ? updatedMovie : movie)));
    } catch (err) {
      console.error(err);
    }
  }

  async function removeLike(id) {
    const movieToUpdate = movies.find(movie => movie.id === id);
    if (!movieToUpdate) return;

    const updatedLikes = movieToUpdate.likes > 0 ? movieToUpdate.likes - 1 : 0;

    try {
      const res = await fetch(`${API_URL}/movies/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: updatedLikes }),
      });
      const updatedMovie = await res.json();
      setMovies(prev => prev.map(movie => (movie.id === id ? updatedMovie : movie)));
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteMovie(id) {
    try {
      const res = await fetch(`${API_URL}/movies/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete movie');
      setMovies(prev => prev.filter(movie => movie.id !== id));
    } catch (err) {
      alert(err.message);
    }
  }

  function addMovie(newMovie) {
    setMovies(prev => [...prev, newMovie]);
  }

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={
              <Movies
                movies={movies}
                addLike={addLike}
                removeLike={removeLike}
                deleteMovie={deleteMovie}
                addMovie={addMovie}
              />
            }
          />
          <Route path="/about" element={<About movies={movies} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
