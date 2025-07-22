import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#282c34', padding: '1rem' }}>
      <Link to="/" style={{ color: 'yellow', marginRight: '1rem' }}>Home</Link>
      <Link to="/movies" style={{ color: 'orange', marginRight: '1rem' }}>Movies</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
    </nav>
  );
}
