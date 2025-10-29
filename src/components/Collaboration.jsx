import React from 'react';
import { Link } from 'react-router-dom';
import './Collaboration.css';

const Collaboration = () => {
  return (
    <div className="collaboration-section">
      <div className="collaboration-container">
        <div className="collaboration-marquee" aria-hidden="false">
          <div className="collaboration-track">
            {/* First set of content */}
            <div className="collaboration-content">
              <div className="collaboration-header">
                <h2 className="collaboration-title">Collaborate With Us</h2>
              </div>
              <div className="collaboration-body">
                <p className="collaboration-text">
                  We believe in building together. Whether you're a student, mentor, or organization, 
                  there's a place for you in the 8nova journey.
                </p>
                <Link to="/contact" className="collaboration-cta">
                  Join Our Mission
                </Link>
              </div>
            </div>
            
            {/* Duplicate content for seamless loop */}
            <div className="collaboration-content">
              <div className="collaboration-header">
                <h2 className="collaboration-title">Collaborate With Us</h2>
              </div>
              <div className="collaboration-body">
                <p className="collaboration-text">
                  We believe in building together. Whether you're a student, mentor, or organization, 
                  there's a place for you in the 8nova journey.
                </p>
                <Link to="/contact" className="collaboration-cta">
                  Join Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Collaboration;
