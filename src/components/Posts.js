// src/components/Posts.js
import React from 'react';

const Posts = () => {
  return (
    <div className="mt-4">
      <h3>Recent Posts</h3>
      <div className="card mb-3">
        <div className="card-body">
          <p>Had a great day at the beach!</p>
          <button className="btn btn-primary">Like</button>
          <button className="btn btn-secondary">Comment</button>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <p>Just finished a new project!</p>
          <button className="btn btn-primary">Like</button>
          <button className="btn btn-secondary">Comment</button>
        </div>
      </div>

      {/* Add more posts here */}
    </div>
  );
};

export default Posts;
