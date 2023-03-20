import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  return (
    <section>
      <div className="container notfound_container">
        <h1>Page Not Found</h1>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound