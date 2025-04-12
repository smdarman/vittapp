import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import VitaminD from './pages/VitaminD';
import Creatine from './pages/Creatine';
import Forum from './pages/Forum';
import ScrollToTop from './components/ScrollToTop';

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
        <Link to="/forum" className={`nav-link ${location.pathname === '/forum' ? 'active' : ''}`}>
          Forum
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
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/vitamin/d" element={<VitaminD />} />
            <Route path="/supplement/creatine" element={<Creatine />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
