import React, { useState } from 'react';

export default function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      title,
      image,
      likes: 0
    };

    fetch('http://localhost:3001/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie)
    })
      .then(res => res.json())
      .then(data => {
        addMovie(data);
        setTitle('');
        setImage('');
      });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Add movie</h3>
      <input
        type="text"
        placeholder="Title of movie"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="URL de l’image"
        value={image}
        onChange={e => setImage(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

