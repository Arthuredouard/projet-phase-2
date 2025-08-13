import { useState } from 'react';

export default function MovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !year || !image) {
      setError("Please fill in all the fields.");
      return;
    }

    const yearNumber = parseInt(year, 10);
    if (isNaN(yearNumber) || yearNumber < 1888 || yearNumber > new Date().getFullYear()) {
      setError("Please enter a valid year.");
      return;
    }

    const newMovie = { title, year: yearNumber, image, likes: 0 };

    fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie),
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to add movie");
        return res.json();
      })
      .then(data => {
        addMovie(data);
        setTitle('');
        setYear('');
        setImage('');
        setError(null);
      })
      .catch(err => setError(err.message));
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
        aria-label="Movie Title"
      />
      <input
        value={year}
        onChange={e => setYear(e.target.value)}
        placeholder="Year"
        type="number"
        required
        aria-label="Release Year"
      />
      <input
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="Image URL"
        required
        aria-label="Image URL"
      />
      <button type="submit" style={{ backgroundColor: '#ff8c00', color: 'white', fontWeight: '600', border: 'none', padding: '10px', cursor: 'pointer' }}>
        Add
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
