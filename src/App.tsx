export default function App() {
  return (
    <div className="app-container">
      <div className="star-field" aria-hidden="true" />
      
      <header className="navbar">
        <div className="nav-brand">UndefinedVerse</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#manga">Manga</a></li>
            <li><a href="#novels">Novels</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>UndefinedVerse</h1>
          <p>A digital platform taking shape. Explore structured narratives, community discussions, and expanding universes as development unfolds.</p>
        </section>

        <div className="section-grid">
          <div className="card" id="manga">
            <span className="empty-badge">Empty State</span>
            <h3>Manga Catalog</h3>
            <p>No titles published yet. Check back soon as upcoming chapters and volumes are prepared for release.</p>
          </div>

          <div className="card" id="novels">
            <span className="empty-badge">Empty State</span>
            <h3>Light Novels</h3>
            <p>The library is currently unpopulated. Serialized written works will appear here upon publication.</p>
          </div>

          <div className="card" id="community">
            <span className="empty-badge">Empty State</span>
            <h3>Community Hub</h3>
            <p>Discussions and user spaces are inactive during initial infrastructure setup.</p>
          </div>

          <div className="card" id="explore">
            <span className="empty-badge">Empty State</span>
            <h3>Explore Universe</h3>
            <p>Lore archives, world maps, and timeline guides will become accessible as the project grows.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} UndefinedVerse. All rights reserved.</p>
      </footer>
    </div>
  );
}
