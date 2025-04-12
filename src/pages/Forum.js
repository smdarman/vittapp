import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

function Forum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { baseUrl, categories, pages } = config.discourse;

  return (
    <div className="forum-page">
      <div className="back-link">
        <Link to="/">← Back to Home</Link>
      </div>

      <header className="forum-header">
        <h1>Community Forum</h1>
        <p className="forum-description">
          Join our community to discuss supplements, share experiences, and provide feedback.
          Connect with others on their health and wellness journey.
        </p>
      </header>

      <section className="forum-categories">
        <h2>Discussion Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Supplement Experiences</h3>
            <p>Share your personal experiences with different supplements</p>
            <a 
              href={`${baseUrl}${categories.supplementExperiences}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="category-link"
            >
              Join Discussion
            </a>
          </div>
          
          <div className="category-card">
            <h3>Questions & Advice</h3>
            <p>Ask questions and get advice from the community</p>
            <a 
              href={`${baseUrl}${categories.questionsAdvice}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="category-link"
            >
              Join Discussion
            </a>
          </div>
          
          <div className="category-card">
            <h3>Site Feedback</h3>
            <p>Suggest improvements and report issues</p>
            <a 
              href={`${baseUrl}${categories.siteFeedback}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="category-link"
            >
              Join Discussion
            </a>
          </div>
          
          <div className="category-card">
            <h3>Research Discussions</h3>
            <p>Discuss the latest supplement research and studies</p>
            <a 
              href={`${baseUrl}${categories.researchDiscussions}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="category-link"
            >
              Join Discussion
            </a>
          </div>
        </div>
      </section>

      <section className="forum-embed">
        <h2>Recent Discussions</h2>
        <div className="embed-container">
          <iframe 
            src={`${baseUrl}${pages.latest}`}
            title="Recent Forum Discussions"
            className="forum-iframe"
            width="100%"
            height="600"
            frameBorder="0"
          />
        </div>
      </section>

      <section className="forum-cta">
        <h2>Join Our Community</h2>
        <p>
          Create an account to participate in discussions, ask questions, and share your experiences.
        </p>
        <a 
          href={`${baseUrl}${pages.signup}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button"
        >
          Sign Up for Forum
        </a>
      </section>

      <div className="disclaimer-box">
        <p>
          The forum is hosted on a separate platform. By clicking on any forum links, 
          you will be directed to our Discourse community site.
        </p>
      </div>
    </div>
  );
}

export default Forum; 