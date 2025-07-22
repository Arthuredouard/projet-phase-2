export default function MovieCard({ movie, deleteMovie }) {
  return (
    <div style={{ border: '1px solid gray', margin: '0.5rem', padding: '0.5rem' }}>
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </div>
  );
}