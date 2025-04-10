import React from 'react';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Vitamin D: The Sunshine Vitamin",
      date: "April 30, 2024",
      excerpt: "Learn about the importance of Vitamin D, its sources, and how it affects your overall health.",
      category: "Vitamins"
    },
    {
      id: 2,
      title: "The Role of B Vitamins in Energy Production",
      date: "April 28, 2024",
      excerpt: "Discover how B vitamins work together to convert food into energy and maintain healthy brain function.",
      category: "Vitamins"
    },
    {
      id: 3,
      title: "Vitamin C: Beyond the Common Cold",
      date: "April 25, 2024",
      excerpt: "Explore the many benefits of Vitamin C, from immune support to collagen production.",
      category: "Vitamins"
    }
  ];

  return (
    <div className="blog-page">
      <h1>Vitamin Guide Blog</h1>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-post">
            <div className="post-category">{post.category}</div>
            <h2>{post.title}</h2>
            <div className="post-date">{post.date}</div>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.id}`} className="read-more">Read More</a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog; 