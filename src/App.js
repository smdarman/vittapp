import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        Vitamin Guide
      </Link>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
          About
        </Link>
        <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>
          Blog
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
