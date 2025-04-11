import React from 'react';
import { Link } from 'react-router-dom';

function Creatine() {
  return (
    <div className="vitamin-detail-page">
      <div className="back-link">
        <Link to="/">← Back to Supplements</Link>
      </div>

      <header className="vitamin-header">
        <h1>Creatine</h1>
        <div className="vitamin-category">Amino Acid Derivative</div>
      </header>

      <section className="evidence-summary">
        <h2>Evidence Summary</h2>
        <div className="evidence-strength">
          <div className="strength-label">Evidence Strength</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '95%' }}>95%</div>
          </div>
        </div>
        <p className="summary-text">
          Creatine is one of the most extensively researched supplements with strong evidence 
          supporting its effectiveness for muscle strength, power, and cognitive function. 
          It has been studied in over 500 clinical trials and is considered one of the 
          safest and most effective supplements available.
        </p>
      </section>

      <section className="findings-section">
        <h2>Key Findings</h2>
        <div className="findings-grid">
          <div className="finding-card">
            <h3>Muscle Strength & Power</h3>
            <p>
              Multiple meta-analyses show consistent improvements in strength (8-14%) and 
              power output (14-20%) with creatine supplementation. Benefits are seen across 
              various exercise types and population groups.
            </p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/39327919/" target="_blank" rel="noopener noreferrer" className="study-link">
              View Study
            </a>
          </div>

          <div className="finding-card">
            <h3>Cognitive Function</h3>
            <p>
              Research indicates potential benefits for cognitive performance, particularly 
              in tasks requiring short-term memory and rapid decision-making. Studies show 
              improvements in cognitive function, especially in sleep-deprived individuals.
            </p>
            <a href="https://www.nature.com/articles/s41574-021-00593-z" target="_blank" rel="noopener noreferrer" className="study-link">
              View Study
            </a>
          </div>

          <div className="finding-card">
            <h3>Safety Profile</h3>
            <p>
              Long-term studies (up to 5 years) show no significant adverse effects. 
              Creatine is well-tolerated and has an excellent safety record when used 
              at recommended dosages (3-5g daily).
            </p>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6374152/" target="_blank" rel="noopener noreferrer" className="study-link">
              View Study
            </a>
          </div>
        </div>
      </section>

      <section className="scoring-breakdown">
        <h2>Evidence Score Breakdown</h2>
        <div className="score-breakdown">
          <div className="score-item">
            <span className="score-label">Evidence Strength</span>
            <span className="score-value">38/40</span>
            <ul className="score-details">
              <li>Multiple high-quality meta-analyses (+30)</li>
              <li>Clear biochemical pathway (+5)</li>
              <li>Consistent positive findings (+3)</li>
            </ul>
          </div>

          <div className="score-item">
            <span className="score-label">Population Applicability</span>
            <span className="score-value">28/30</span>
            <ul className="score-details">
              <li>Broad population benefits (+15)</li>
              <li>Specific benefits for athletes (+10)</li>
              <li>Potential cognitive benefits (+3)</li>
            </ul>
          </div>

          <div className="score-item">
            <span className="score-label">Safety Profile</span>
            <span className="score-value">20/20</span>
            <ul className="score-details">
              <li>Excellent long-term safety data (+10)</li>
              <li>Well-established dosing guidelines (+5)</li>
              <li>Minimal side effects (+5)</li>
            </ul>
          </div>

          <div className="score-item">
            <span className="score-label">Quality Verification</span>
            <span className="score-value">10/10</span>
            <ul className="score-details">
              <li>Third-party testing available (+5)</li>
              <li>GMP compliance standard (+5)</li>
            </ul>
          </div>
        </div>
        <div className="total-score">
          <span className="total-label">Total Score</span>
          <span className="total-value">96/100</span>
        </div>
      </section>

      <section className="recommendations">
        <h2>Recommendations</h2>
        <div className="recommendation-content">
          <h3>Dosage</h3>
          <ul className="recommendation-list">
            <li>Loading phase (optional): 20g daily for 5-7 days</li>
            <li>Maintenance dose: 3-5g daily</li>
            <li>Timing: Can be taken at any time, but post-workout may be optimal</li>
          </ul>

          <h3>Forms</h3>
          <ul className="recommendation-list">
            <li>Creatine Monohydrate: Most researched and cost-effective form</li>
            <li>Micronized Creatine: Better solubility, same effectiveness</li>
            <li>Avoid proprietary blends with unproven forms</li>
          </ul>

          <h3>Considerations</h3>
          <ul className="recommendation-list">
            <li>Vegetarians may experience greater benefits due to lower baseline levels</li>
            <li>Stay hydrated while supplementing</li>
            <li>No need to cycle on and off</li>
          </ul>
        </div>
      </section>

      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <ul className="resource-list">
          <li>
            <a href="https://examine.com/supplements/creatine/" target="_blank" rel="noopener noreferrer">
              Examine.com Creatine Guide
            </a>
          </li>
          <li>
            <a href="https://ods.od.nih.gov/factsheets/Creatine-HealthProfessional/" target="_blank" rel="noopener noreferrer">
              NIH Creatine Fact Sheet
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6374152/" target="_blank" rel="noopener noreferrer">
              International Society of Sports Nutrition Position Stand
            </a>
          </li>
        </ul>
      </section>

      <div className="disclaimer-box">
        <p>
          This information is based on current scientific research and is regularly updated. 
          Individual responses to creatine supplementation may vary. Always consult with your 
          healthcare provider before starting any supplement regimen, especially if you have 
          pre-existing medical conditions.
        </p>
      </div>
    </div>
  );
}

export default Creatine; 