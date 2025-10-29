import './Team.css'
import selassie from "../assets/profile.jpg"
import cyber from "../assets/cyber.jpg"
import consistency from "../assets/consistency.jpg"
import kasim from "../assets/kasim.jpg"
import peter from "../assets/peter.jpg"
import wudana from "../assets/wudana.jpg"
import Aaron from "../assets/Aaron.jpg"
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
import tutu from "../assets/tutu.jpg"

const Team = () => {
  const teamMembers = [
    {
      name: "Zakaria Sisu",
      role: "Software Developer",
      bio: "Dreams in code and thinks in possibilities. Zakaria bridges the gap between imagination and reality, turning wild ideas into tangible innovations.",
      avatar: <img src={selassie} alt="Zakaria Sisu" className="member-avatar" />,
      socialLinks: {
        linkedin: "https://linkedin.com/in/zakaria-sisu",
        github: "https://github.com/Zakariasisu5",
        facebook: "https://facebook.com/zakaria.sisu"
      }
    },
    {
      name: "Luut Iddrisu",
      role: "Frontend Developer",
      bio: "Where others see problems, Luut sees canvases. Her artistic vision transforms complex concepts into beautiful, intuitive experiences.",
      avatar: <img src={cyber} alt="Luut Iddrisu" className="member-avatar" />,
      socialLinks: {
        linkedin: "https://linkedin.com/in/luut-iddrisu",
        github: "https://github.com/luut-iddrisu",
        facebook: "https://facebook.com/luut.iddrisu"
      }
    },
    {
      name: "Waliu Yelabeyiani Bukari",
      role: "Graphic Designer",
      bio: "The mastermind behind our technical foundation. Waliu builds systems that are not just functional, but elegant and scalable.",
      avatar: <img src={consistency} alt="Waliu Bukari" className="member-avatar" />,
      socialLinks: {
        linkedin: "https://linkedin.com/in/waliu-bukari",
        github: "https://github.com/waliu-bukari",
        facebook: "https://facebook.com/waliu.bukari"
      }
    },
    {
      name: "Kasim Major Sulemana",
      role: "Cybersecurity Expert",
      bio: "Kasim sees patterns others miss and connects dots across industries. His strategic thinking guides us toward meaningful impact.",
      avatar: <img src={kasim} alt="Kasim Sulemana" className="member-avatar" />,
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
      avatar: <img src={peter} alt="Peter Bedzra" className="member-avatar" />,
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
      avatar: <img src={wudana} alt="Wudana Jamaldeen" className="member-avatar" />,
      socialLinks: {
        linkedin: "https://linkedin.com/in/wudana-jamaldeen",
        github: "https://github.com/wudana-jamaldeen",
        facebook: "https://facebook.com/wudana.jamaldeen"
      }
    },
    {
      name: "Aaron",
      role: "Web Developer",
      bio: "Aaron ensures every project creates real value. His focus on measurable outcomes keeps us grounded in purpose.",
      avatar: <img src={Aaron} alt="Aaron" className="member-avatar" />,
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
      avatar: <img src={tutu} alt="tutu" className="member-avatar" />,
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
                  {member.avatar}
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
