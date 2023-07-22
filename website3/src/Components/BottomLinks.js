import React from 'react';
import '../App.css'; // Assuming you have a CSS file named App.css

const BottomLinks = () => {
  return (
    <div className="bottom-links">
      <a href="/resume" className="link">RESUME.</a>
      <a href="https://www.linkedin.com" className="link">LINKEDIN.</a>
      <a href="https://github.com" className="link">GITHUB.</a>
      <a href="/bookshelf" className="link">BOOKSHELF.</a>
    </div>
  );
};

export default BottomLinks;
