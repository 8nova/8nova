import { useState } from 'react'
import { FaEnvelope, FaGlobe, FaBolt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { emailConfig } from '../config/emailConfig'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Check if EmailJS is properly configured
      if (emailConfig.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
        // Fallback to mailto if EmailJS is not configured
        const subject = `Message from ${formData.name}`
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        const mailtoLink = `mailto:${emailConfig.toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailtoLink)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        return
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: emailConfig.toEmail
      }

      // Send email using EmailJS
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams, emailConfig.publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          Get in Touch
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 4vw, 1.3rem)', 
          color: 'rgba(255,255,255,0.9)', 
          maxWidth: '700px', 
          margin: '0 auto',
          padding: '0 10px'
        }}>
          Have an idea? Want to collaborate? Or just want to say hello? 
          We'd love to hear from you. Drop us a message and let's start 
          a conversation.
        </p>
      </div>

      <div style={{padding: 'clamp(30px, 8vw, 60px) 20px', background: '#1f1f3b'}}>
        <div style={{
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'clamp(2rem, 6vw, 4rem)',
          padding: '0 10px'
        }}>
          <div style={{padding: '2rem'}}>
            <h2 style={{fontSize: '2rem', fontWeight: '600', color: 'white', marginBottom: '1.5rem', fontFamily: 'Space Grotesk, sans-serif'}}>
              Let's Connect
            </h2>
            <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: '1.7', marginBottom: '2.5rem', fontSize: '1.1rem'}}>
              We're always excited to hear about new projects, innovative ideas, 
              and potential collaborations. Whether you're a fellow innovator, 
              a potential partner, or someone with a great idea, we want to hear from you.
            </p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <FaEnvelope style={{fontSize: '1.5rem', color: '#4db5ff'}} />
                <span style={{color: 'rgba(255,255,255,0.9)'}}>8nova555@gmail.com</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <FaGlobe style={{fontSize: '1.5rem', color: '#4db5ff'}} />
                <span style={{color: 'rgba(255,255,255,0.9)'}}>Global Collective</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <FaBolt style={{fontSize: '1.5rem', color: '#4db5ff'}} />
                <span style={{color: 'rgba(255,255,255,0.9)'}}>Always Innovating</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(77,181,255,0.2)', borderRadius: '15px', padding: '2.5rem'}}>
            <div style={{marginBottom: '2rem'}}>
              <label style={{display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: '500', color: 'white', marginBottom: '0.75rem', fontSize: '1rem'}}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={{width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(77,181,255,0.3)', borderRadius: '8px', color: 'white', fontSize: '1rem', fontFamily: 'Inter, sans-serif'}}
              />
            </div>

            <div style={{marginBottom: '2rem'}}>
              <label style={{display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: '500', color: 'white', marginBottom: '0.75rem', fontSize: '1rem'}}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                style={{width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(77,181,255,0.3)', borderRadius: '8px', color: 'white', fontSize: '1rem', fontFamily: 'Inter, sans-serif'}}
              />
            </div>

            <div style={{marginBottom: '2rem'}}>
              <label style={{display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: '500', color: 'white', marginBottom: '0.75rem', fontSize: '1rem'}}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your idea, project, or just say hello..."
                style={{width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(77,181,255,0.3)', borderRadius: '8px', color: 'white', fontSize: '1rem', fontFamily: 'Inter, sans-serif', resize: 'vertical'}}
              ></textarea>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1.5rem',
                color: '#22c55e',
                fontSize: '0.95rem',
                textAlign: 'center'
              }}>
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1.5rem',
                color: '#ef4444',
                fontSize: '0.95rem',
                textAlign: 'center'
              }}>
                ❌ Failed to send message. Please try again or email us directly.
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                width: '100%', 
                background: isSubmitting ? '#6b7280' : '#4db5ff', 
                color: 'white', 
                padding: '1.25rem 2rem', 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                fontFamily: 'Inter, sans-serif', 
                border: 'none', 
                borderRadius: '8px', 
                cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                transition: 'all 0.3s ease',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
