import React from 'react';
import { Link } from 'react-router-dom';

function VitaminD() {
  return (
    <div className="vitamin-detail-page">
      <div className="back-link">
        <Link to="/">← Back to Supplements</Link>
      </div>

      <header className="vitamin-header">
        <h1>Vitamin D</h1>
        <div className="vitamin-category">Fat-soluble Vitamin</div>
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
          Strong clinical evidence supports Vitamin D's role in bone health, immune function, and potential benefits in reducing mortality risk.
        </p>
      </section>

      <section className="key-findings">
        <h2>Key Findings from Meta-Analyses</h2>
        <div className="findings-grid">
          <div className="finding-card">
            <h3>Mortality Impact</h3>
            <p>Risk Ratio: 0.67-0.98</p>
            <a href="https://doi.org/10.1136/bmj.l4673" target="_blank" rel="noopener noreferrer" className="study-link">
              View Study (BMJ)
            </a>
          </div>
          <div className="finding-card">
            <h3>COVID-19 Outcomes</h3>
            <p>Reduced severity in deficient individuals</p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/38732592/" target="_blank" rel="noopener noreferrer" className="study-link">
              View Study (PubMed)
            </a>
          </div>
          <div className="finding-card">
            <h3>Bone Health</h3>
            <p>Strong evidence for fracture prevention</p>
            <a href="https://www.nature.com/articles/s41574-021-00593-z" target="_blank" rel="noopener noreferrer" className="study-link">
              View Study (Nature) *
            </a>
          </div>
        </div>
      </section>

      <section className="study-details">
        <h2>Key Studies</h2>
        <div className="study-list">
          <div className="study-item">
            <h3>All-Cause Mortality Analysis</h3>
            <p>Pooled analysis of 74,655 participants showed 15% reduction in cancer mortality (95% CI 0.74-0.97)</p>
            <a href="https://www.bmj.com/content/366/bmj.l4673" target="_blank" rel="noopener noreferrer" className="study-link">
              BMJ Study
            </a>
          </div>
          <div className="study-item">
            <h3>COVID-19 Meta-Analysis</h3>
            <p>Significant reduction in ICU admission and mortality in vitamin D deficient patients</p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/38732592/" target="_blank" rel="noopener noreferrer" className="study-link">
              PubMed Study
            </a>
          </div>
          <div className="study-item">
            <h3>Bone Health Review</h3>
            <p>Comprehensive review of vitamin D's role in bone metabolism and fracture prevention</p>
            <a href="https://www.nature.com/articles/s41574-021-00593-z" target="_blank" rel="noopener noreferrer" className="study-link">
              Nature Review *
            </a>
          </div>
        </div>
      </section>

      <section className="disclaimers">
        <h2>Important Information</h2>
        <div className="disclaimer-box">
          <p>
            * Some studies require journal subscription for full access
          </p>
          <p>
            This information is based on aggregated trial data and does not constitute medical advice. 
            Individual needs vary based on health status and nutritional deficiencies.
          </p>
          <p>
            Always consult with healthcare providers before starting any supplementation.
          </p>
        </div>
      </section>

      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <ul className="resource-list">
          <li>
            <a href="https://www.who.int/tools/elena/review-summaries/vitamina-children" target="_blank" rel="noopener noreferrer">
              WHO Guidelines on Vitamin D
            </a>
          </li>
          <li>
            <a href="https://www.health.harvard.edu/newsletter_article/supplements-a-scorecard" target="_blank" rel="noopener noreferrer">
              Harvard Health Supplement Scorecard
            </a>
          </li>
          <li>
            <a href="https://www.healthline.com/nutrition/how-to-choose-high-quality-vitamins-and-supplements" target="_blank" rel="noopener noreferrer">
              Guide to Choosing Quality Supplements
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default VitaminD; 