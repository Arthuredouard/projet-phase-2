import MovieCard from './MovieCard';

export default function MovieList({ movies = [], deleteMovie, addLike }) {
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          deleteMovie={deleteMovie}
          addLike={addLike}
        />
      ))}
    </div>
  );
}


