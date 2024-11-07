import React from "react";
import BlogCard from "../components/ui/BlogCard";
import "./Home.css";  // Importing the CSS file

const blogs = [
  {
    title: "The Rise of AI in Blogging",
    image: "https://via.placeholder.com/400x250",
    summary: "Explore how Artificial Intelligence is transforming the blogging landscape and its future implications.",
  },
  {
    title: "Tips for Growing Your Blog Traffic",
    image: "https://via.placeholder.com/400x250",
    summary: "Learn effective strategies to increase traffic to your blog and grow your audience.",
  },
  {
    title: "The Future of Content Creation",
    image: "https://via.placeholder.com/400x250",
    summary: "A look at emerging trends in content creation and how creators can adapt.",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Blogging Platform</h1>
      <p className="home-subtitle">
        Discover the latest trends, tips, and stories from the blogging world.
      </p>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            summary={blog.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
