import React from 'react';
import { Link } from 'react-router-dom';

function SecondPage() {
  return (
    <div className="second-page">
      <Link to="/" className="box-button">
        Go Back
      </Link>
    </div>
  );
}

export default SecondPage;
