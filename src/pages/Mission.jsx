import { FaBullseye, FaEye, FaHeart, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa'
import './Mission.css'

const Mission = () => {
  return (
    <div style={{paddingTop: '100px', minHeight: '100vh', background: '#1f1f3b', color: 'white'}}>
      <div style={{padding: 'clamp(40px, 10vw, 80px) 20px', textAlign: 'center', background: '#2c2c6c'}}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', 
          marginBottom: '30px', 
          fontFamily: 'Space Grotesk, sans-serif', 
          fontWeight: '700', 
          color: 'white',
          lineHeight: '1.2'
        }}>
          Our Mission & Vision
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 4vw, 1.3rem)', 
          color: 'rgba(255,255,255,0.9)', 
          maxWidth: '800px', 
          margin: '0 auto',
          padding: '0 10px'
        }}>
          At 8nova, we believe that the most powerful innovations emerge when 
          diverse minds come together with a shared purpose. Our mission and 
          vision guide everything we do.
        </p>
      </div>

      <div style={{padding: 'clamp(30px, 8vw, 60px) 20px', background: '#1f1f3b'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 10px'}}>
          <div style={{
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid rgba(77,181,255,0.2)', 
            borderRadius: '15px', 
            padding: 'clamp(2rem, 6vw, 3rem)', 
            marginBottom: '3rem', 
            textAlign: 'center'
          }}>
            <div style={{fontSize: 'clamp(2.5rem, 6vw, 3rem)', marginBottom: '1.5rem', color: '#4db5ff'}}>
              <FaBullseye />
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 5vw, 2rem)', 
              fontWeight: '600', 
              color: 'white', 
              marginBottom: '1.5rem', 
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              Our Mission
            </h2>
            <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
              To harness the collective intelligence of eight brilliant minds, creating 
              innovative solutions that address real-world challenges and push the boundaries 
              of what's possible. We're not just building products—we're crafting the future, 
              one breakthrough at a time.
            </p>
            <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: '1.7', fontSize: '1.1rem'}}>
              Every project we undertake is driven by our commitment to meaningful impact. 
              We believe technology should serve humanity, not the other way around. That's 
              why we focus on solutions that are not only technically excellent but also 
              ethically sound and socially beneficial.
            </p>
          </div>

          <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(77,181,255,0.2)', borderRadius: '15px', padding: '3rem', marginBottom: '3rem', textAlign: 'center'}}>
            <div style={{fontSize: '3rem', marginBottom: '1.5rem', color: '#4db5ff'}}>
              <FaEye />
            </div>
            <h2 style={{fontSize: '2rem', fontWeight: '600', color: 'white', marginBottom: '1.5rem', fontFamily: 'Space Grotesk, sans-serif'}}>
              Our Vision
            </h2>
            <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
              We envision a world where innovation is accessible, inclusive, and purposeful. 
              A world where the best ideas—regardless of where they come from—can flourish 
              and create positive change for everyone.
            </p>
            <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: '1.7', fontSize: '1.1rem'}}>
              Our vision extends beyond individual success to collective progress. We see 
              ourselves as catalysts in a larger movement toward more thoughtful, human-centered 
              technology. We're building bridges between disciplines, cultures, and perspectives 
              because we know that the most powerful solutions emerge from diverse collaboration.
            </p>
          </div>
        </div>
      </div>

      <div style={{padding: '60px 20px', background: '#2c2c6c'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#4db5ff', fontFamily: 'Space Grotesk, sans-serif'}}>
            What Drives Us
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(77,181,255,0.2)', borderRadius: '15px', padding: '2rem', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '1rem', color: '#4db5ff'}}>
                <FaHeart />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '1rem', fontFamily: 'Space Grotesk, sans-serif'}}>
                Authenticity
              </h3>
              <p style={{color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontSize: '0.95rem'}}>
                We stay true to our values and maintain integrity in everything we do.
              </p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(77,181,255,0.2)', borderRadius: '15px', padding: '2rem', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '1rem', color: '#4db5ff'}}>
                <FaUsers />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '1rem', fontFamily: 'Space Grotesk, sans-serif'}}>
                Collaboration
              </h3>
              <p style={{color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontSize: '0.95rem'}}>
                We believe that the best solutions emerge from diverse perspectives working together.
              </p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(77,181,255,0.2)', borderRadius: '15px', padding: '2rem', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '1rem', color: '#4db5ff'}}>
                <FaLightbulb />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '1rem', fontFamily: 'Space Grotesk, sans-serif'}}>
                Innovation
              </h3>
              <p style={{color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontSize: '0.95rem'}}>
                We constantly push boundaries and explore new ways of thinking and creating.
              </p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(77,181,255,0.2)', borderRadius: '15px', padding: '2rem', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '1rem', color: '#4db5ff'}}>
                <FaRocket />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '1rem', fontFamily: 'Space Grotesk, sans-serif'}}>
                Impact
              </h3>
              <p style={{color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontSize: '0.95rem'}}>
                We measure success not just by what we build, but by the positive change we create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
