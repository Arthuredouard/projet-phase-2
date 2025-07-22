import React from 'react';

export default function Movies({ movies, addLike }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Available movies</h2>

      {movies.length === 0 ? (
        <p>No movie now.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '20px',
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3>{movie.title}</h3>
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />
              <p>{movie.likes} likes</p>
              <button
                onClick={() => addLike(movie.id)}
                style={{
                  backgroundColor: '#007bff',
                  color: 'orange',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                Like
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

