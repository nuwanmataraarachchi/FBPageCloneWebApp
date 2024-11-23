// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h4>Friends</h4>
        <ul>
          <li>Friend 1</li>
          <li>Friend 2</li>
          <li>Friend 3</li>
          {/* Add more friends here */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
