import React, { useState, useEffect } from 'react';

const vitamins = [
  { 
    id: 1, 
    name: 'Vitamin D', 
    color: '#FFB6C1',
    evidenceStrength: 95, // Percentage based on clinical studies
    userRating: 0, // Will be updated by user input
    evidenceDescription: 'Strong clinical evidence for bone health and immune function',
    category: 'Fat-soluble'
  },
  { 
    id: 2, 
    name: 'Vitamin C', 
    color: '#98FB98',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Well-established benefits for immune system and skin health',
    category: 'Water-soluble'
  },
  { 
    id: 3, 
    name: 'Vitamin B12', 
    color: '#87CEEB',
    evidenceStrength: 90,
    userRating: 0,
    evidenceDescription: 'Strong evidence for neurological function and energy metabolism',
    category: 'B-complex'
  },
  { 
    id: 4, 
    name: 'Vitamin B6', 
    color: '#DDA0DD',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for cognitive function and mood regulation',
    category: 'B-complex'
  },
  { 
    id: 5, 
    name: 'Vitamin E', 
    color: '#F0E68C',
    evidenceStrength: 75,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for antioxidant properties',
    category: 'Fat-soluble'
  },
  { 
    id: 6, 
    name: 'Vitamin A', 
    color: '#FFA07A',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Strong evidence for vision and immune function',
    category: 'Fat-soluble'
  },
  { 
    id: 7, 
    name: 'Vitamin K', 
    color: '#98FB98',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for blood clotting and bone health',
    category: 'Fat-soluble'
  },
  { 
    id: 8, 
    name: 'Vitamin B3', 
    color: '#D8BFD8',
    evidenceStrength: 70,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for cardiovascular health',
    category: 'B-complex'
  },
  { 
    id: 9, 
    name: 'Vitamin B1', 
    color: '#E6E6FA',
    evidenceStrength: 75,
    userRating: 0,
    evidenceDescription: 'Good evidence for energy metabolism',
    category: 'B-complex'
  },
  { 
    id: 10, 
    name: 'Vitamin B2', 
    color: '#B0E0E6',
    evidenceStrength: 70,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for cellular energy production',
    category: 'B-complex'
  },
  {
    id: 11,
    name: 'Creatine',
    color: '#FFD700',
    evidenceStrength: 95,
    userRating: 0,
    evidenceDescription: 'Strong evidence for muscle strength, power, and cognitive function',
    category: 'Amino Acids'
  },
  {
    id: 12,
    name: 'Caffeine',
    color: '#8B4513',
    evidenceStrength: 90,
    userRating: 0,
    evidenceDescription: 'Strong evidence for improved alertness, focus, and athletic performance',
    category: 'Stimulants'
  },
  {
    id: 13,
    name: 'Fish Oil',
    color: '#00CED1',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Strong evidence for heart health and anti-inflammatory properties',
    category: 'Omega-3'
  },
  {
    id: 14,
    name: 'Magnesium',
    color: '#D2B48C',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for sleep quality and muscle function',
    category: 'Minerals'
  },
  {
    id: 15,
    name: 'Zinc',
    color: '#DEB887',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Strong evidence for immune function and wound healing',
    category: 'Minerals'
  },
  {
    id: 16,
    name: 'Probiotics',
    color: '#FF69B4',
    evidenceStrength: 75,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for gut health and immune function',
    category: 'Microorganisms'
  },
  {
    id: 17,
    name: 'CoQ10',
    color: '#FF6347',
    evidenceStrength: 70,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for heart health and energy production',
    category: 'Antioxidants'
  },
  {
    id: 18,
    name: 'Glucosamine',
    color: '#98FB98',
    evidenceStrength: 65,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for joint health and mobility',
    category: 'Joint Health'
  },
  {
    id: 19,
    name: 'Melatonin',
    color: '#9370DB',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for sleep regulation and jet lag',
    category: 'Sleep'
  },
  {
    id: 20,
    name: 'Iron',
    color: '#CD5C5C',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Strong evidence for blood health and energy levels',
    category: 'Minerals'
  }
];

function Home() {
  const [vitaminRatings, setVitaminRatings] = useState(vitamins);
  const [sortBy, setSortBy] = useState('evidenceStrength');

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

  const getSortedVitamins = () => {
    return [...vitaminRatings].sort((a, b) => {
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

  return (
    <div className="home-page">
      <h1>Top 10 Vitamins & Supplements</h1>
      
      <div className="controls-section">
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
        {getSortedVitamins().map((vitamin) => (
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

            <a href={`/vitamin/${vitamin.id}`} className="info-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 