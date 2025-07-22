import MovieForm from '../components/MovieForm';
import MovieList from '../components/MovieList';

export default function Movies({ movies, addMovie, deleteMovie }) {
  return (
    <div>
      <h2>List of movies</h2>
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} deleteMovie={deleteMovie} />
    </div>
  );
}