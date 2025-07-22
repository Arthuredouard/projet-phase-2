import { useState } from 'react';

export default function MovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !year) {
      setError("Please , fill all the space.");
      return;
    }

    const newMovie = { title, year };

    fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie),
    })
      .then(res => {
        if (!res.ok) throw new Error("Fail to add movie");
        return res.json();
      })
      .then(data => {
        addMovie(data);
        setTitle('');
        setYear('');
        setError(null);
      })
      .catch(err => setError(err.message));
  }

  return (
  <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input value={year} onChange={e => setYear(e.target.value)} placeholder="Year" required type="number" />
      <button type="submit">Add</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}