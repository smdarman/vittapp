import React, { useState, useEffect } from 'react';
import SupplementVoting from '../components/SupplementVoting';
import { Link } from 'react-router-dom';

const vitamins = [
  { 
    id: 1, 
    name: 'Vitamin D', 
    color: '#FFB6C1',
    evidenceStrength: 95,
    userRating: 0,
    evidenceDescription: 'Strong clinical evidence for bone health and immune function',
    category: 'Fat-soluble',
    benefits: ['Bone health', 'Immune function', 'Mood regulation'],
    dosage: '400-2000 IU daily',
    safety: 'Generally safe at recommended doses'
  },
  { 
    id: 2, 
    name: 'Vitamin C', 
    color: '#98FB98',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Well-established benefits for immune system and skin health',
    category: 'Water-soluble',
    benefits: ['Immune support', 'Skin health', 'Antioxidant'],
    dosage: '500-2000mg daily',
    safety: 'Very safe, excess excreted in urine'
  },
  { 
    id: 3, 
    name: 'Vitamin B12', 
    color: '#87CEEB',
    evidenceStrength: 90,
    userRating: 0,
    evidenceDescription: 'Strong evidence for neurological function and energy metabolism',
    category: 'B-complex',
    benefits: ['Energy production', 'Nerve function', 'Red blood cell formation'],
    dosage: '2.4-1000mcg daily',
    safety: 'Very safe, excess excreted'
  },
  { 
    id: 4, 
    name: 'Vitamin B6', 
    color: '#DDA0DD',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for cognitive function and mood regulation',
    category: 'B-complex',
    benefits: ['Brain function', 'Mood regulation', 'Protein metabolism'],
    dosage: '1.3-100mg daily',
    safety: 'Safe at recommended doses'
  },
  { 
    id: 5, 
    name: 'Vitamin E', 
    color: '#F0E68C',
    evidenceStrength: 75,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for antioxidant properties',
    category: 'Fat-soluble',
    benefits: ['Antioxidant', 'Skin health', 'Eye health'],
    dosage: '15-400 IU daily',
    safety: 'Safe at recommended doses'
  },
  { 
    id: 6, 
    name: 'Vitamin A', 
    color: '#FFA07A',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Strong evidence for vision and immune function',
    category: 'Fat-soluble',
    benefits: ['Vision', 'Immune function', 'Skin health'],
    dosage: '700-900mcg daily',
    safety: 'Caution with high doses'
  },
  { 
    id: 7, 
    name: 'Vitamin K', 
    color: '#98FB98',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for blood clotting and bone health',
    category: 'Fat-soluble',
    benefits: ['Blood clotting', 'Bone health', 'Heart health'],
    dosage: '90-120mcg daily',
    safety: 'Generally safe'
  },
  { 
    id: 8, 
    name: 'Vitamin B3', 
    color: '#D8BFD8',
    evidenceStrength: 70,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for cardiovascular health',
    category: 'B-complex',
    benefits: ['Cholesterol management', 'Skin health', 'Brain function'],
    dosage: '14-16mg daily',
    safety: 'Safe at recommended doses'
  },
  { 
    id: 9, 
    name: 'Vitamin B1', 
    color: '#E6E6FA',
    evidenceStrength: 75,
    userRating: 0,
    evidenceDescription: 'Good evidence for energy metabolism',
    category: 'B-complex',
    benefits: ['Energy production', 'Nerve function', 'Heart health'],
    dosage: '1.1-1.2mg daily',
    safety: 'Very safe'
  },
  { 
    id: 10, 
    name: 'Vitamin B2', 
    color: '#B0E0E6',
    evidenceStrength: 70,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for cellular energy production',
    category: 'B-complex',
    benefits: ['Energy production', 'Skin health', 'Eye health'],
    dosage: '1.1-1.3mg daily',
    safety: 'Very safe'
  },
  {
    id: 11,
    name: 'Creatine',
    color: '#FFD700',
    evidenceStrength: 95,
    userRating: 0,
    evidenceDescription: 'Strong evidence for muscle strength, power, and cognitive function',
    category: 'Amino Acids',
    benefits: ['Muscle strength', 'Power output', 'Cognitive function'],
    dosage: '3-5g daily',
    safety: 'Excellent safety profile'
  },
  {
    id: 12,
    name: 'Caffeine',
    color: '#8B4513',
    evidenceStrength: 90,
    userRating: 0,
    evidenceDescription: 'Strong evidence for improved alertness, focus, and athletic performance',
    category: 'Stimulants',
    benefits: ['Alertness', 'Focus', 'Athletic performance'],
    dosage: '100-400mg daily',
    safety: 'Safe at moderate doses'
  },
  {
    id: 13,
    name: 'Fish Oil',
    color: '#00CED1',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Strong evidence for heart health and anti-inflammatory properties',
    category: 'Omega-3',
    benefits: ['Heart health', 'Brain function', 'Anti-inflammatory'],
    dosage: '250-1000mg daily',
    safety: 'Generally safe'
  },
  {
    id: 14,
    name: 'Magnesium',
    color: '#D2B48C',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for sleep quality and muscle function',
    category: 'Minerals',
    benefits: ['Sleep quality', 'Muscle function', 'Stress management'],
    dosage: '310-420mg daily',
    safety: 'Safe at recommended doses'
  },
  {
    id: 15,
    name: 'Zinc',
    color: '#DEB887',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Strong evidence for immune function and wound healing',
    category: 'Minerals',
    benefits: ['Immune function', 'Wound healing', 'Skin health'],
    dosage: '8-11mg daily',
    safety: 'Safe at recommended doses'
  },
  {
    id: 16,
    name: 'Probiotics',
    color: '#FF69B4',
    evidenceStrength: 75,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for gut health and immune function',
    category: 'Microorganisms',
    benefits: ['Gut health', 'Immune function', 'Digestion'],
    dosage: '1-10 billion CFU daily',
    safety: 'Generally safe'
  },
  {
    id: 17,
    name: 'CoQ10',
    color: '#FF6347',
    evidenceStrength: 70,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for heart health and energy production',
    category: 'Antioxidants',
    benefits: ['Heart health', 'Energy production', 'Antioxidant'],
    dosage: '100-200mg daily',
    safety: 'Generally safe'
  },
  {
    id: 18,
    name: 'Glucosamine',
    color: '#98FB98',
    evidenceStrength: 65,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for joint health and mobility',
    category: 'Joint Health',
    benefits: ['Joint health', 'Mobility', 'Pain reduction'],
    dosage: '1500mg daily',
    safety: 'Generally safe'
  },
  {
    id: 19,
    name: 'Melatonin',
    color: '#9370DB',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for sleep regulation and jet lag',
    category: 'Sleep',
    benefits: ['Sleep quality', 'Jet lag', 'Circadian rhythm'],
    dosage: '0.5-5mg daily',
    safety: 'Generally safe'
  },
  {
    id: 20,
    name: 'Iron',
    color: '#CD5C5C',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Strong evidence for blood health and energy levels',
    category: 'Minerals',
    benefits: ['Blood health', 'Energy levels', 'Cognitive function'],
    dosage: '8-18mg daily',
    safety: 'Caution with high doses'
  }
];

