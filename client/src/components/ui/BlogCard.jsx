import React from 'react';
import './BlogCard.css'; // External CSS file for BlogCard styles

const BlogCard = ({ title, image, summary }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-summary">{summary}</p>
        <button className="blog-card-button">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
