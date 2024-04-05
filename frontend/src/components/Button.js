import React from 'react';
import { Link } from 'react-router-dom';
import '../css/button.css';

function Button({ page, buttonName }) {
  return (
    <Link to={page} className="more-button">
      {buttonName}
    </Link>
  );
}

export default Button;
