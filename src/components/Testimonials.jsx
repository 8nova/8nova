import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "8nova transformed our vision into reality. Their innovative approach and collaborative spirit made the impossible possible.",
      name: "Sarah Chen",
      role: "CEO, TechForward"
    },
    {
      quote: "Working with 8nova was like having eight brilliant minds working as one. Their creativity knows no bounds.",
      name: "Marcus Rodriguez",
      role: "Founder, InnovateLab"
    },
    {
      quote: "The team's dedication to excellence and their human-first approach sets them apart in the industry.",
      name: "Dr. Emily Watson",
      role: "Director, FutureTech Institute"
    },
    {
      quote: "8nova doesn't just deliver solutions; they create experiences that change how we think about technology.",
      name: "James Thompson",
      role: "CTO, Digital Dynamics"
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What People Say</h2>
        </div>
        
        <div className="testimonials-marquee">
          <div className="testimonials-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`first-${index}`} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`second-${index}`} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
