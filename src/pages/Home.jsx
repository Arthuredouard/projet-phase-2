export default function Home() {
  return (
    <section style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      {/* Main heading */}
      <h1>Welcome to Movie App</h1>

      {/* Cinema image */}
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        alt="Cinema"
        style={{ maxWidth: '100%', borderRadius: '10px', margin: '20px 0' }}
      />

      {/* Description paragraph */}
      <p>Discover and like your favorite movies.</p>
      <p>Use the navigation to browse or add movies.</p>
    </section>
  );
}

