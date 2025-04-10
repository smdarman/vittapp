import React, { useState, useEffect } from 'react';

const otherSupplements = [
  {
    id: 21,
    name: 'Ashwagandha',
    category: 'Adaptogens',
    votes: 0,
    description: 'Traditional herb with potential stress-reducing properties'
  },
  {
    id: 22,
    name: 'Collagen',
    category: 'Protein',
    votes: 0,
    description: 'Popular for skin, hair, and joint health'
  },
  {
    id: 23,
    name: 'Turmeric',
    category: 'Anti-inflammatory',
    votes: 0,
    description: 'Natural anti-inflammatory compound'
  },
  {
    id: 24,
    name: 'Green Tea Extract',
    category: 'Antioxidants',
    votes: 0,
    description: 'Rich in antioxidants and potential metabolic benefits'
  },
  {
    id: 25,
    name: 'Biotin',
    category: 'B-complex',
    votes: 0,
    description: 'Popular for hair and nail health'
  }
];

function SupplementVoting({ onVoteUpdate }) {
  const [supplements, setSupplements] = useState(otherSupplements);
  const [votedSupplements, setVotedSupplements] = useState([]);

  useEffect(() => {
    const savedVotes = localStorage.getItem('supplementVotes');
    const savedVoted = localStorage.getItem('votedSupplements');
    if (savedVotes) {
      setSupplements(JSON.parse(savedVotes));
    }
    if (savedVoted) {
      setVotedSupplements(JSON.parse(savedVoted));
    }
  }, []);

  const handleVote = (supplementId) => {
    if (votedSupplements.includes(supplementId)) {
      return; // User has already voted
    }

    const updatedSupplements = supplements.map(supplement =>
      supplement.id === supplementId
        ? { ...supplement, votes: supplement.votes + 1 }
        : supplement
    );

    setSupplements(updatedSupplements);
    setVotedSupplements([...votedSupplements, supplementId]);
    
    localStorage.setItem('supplementVotes', JSON.stringify(updatedSupplements));
    localStorage.setItem('votedSupplements', JSON.stringify([...votedSupplements, supplementId]));
    
    onVoteUpdate(updatedSupplements);
  };

  return (
    <div className="voting-section">
      <h2>Vote for New Supplements</h2>
      <p className="voting-description">
        Help us expand our list! Vote for supplements you'd like to see in our top 20.
        The highest-voted supplements may replace lower-performing ones in our main list.
      </p>
      <div className="voting-grid">
        {supplements.map(supplement => (
          <div key={supplement.id} className="voting-card">
            <h3>{supplement.name}</h3>
            <div className="supplement-category">{supplement.category}</div>
            <p className="supplement-description">{supplement.description}</p>
            <div className="vote-count">Votes: {supplement.votes}</div>
            <button
              className={`vote-button ${votedSupplements.includes(supplement.id) ? 'voted' : ''}`}
              onClick={() => handleVote(supplement.id)}
              disabled={votedSupplements.includes(supplement.id)}
            >
              {votedSupplements.includes(supplement.id) ? 'Voted' : 'Vote'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupplementVoting; 