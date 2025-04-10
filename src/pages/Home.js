import React, { useState } from 'react';

const vitamins = [
  { 
    id: 1, 
    name: 'Vitamin D', 
    color: '#FFB6C1',
    evidenceStrength: 95, // Percentage based on clinical studies
    userRating: 0, // Will be updated by user input
    evidenceDescription: 'Strong clinical evidence for bone health and immune function'
  },
  { 
    id: 2, 
    name: 'Vitamin C', 
    color: '#98FB98',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Well-established benefits for immune system and skin health'
  },
  { 
    id: 3, 
    name: 'Vitamin B12', 
    color: '#87CEEB',
    evidenceStrength: 90,
    userRating: 0,
    evidenceDescription: 'Strong evidence for neurological function and energy metabolism'
  },
  { 
    id: 4, 
    name: 'Vitamin B6', 
    color: '#DDA0DD',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for cognitive function and mood regulation'
  },
  { 
    id: 5, 
    name: 'Vitamin E', 
    color: '#F0E68C',
    evidenceStrength: 75,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for antioxidant properties'
  },
  { 
    id: 6, 
    name: 'Vitamin A', 
    color: '#FFA07A',
    evidenceStrength: 85,
    userRating: 0,
    evidenceDescription: 'Strong evidence for vision and immune function'
  },
  { 
    id: 7, 
    name: 'Vitamin K', 
    color: '#98FB98',
    evidenceStrength: 80,
    userRating: 0,
    evidenceDescription: 'Good evidence for blood clotting and bone health'
  },
  { 
    id: 8, 
    name: 'Vitamin B3', 
    color: '#D8BFD8',
    evidenceStrength: 70,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for cardiovascular health'
  },
  { 
    id: 9, 
    name: 'Vitamin B1', 
    color: '#E6E6FA',
    evidenceStrength: 75,
    userRating: 0,
    evidenceDescription: 'Good evidence for energy metabolism'
  },
  { 
    id: 10, 
    name: 'Vitamin B2', 
    color: '#B0E0E6',
    evidenceStrength: 70,
    userRating: 0,
    evidenceDescription: 'Moderate evidence for cellular energy production'
  },
];

function Home() {
  const [vitaminRatings, setVitaminRatings] = useState(vitamins);

  const handleRatingChange = (vitaminId, newRating) => {
    setVitaminRatings(prevRatings => 
      prevRatings.map(vitamin => 
        vitamin.id === vitaminId 
          ? { ...vitamin, userRating: newRating }
          : vitamin
      )
    );
  };

  return (
    <div className="home-page">
      <h1>Top 10 Vitamins & Supplements</h1>
      <div className="vitamin-grid">
        {vitaminRatings.map((vitamin) => (
          <div
            key={vitamin.id}
            className="vitamin-box"
            style={{ backgroundColor: vitamin.color }}
          >
            <h3>{vitamin.name}</h3>
            
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