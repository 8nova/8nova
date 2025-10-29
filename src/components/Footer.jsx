import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaLightbulb } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const socialMedia = [
    {
      name: 'Twitter',
      handle: '@8nova_collective',
      url: 'https://twitter.com/8nova_collective',
      icon: <FaTwitter />,
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      handle: '8nova Collective',
      url: 'https://linkedin.com/company/8nova-collective',
      icon: <FaLinkedin />,
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      handle: '@8nova',
      url: 'https://github.com/8nova',
      icon: <FaGithub />,
      color: '#333'
    },
    {
      name: 'Instagram',
      handle: '@8nova_collective',
      url: 'https://instagram.com/8nova_collective',
      icon: <FaInstagram />,
      color: '#E4405F'
    },
    {
      name: 'Discord',
      handle: '8nova Community',
      url: 'https://discord.gg/8nova',
      icon: <FaDiscord />,
      color: '#5865F2'
    }
  ]

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1f1f3b 0%, #2c2c6c 100%)',
      color: 'white',
      padding: 'clamp(40px, 10vw, 80px) 20px 30px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(77,181,255,0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(77,181,255,0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2}}>
        {/* Main footer content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          marginBottom: '3rem'
        }}>
          {/* Brand section */}
          <div>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              color: '#4db5ff',
              marginBottom: '1rem'
            }}>
              8nova
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              lineHeight: '1.6',
              marginBottom: '2rem',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
            }}>
              Eight brilliant minds united by a shared vision to push boundaries, 
              challenge conventions, and create extraordinary solutions that shape tomorrow.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(77,181,255,0.1)',
              border: '1px solid rgba(77,181,255,0.2)',
              borderRadius: '50px',
              padding: '8px 20px',
              fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
              color: '#4db5ff',
              fontWeight: '500',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              <FaLightbulb style={{fontSize: '1rem'}} />
              Innovation Collective
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
              fontWeight: '600',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Connect With Us
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '2rem',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              lineHeight: '1.6'
            }}>
              Follow our journey and join the conversation across our social platforms.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(77,181,255,0.2)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.borderColor = social.color;
                    e.target.style.boxShadow = `0 8px 25px ${social.color}20`;
                    e.target.style.background = `rgba(${social.color === '#333' ? '51,51,51' : social.color === '#1DA1F2' ? '29,161,242' : social.color === '#0077B5' ? '0,119,181' : social.color === '#E4405F' ? '228,64,95' : '88,101,242'}, 0.1)`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.borderColor = 'rgba(77,181,255,0.2)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  <span style={{
                    fontSize: '1.2rem',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                    color: social.color
                  }}>
                    {social.icon}
                  </span>
                  <div>
                    <div style={{
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      marginBottom: '0.25rem'
                    }}>
                      {social.name}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.7)'
                    }}>
                      {social.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div style={{
          borderTop: '1px solid rgba(77,181,255,0.2)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <a href="/" style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>Home</a>
            <a href="/team" style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>Team</a>
            <a href="/mission" style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>Mission</a>
            <a href="/contact" style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>Contact</a>
          </div>
          
          <div style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
            lineHeight: '1.5'
          }}>
            <p>© 2025 8nova Collective. All rights reserved.</p>
            <p style={{marginTop: '0.5rem'}}>
              Crafted with ❤️ by eight brilliant minds
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
