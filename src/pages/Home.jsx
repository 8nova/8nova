
import { Link } from 'react-router-dom'
import { FaLightbulb, FaHandshake, FaRocket, FaChevronDown } from 'react-icons/fa'
import './Home.css'
import backgroundVideo from '../assets/background.mp4';
import Testimonials from '../components/Testimonials';
import Collaboration from '../components/Collaboration';

// ...existing code...

const Home = () => {
  return (
    <div className="home-bg-wrapper" style={{ minHeight: '100vh', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div className="home-video-bg">
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
      <div className="home-overlay" aria-hidden="true"></div>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(77,181,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        zIndex: 1
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(77,181,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse',
        zIndex: 1
      }}></div>
      
      <div style={{
        padding: 'clamp(60px, 15vw, 120px) 20px', 
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>

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
            
        <h1 style={{
          fontSize: 'clamp(2.4rem, 8vw, 4rem)', 
          marginBottom: '1.5rem', 
          fontFamily: 'Space Grotesk, sans-serif', 
          fontWeight: '800', 
          color: 'white',
          lineHeight: '1.1',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          background: 'linear-gradient(135deg, #ffffff 0%, #4db5ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          8 minds. One mission.
        </h1>
        
        <div style={{
          fontSize: 'clamp(1.90rem, 5vw, 3.2rem)',
          fontWeight: '700',
          color: '#4db5ff',
          marginBottom: '2rem',
          textShadow: '0 2px 10px rgba(77,181,255,0.3)',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          Infinite possibilities.
        </div>
        
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.3rem)', 
          marginBottom: '3rem', 
          lineHeight: '1.7', 
          fontFamily: 'Inter, sans-serif', 
          color: 'rgba(255,255,255,0.9)', 
          maxWidth: '900px', 
          margin: '0 auto 3rem',
          padding: '0 20px',
          textShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
          We are 8nova — a collective of brilliant minds united by a shared vision 
          to push boundaries, challenge conventions, and create extraordinary solutions 
          that shape tomorrow.
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '4rem',
          flexWrap: 'wrap'
        }}>
          <Link to="/team" style={{
            background: 'linear-gradient(135deg, #4db5ff 0%, #357abd 100%)',
            color: 'white', 
            padding: 'clamp(18px, 5vw, 24px) clamp(30px, 8vw, 40px)', 
            fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
            textDecoration: 'none', 
            borderRadius: '15px', 
            display: 'inline-block', 
            fontWeight: '700', 
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            minWidth: '200px',
            maxWidth: '280px',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(77,181,255,0.3)',
            border: 'none',
            position: 'relative',
            overflow: 'hidden',
            flex: '1'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 15px 35px rgba(77,181,255,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(77,181,255,0.3)';
          }}>
            Meet Our Team
          </Link>
          
          <Link to="/mission" style={{
            background: 'transparent', 
            color: '#4db5ff', 
            border: '2px solid #4db5ff', 
            padding: 'clamp(18px, 5vw, 24px) clamp(30px, 8vw, 40px)', 
            fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
            textDecoration: 'none', 
            borderRadius: '15px', 
            display: 'inline-block', 
            fontWeight: '700', 
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            minWidth: '200px',
            maxWidth: '280px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            flex: '1'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#4db5ff';
            e.target.style.color = 'white';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 15px 35px rgba(77,181,255,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#4db5ff';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}>
            Our Mission
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '1.5rem',
          animation: 'bounce 2s infinite'
        }}>
          <FaChevronDown />
        </div>
      </div>

      <div style={{
        padding: 'clamp(60px, 12vw, 100px) 20px', 
        background: 'linear-gradient(135deg, #2c2c6c 0%, #1f1f3b 100%)',
        position: 'relative'
      }}>
        {/* Background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(77,181,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(77,181,255,0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
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
              Our Core Values
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', 
              marginBottom: '1.5rem', 
              color: 'white', 
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '700',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              What Drives Us
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Three fundamental principles that guide everything we do
            </p>
          </div>
          
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'clamp(2rem, 5vw, 3rem)',
            padding: '0 10px'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.05)', 
              padding: 'clamp(2rem, 5vw, 3rem)', 
              borderRadius: '20px', 
              textAlign: 'center', 
              border: '1px solid rgba(77,181,255,0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.borderColor = 'rgba(77,181,255,0.4)';
              e.target.style.boxShadow = '0 20px 40px rgba(77,181,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.borderColor = 'rgba(77,181,255,0.2)';
              e.target.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: 'clamp(3rem, 8vw, 4rem)', 
                marginBottom: '1.5rem',
                filter: 'drop-shadow(0 4px 8px rgba(77,181,255,0.3))',
                color: '#4db5ff'
              }}>
                <FaLightbulb />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', 
                marginBottom: '1rem', 
                color: 'white', 
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '600'
              }}>Innovation</h3>
              <p style={{
                color: 'rgba(255,255,255,0.8)', 
                lineHeight: '1.7',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
              }}>
                We think differently, act boldly, and create solutions that matter. 
                Every challenge is an opportunity to push the boundaries of what's possible.
              </p>
            </div>
            
            <div style={{
              background: 'rgba(255,255,255,0.05)', 
              padding: 'clamp(2rem, 5vw, 3rem)', 
              borderRadius: '20px', 
              textAlign: 'center', 
              border: '1px solid rgba(77,181,255,0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.borderColor = 'rgba(77,181,255,0.4)';
              e.target.style.boxShadow = '0 20px 40px rgba(77,181,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.borderColor = 'rgba(77,181,255,0.2)';
              e.target.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: 'clamp(3rem, 8vw, 4rem)', 
                marginBottom: '1.5rem',
                filter: 'drop-shadow(0 4px 8px rgba(77,181,255,0.3))',
                color: '#4db5ff'
              }}>
                <FaHandshake />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', 
                marginBottom: '1rem', 
                color: 'white', 
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '600'
              }}>Collaboration</h3>
              <p style={{
                color: 'rgba(255,255,255,0.8)', 
                lineHeight: '1.7',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
              }}>
                Eight minds working as one, amplifying each other's strengths. 
                Together, we achieve what no individual could accomplish alone.
              </p>
            </div>
            
            <div style={{
              background: 'rgba(255,255,255,0.05)', 
              padding: 'clamp(2rem, 5vw, 3rem)', 
              borderRadius: '20px', 
              textAlign: 'center', 
              border: '1px solid rgba(77,181,255,0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.borderColor = 'rgba(77,181,255,0.4)';
              e.target.style.boxShadow = '0 20px 40px rgba(77,181,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.borderColor = 'rgba(77,181,255,0.2)';
              e.target.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: 'clamp(3rem, 8vw, 4rem)', 
                marginBottom: '1.5rem',
                filter: 'drop-shadow(0 4px 8px rgba(77,181,255,0.3))',
                color: '#4db5ff'
              }}>
                <FaRocket />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', 
                marginBottom: '1rem', 
                color: 'white', 
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '600'
              }}>Impact</h3>
              <p style={{
                color: 'rgba(255,255,255,0.8)', 
                lineHeight: '1.7',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
              }}>
                Building the future through meaningful, lasting change. 
                We measure success by the positive impact we create in the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Collaboration Section */}
      <Collaboration />
    </div>
  )
}

export default Home
