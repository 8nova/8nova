import React from 'react';
import { FaCode, FaMobile, FaDatabase, FaCloud, FaRocket, FaCog, FaLightbulb, FaUsers } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      icon: <FaCode />
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <FaMobile />
    },
    {
      title: "Database Design",
      description: "Efficient database architecture and optimization for scalable applications.",
      icon: <FaDatabase />
    },
    {
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup, migration, and management for modern businesses.",
      icon: <FaCloud />
    },
    {
      title: "DevOps & Deployment",
      description: "Automated deployment pipelines and infrastructure management solutions.",
      icon: <FaRocket />
    },
    {
      title: "System Integration",
      description: "Seamless integration of various systems and APIs for unified workflows.",
      icon: <FaCog />
    }
  ];

  const completedProjects = [
    {
      name: "EduTech Platform",
      description: "A comprehensive learning management system with real-time collaboration features, built for educational institutions."
    },
    {
      name: "HealthCare Connect",
      description: "A patient management system that streamlines communication between healthcare providers and patients."
    },
    {
      name: "EcoTrack Mobile App",
      description: "An environmental monitoring app that helps users track their carbon footprint and sustainable practices."
    },
    {
      name: "FinanceFlow Dashboard",
      description: "A real-time financial analytics dashboard for small businesses with automated reporting features."
    },
    {
      name: "SmartCity IoT Network",
      description: "An Internet of Things platform for smart city infrastructure management and monitoring."
    },
    {
      name: "Artisan Marketplace",
      description: "An e-commerce platform connecting local artisans with customers worldwide, featuring secure payment processing."
    }
  ];

  const ongoingProjects = [
    {
      name: "AI-Powered Analytics Suite",
      description: "Developing machine learning algorithms for predictive analytics in business intelligence applications."
    },
    {
      name: "Blockchain Voting System",
      description: "Creating a secure, transparent voting platform using blockchain technology for enhanced security and trust."
    },
    {
      name: "Virtual Reality Workspace",
      description: "Building immersive VR environments for remote collaboration and virtual meetings."
    },
    {
      name: "GreenTech Monitoring",
      description: "Developing IoT sensors and software for real-time environmental monitoring and sustainability tracking."
    }
  ];

  const upcomingProjects = [
    {
      name: "Quantum Computing Interface",
      description: "Exploring quantum computing applications for complex problem-solving and optimization challenges."
    },
    {
      name: "Neural Network Platform",
      description: "Building a user-friendly platform for creating and training custom neural networks without coding expertise."
    },
    {
      name: "SpaceTech Solutions",
      description: "Developing software solutions for space exploration missions and satellite management systems."
    },
    {
      name: "Biotech Data Platform",
      description: "Creating specialized data management systems for biotechnology research and pharmaceutical development."
    },
    {
      name: "Smart Agriculture IoT",
      description: "Building comprehensive IoT solutions for precision agriculture and sustainable farming practices."
    }
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        {/* Header Section */}
        <div className="portfolio-header">
          <div style={{
            display: 'inline-block',
            background: 'rgba(77,181,255,0.1)',
            border: '1px solid rgba(77,181,255,0.2)',
            borderRadius: '50px',
            padding: '8px 20px',
            marginBottom: '1.5rem',
            fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
            color: '#4db5ff',
            fontWeight: '500',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>
            Our Work & Vision
          </div>
          <h1 className="portfolio-title">Our Portfolio</h1>
          <p className="portfolio-subtitle">
            Discover our journey of innovation, from completed projects to future possibilities. 
            We build solutions that matter.
          </p>
        </div>

        {/* Services Section */}
        <div className="portfolio-section">
          <div className="section-header">
            <FaLightbulb className="section-icon" />
            <h2 className="section-title">Services</h2>
            <p className="section-description">Comprehensive technology solutions tailored to your needs</p>
          </div>
          <div className="portfolio-grid">
            {services.map((service, index) => (
              <div key={index} className="portfolio-card">
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects Section */}
        <div className="portfolio-section">
          <div className="section-header">
            <FaRocket className="section-icon" />
            <h2 className="section-title">Completed Projects</h2>
            <p className="section-description">Successfully delivered solutions that made a difference</p>
          </div>
          <div className="portfolio-grid">
            {completedProjects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Projects Section */}
        <div className="portfolio-section">
          <div className="section-header">
            <FaCog className="section-icon" />
            <h2 className="section-title">Ongoing Projects</h2>
            <p className="section-description">Currently in development - pushing the boundaries of innovation</p>
          </div>
          <div className="portfolio-grid">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects Section */}
        <div className="portfolio-section">
          <div className="section-header">
            <FaUsers className="section-icon" />
            <h2 className="section-title">Upcoming Projects</h2>
            <p className="section-description">Future innovations that will shape tomorrow's technology</p>
          </div>
          <div className="portfolio-grid">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
