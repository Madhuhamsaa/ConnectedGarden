import React from 'react';

function Plant({ image, onClick }) {
  return (
    <img
      src={image}
      alt="Plant"
      className="plant"
      onClick={onClick} // Add this onClick handler
    />
  );
}

export default Plant;
