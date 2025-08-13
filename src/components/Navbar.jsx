import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <NavLink
        to="/"
        end
        style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
      >
        Movies
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
      >
        About
      </NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#003366',
    padding: '10px 20px',
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  activeLink: {
    textDecoration: 'underline',
    color: '#ffa500',
  },
};