function Home() {
  const [vitaminRatings, setVitaminRatings] = useState(vitamins);
  const [sortBy, setSortBy] = useState('evidenceStrength');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  // Load saved ratings from localStorage
  useEffect(() => {
    const savedRatings = localStorage.getItem('vitaminRatings');
    if (savedRatings) {
      setVitaminRatings(JSON.parse(savedRatings));
    }
  }, []);

  // Save ratings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('vitaminRatings', JSON.stringify(vitaminRatings));
  }, [vitaminRatings]);

  const handleRatingChange = (vitaminId, newRating) => {
    setVitaminRatings(prevRatings => 
      prevRatings.map(vitamin => 
        vitamin.id === vitaminId 
          ? { ...vitamin, userRating: newRating }
          : vitamin
      )
    );
  };

  const getFilteredAndSortedVitamins = () => {
    let filtered = vitaminRatings;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(vitamin =>
        vitamin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vitamin.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vitamin.benefits.some(benefit => 
          benefit.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(vitamin => 
        vitamin.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply sorting
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'evidenceStrength':
          return b.evidenceStrength - a.evidenceStrength;
        case 'userRating':
          return b.userRating - a.userRating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus(''), 3000);
    }
  };

  const handleVoteUpdate = (vitaminId, newVotes) => {
    setVitaminRatings(prevRatings =>
      prevRatings.map(vitamin =>
        vitamin.id === vitaminId
          ? { ...vitamin, votes: newVotes }
          : vitamin
      )
    );
  };

  // Get unique categories for filter dropdown
  const categories = ['all', ...new Set(vitamins.map(v => v.category))];

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Vitamin Guide</h1>
        <p className="hero-description">
          Your trusted source for evidence-based information about vitamins and supplements.
          We help you make informed decisions about your health and wellness journey.
        </p>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Evidence-Based</h3>
          <p>All information is backed by scientific research and clinical studies</p>
        </div>
        <div className="feature-card">
          <h3>User Ratings</h3>
          <p>Share your experience and help others make better choices</p>
        </div>
        <div className="feature-card">
          <h3>Top 20 Supplements</h3>
          <p>Curated list of the most effective and popular supplements</p>
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest research and supplement updates</p>
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
        {subscriptionStatus === 'success' && (
          <p className="success-message">Thank you for subscribing!</p>
        )}
      </section>

      <section className="supplements-section">
        <h2>Top 20 Supplements</h2>
        <div className="controls-section">
          <div className="search-controls">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search supplements..."
              className="search-input"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="sort-controls">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="evidenceStrength">Evidence Strength (Highest to Lowest)</option>
              <option value="userRating">User Rating (Highest to Lowest)</option>
              <option value="name">Alphabetically (A-Z)</option>
            </select>
          </div>
        </div>

        <div className="vitamin-grid">
          {getFilteredAndSortedVitamins().map((vitamin) => (
            <div
              key={vitamin.id}
              className="vitamin-box"
              style={{ backgroundColor: vitamin.color }}
            >
              <h3>{vitamin.name}</h3>
              <div className="vitamin-category">{vitamin.category}</div>
              
              <div className="rating-section">
                <div className="evidence-rating">
                  <label>Evidence Strength:</label>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${vitamin.evidenceStrength}%` }}
                    >
                      {vitamin.evidenceStrength}%
                    </div>
                  </div>
                  <p className="evidence-description">{vitamin.evidenceDescription}</p>
                </div>

                <div className="user-rating">
                  <label>Your Rating:</label>
                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className={`star ${vitamin.userRating >= star ? 'active' : ''}`}
                        onClick={() => handleRatingChange(vitamin.id, star)}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="vitamin-details">
                <h4>Key Benefits:</h4>
                <ul className="benefits-list">
                  {vitamin.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <div className="dosage-info">
                  <strong>Typical Dosage:</strong> {vitamin.dosage}
                </div>
                <div className="safety-info">
                  <strong>Safety:</strong> {vitamin.safety}
                </div>
              </div>

              <Link 
                to={
                  vitamin.name === 'Vitamin D' 
                    ? '/vitamin/d' 
                    : vitamin.name === 'Creatine'
                      ? '/supplement/creatine'
                      : '#'
                } 
                className="info-link"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <SupplementVoting onVoteUpdate={handleVoteUpdate} />
    </div>
  );
}

export default Home; 