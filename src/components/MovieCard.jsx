export default function MovieCard({ movie, addLike, removeLike, deleteMovie }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      margin: '0.5rem',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      maxWidth: '250px',
      textAlign: 'center',
      backgroundColor: '#fff'
    }}>
      <img
        src={movie.image || 'https://via.placeholder.com/300x450?text=No+Image'}
        alt={movie.title}
        style={{ maxWidth: '100%', borderRadius: '8px', height: 'auto' }}
      />
      <h3>{movie.title}</h3>
      <p>Year: {movie.year || 'N/A'}</p>
      <button onClick={() => addLike(movie.id)}>
         Like ({movie.likes})
      </button>
      <button
        onClick={() => removeLike(movie.id)}
        disabled={movie.likes === 0}
        style={{ marginLeft: '10px' }}
      >
         Unlike
      </button>
      <button
        onClick={() => {
          if (window.confirm(`Delete "${movie.title}"?`)) {
            deleteMovie(movie.id);
          }
        }}
        style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
      >
         Delete
      </button>
    </div>
  );
}
