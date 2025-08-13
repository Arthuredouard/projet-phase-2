import React from 'react';
import MovieCard from '../components/MovieCard';
import AddMovieForm from '../components/AddMovieForm';

export default function Movies({ movies, addLike, removeLike, deleteMovie, addMovie }) {
  if (!movies || movies.length === 0) return (
    <>
      <AddMovieForm addMovie={addMovie} />
      <p>No movies found.</p>
    </>
  );

  return (
    <div>
      <AddMovieForm addMovie={addMovie} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addLike={addLike}
            removeLike={removeLike}
            deleteMovie={deleteMovie}
          />
        ))}
      </div>
    </div>
  );
}
