import MovieCard from './MovieCard';

export default function MovieList({ movies, deleteMovie }) {
  if (movies.length === 0) return <p>No movie found.</p>;
  return (
    <div>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
}