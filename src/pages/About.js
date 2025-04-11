import React from 'react';
import ScoringSystem from './ScoringSystem';

function About() {
  return (
    <div className="about-page">
      <h1>About Vitamin Guide</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Vitamin Guide is dedicated to providing accurate, up-to-date information about
            vitamins and supplements. We aim to help people make informed decisions about
            their nutritional needs and supplement choices.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            We curate and present information about the most commonly used vitamins and
            supplements, backed by scientific research. Our platform helps users understand
            the benefits, recommended dosages, and potential interactions of various
            supplements.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Approach</h2>
          <p>
            We believe in transparency and evidence-based information. All our content is
            carefully researched and regularly updated to reflect the latest scientific
            findings in the field of nutrition and supplementation.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Scoring System</h2>
          <p>
            To ensure transparency and consistency in our evaluations, we use a comprehensive
            scoring system that considers multiple factors. This helps you understand how we
            assess the effectiveness and reliability of different supplements.
          </p>
          <ScoringSystem />
        </section>
      </div>
    </div>
  );
}

export default About; 