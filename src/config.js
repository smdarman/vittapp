// Configuration file for the application

const config = {
  // Discourse forum configuration
  discourse: {
    // Replace this with your actual Discourse instance URL
    baseUrl: 'https://your-discourse-instance.com',
    // Categories
    categories: {
      supplementExperiences: '/c/supplement-experiences',
      questionsAdvice: '/c/questions-advice',
      siteFeedback: '/c/site-feedback',
      researchDiscussions: '/c/research-discussions'
    },
    // Other forum pages
    pages: {
      latest: '/latest',
      signup: '/signup'
    }
  }
};

export default config; 