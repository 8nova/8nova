import './Team.css'
import selassie from "../assets/selassie.png"
import cyber from "../assets/cyber.jpg"
import consistency from "../assets/consistency.jpg"
import kasim from "../assets/kasim.jpg"
import peter from "../assets/peter.jpg"
import wudana from "../assets/wudana.jpg"
import Aaron from "../assets/Aaron.jpg"
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
import tutu from "../assets/tutu.jpg"

import { useRef, useState, useEffect } from 'react'

const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!imgRef.current) return
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setIsVisible(true)
            obs.disconnect()
          }
        })
      }, { rootMargin: '200px' })
      obs.observe(imgRef.current)
      return () => obs.disconnect()
    } else {
      // fallback: load immediately
      setIsVisible(true)
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      fetchpriority="low"
      onLoad={() => setLoaded(true)}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 300ms ease, transform 250ms ease',
      }}
    />
  )
}

const Team = () => {
  const teamMembers = [
    {
      name: "Zakaria Sisu",
      role: "Software Developer",
      bio: "Dreams in code and thinks in possibilities. Zakaria bridges the gap between imagination and reality, turning wild ideas into tangible innovations.",
      avatar: selassie,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/zakaria-sisu-9b2486239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Zakariasisu5",
        facebook: "https://www.facebook.com/zakaria.sisu.568"
      }
    },
    {
      name: "Luut Iddrisu",
      role: "Frontend Developer",
      bio: "Where others see problems, Luut sees canvases. Her artistic vision transforms complex concepts into beautiful, intuitive experiences.",
  avatar: cyber,
      socialLinks: {
        linkedin: "https://linkedin.com/in/luut-iddrisu",
        github: "https://github.com/luut-iddrisu",
        facebook: "https://facebook.com/luut.iddrisu"
      }
    },
    {
      name: "Waliu Yelabeyiani Bukari",
      role: "Frontend Devoloper",
      bio: "The mastermind behind our technical foundation. Waliu builds systems that are not just functional, but elegant and scalable.",
  avatar: consistency,
      socialLinks: {
        linkedin: "https://linkedin.com/in/waliu-bukari",
        github: "https://github.com/waliu-bukari",
        facebook: "https://facebook.com/waliu.bukari"
      }
    },
    {
      name: "Kasim Major Sulemana",
      role: "Civic Tech, Cybersecurity(GRC)",
      bio: "Kasim sees patterns others miss and connects dots across industries. His strategic thinking guides us toward meaningful impact.",
  avatar: kasim,
      socialLinks: {
        linkedin: "https://linkedin.com/in/kasim-sulemana",
        github: "https://github.com/kasim-sulemana",
        facebook: "https://facebook.com/kasim.sulemana"
      }
    },
    {
      name: "Peter Bedzra",
      role: "Web Developer",
      bio: "The spark that ignites breakthrough moments. Peter's curiosity and experimental mindset push us beyond conventional boundaries.",
  avatar: peter,
      socialLinks: {
        linkedin: "https://linkedin.com/in/peter-bedzra",
        github: "https://github.com/peter-bedzra",
        facebook: "https://facebook.com/peter.bedzra"
      }
    },
    {
      name: "Wudana Jamaldeen",
      role: "Data Scientist",
      bio: "Wudana understands that great ideas need great communities. He creates connections that amplify our collective impact.",
  avatar: wudana,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/jamaldeen-wudana-bbbb65359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/MNCJaydeen1",
        facebook: "https://x.com/JayDeen636665?t=g1-WoMZNfnUSIiTQLGjgiQ&s=09"
      }
    },
    {
      name: "Aaron",
      role: "Web Developer",
      bio: "Aaron ensures every project creates real value. His focus on measurable outcomes keeps us grounded in purpose.",
  avatar: Aaron,
      socialLinks: {
        linkedin: "https://linkedin.com/in/aaron-dev",
        github: "https://github.com/aaron-dev",
        facebook: "https://facebook.com/aaron.dev"
      }
    },
    {
      name: "Tutu Miccah Godwin",
      role: "Innovation Strategist",
      bio: "Anticipates tomorrow's challenges today. This forward-thinking approach helps us stay ahead of the curve.",
  avatar: tutu,
      socialLinks: {
        linkedin: "https://linkedin.com/in/future-thinker",
        github: "https://github.com/future-thinker",
        facebook: "https://facebook.com/future.thinker"
      }
    }
  ]

  return (
    <div className="team">
      <div className="team-hero">
        <div className="team-intro">
          <h1>Meet the Minds Behind 8nova</h1>
          <p className="team-subtitle">
            Eight brilliant individuals, each bringing unique perspectives and expertise 
            to create something greater than the sum of its parts.
          </p>
        </div>
      </div>

      <div className="team-grid-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-avatar">
                  <LazyImage src={member.avatar} alt={member.name} className="member-avatar-img" />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-social">
                    <a 
                      href={member.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link linkedin"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href={member.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link github"
                      aria-label={`${member.name} GitHub`}
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={member.socialLinks.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link facebook"
                      aria-label={`${member.name} Facebook`}
                    >
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
