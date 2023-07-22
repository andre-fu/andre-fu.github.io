import React from 'react';
import '../App.css'; // Assuming you have a CSS file named App.css

const BottomLinks = () => {
  return (
    <div className="bottom-links">
      <a href="../../resume.pdf" className="link">RESUME.</a>
      <a href="https://www.linkedin.com/in/andre-fu/" className="link">LINKEDIN.</a>
      <a href="https://github.com/andre-fu/" className="link">GITHUB.</a>
      {/* <a href="/bookshelf" className="link">BLOG.</a> */}
    </div>
  );
};

export default BottomLinks;
