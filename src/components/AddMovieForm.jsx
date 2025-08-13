import React, { useState } from 'react';

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
}

export default function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a title.');
      return;
    }
    if (!isValidUrl(image)) {
      alert('Please enter a valid image URL.');
      return;
    }
    if (!year.trim()) {
      alert('Please enter a year.');
      return;
    }
    if (!/^\d{4}$/.test(year)) {
      alert('Please enter a valid 4-digit year.');
      return;
    }

    const newMovie = {
      title,
      poster_path: image,
      year, // ← uniquement "year"
      likes: 0
    };

    fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie)
    })
      .then(res => res.json())
      .then(data => {
        addMovie(data);
        setTitle('');
        setImage('');
        setYear('');
      });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Add movie</h3>
      <label htmlFor="title">Title of movie</label>
      <input
        id="title"
        type="text"
        placeholder="Title of movie"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        type="text"
        placeholder="URL of the poster image"
        value={image}
        onChange={e => setImage(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <label htmlFor="year">Year</label>
      <input
        id="year"
        type="number"
        placeholder="e.g. 2020"
        value={year}
        onChange={e => setYear(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

