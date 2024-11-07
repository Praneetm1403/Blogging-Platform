import React from 'react';

const Write = () => {
  const handleGenerate = () => {
    alert("AI Blog Generator coming soon!");
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-3xl font-bold mb-6">Create a New Blog Post</h1>
      <textarea className="w-full h-64 p-4 border rounded mb-4" placeholder="Start writing your post..."></textarea>
      <button 
        onClick={handleGenerate} 
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
      >
        Use AI to Generate Content
      </button>
    </div>
  );
};

export default Write;
