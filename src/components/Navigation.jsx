import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'
import Logo from "../assets/8nova1.png"
import { FaHome, FaUsers, FaBullseye, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <img src={Logo} alt="Logo" className='logo'/>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <FaHome className="nav-icon" /> Home
            </Link>
            <Link 
              to="/team" 
              className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <FaUsers className="nav-icon" /> Team
            </Link>
            <Link 
              to="/mission" 
              className={`nav-link ${location.pathname === '/mission' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <FaBullseye className="nav-icon" /> Mission
            </Link>
            <Link 
              to="/portfolio" 
              className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <FaFolderOpen className="nav-icon" /> Portfolio
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <FaEnvelope className="nav-icon" /> Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="nav-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-mobile-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <FaHome className="nav-icon" /> Home
          </Link>
          <Link 
            to="/team" 
            className={`nav-mobile-link ${location.pathname === '/team' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <FaUsers className="nav-icon" /> Team
          </Link>
          <Link 
            to="/mission" 
            className={`nav-mobile-link ${location.pathname === '/mission' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <FaBullseye className="nav-icon" /> Mission
          </Link>
          <Link 
            to="/portfolio" 
            className={`nav-mobile-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <FaFolderOpen className="nav-icon" /> Portfolio
          </Link>
          <Link 
            to="/contact" 
            className={`nav-mobile-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <FaEnvelope className="nav-icon" /> Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
