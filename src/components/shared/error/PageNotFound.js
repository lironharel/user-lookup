import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h1>404 - Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={'/'}>
         <button className="error-btn btn" style={{'marginTop': '20px'}}>Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;