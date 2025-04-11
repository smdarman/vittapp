import React from 'react';
import '../App.css';

const ScoringSystem = () => {
  return (
    <div className="scoring-system-page">
      <div className="scoring-header">
        <h1>Evidence-Based Scoring System</h1>
        <p className="scoring-description">
          Our scoring system combines clinical research rigor with quality verification standards
          to provide a comprehensive evaluation of vitamins and supplements.
        </p>
      </div>

      <div className="scoring-framework">
        <div className="scoring-component">
          <h3>Evidence Strength (40 points)</h3>
          <ul className="scoring-list">
            <li>
              <span className="point-value">20 pts</span>
              <span className="point-description">Meta-analyses and systematic reviews</span>
            </li>
            <li>
              <span className="point-value">15 pts</span>
              <span className="point-description">Randomized controlled trials</span>
            </li>
            <li>
              <span className="point-value">10 pts</span>
              <span className="point-description">Observational studies</span>
            </li>
            <li>
              <span className="point-value">5 pts</span>
              <span className="point-description">Case studies and expert opinions</span>
            </li>
          </ul>
        </div>

        <div className="scoring-component">
          <h3>Population Applicability (30 points)</h3>
          <ul className="scoring-list">
            <li>
              <span className="point-value">15 pts</span>
              <span className="point-description">Broad population benefits</span>
            </li>
            <li>
              <span className="point-value">10 pts</span>
              <span className="point-description">Specific population benefits</span>
            </li>
            <li>
              <span className="point-value">5 pts</span>
              <span className="point-description">Limited population benefits</span>
            </li>
          </ul>
        </div>

        <div className="scoring-component">
          <h3>Safety Profile (20 points)</h3>
          <ul className="scoring-list">
            <li>
              <span className="point-value">10 pts</span>
              <span className="point-description">Excellent safety record</span>
            </li>
            <li>
              <span className="point-value">7 pts</span>
              <span className="point-description">Good safety with minor concerns</span>
            </li>
            <li>
              <span className="point-value">3 pts</span>
              <span className="point-description">Moderate safety concerns</span>
            </li>
          </ul>
        </div>

        <div className="scoring-component">
          <h3>Quality Verification (10 points)</h3>
          <ul className="scoring-list">
            <li>
              <span className="point-value">5 pts</span>
              <span className="point-description">Third-party testing certification</span>
            </li>
            <span className="point-value">5 pts</span>
            <span className="point-description">GMP compliance</span>
          </ul>
        </div>
      </div>

      <div className="scoring-example">
        <h2>Example: Vitamin D Score Breakdown</h2>
        <div className="example-score">
          <div className="score-breakdown">
            <div className="score-item">
              <span className="score-label">Evidence Strength</span>
              <span className="score-value">35/40</span>
              <ul className="score-details">
                <li>Multiple meta-analyses</li>
                <li>Numerous RCTs</li>
                <li>Strong observational data</li>
              </ul>
            </div>
            <div className="score-item">
              <span className="score-label">Population Applicability</span>
              <span className="score-value">25/30</span>
              <ul className="score-details">
                <li>Broad population benefits</li>
                <li>Specific benefits for deficiency</li>
              </ul>
            </div>
            <div className="score-item">
              <span className="score-label">Safety Profile</span>
              <span className="score-value">18/20</span>
              <ul className="score-details">
                <li>Excellent safety at recommended doses</li>
                <li>Minor concerns at high doses</li>
              </ul>
            </div>
            <div className="score-item">
              <span className="score-label">Quality Verification</span>
              <span className="score-value">10/10</span>
              <ul className="score-details">
                <li>USP verification available</li>
                <li>GMP compliant manufacturers</li>
              </ul>
            </div>
          </div>
          <div className="total-score">
            <span className="total-label">Total Score</span>
            <span className="total-value">88/100</span>
          </div>
        </div>
      </div>

      <div className="scoring-disclaimer">
        <div className="disclaimer-content">
          <p>
            This scoring system is designed to provide a standardized way to evaluate
            the evidence base and quality of vitamins and supplements. Scores reflect
            the aggregated evidence available in the scientific literature and quality
            verification standards.
          </p>
          <p>
            Individual responses to supplements may vary, and these scores should not
            replace professional medical advice. Always consult with your healthcare
            provider before starting any supplement regimen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoringSystem; 