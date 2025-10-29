import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Assistant.css';

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm the 8nova assistant. I can tell you about our mission, vision, team members, services, projects, technologies, and how to collaborate with us. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Generate assistant response
    setTimeout(() => {
      const assistantResponse = generateResponse(inputValue.toLowerCase());
      const assistantMessage = {
        id: Date.now() + 1,
        text: assistantResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 500);
  };

  const generateResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Mission & Vision
    if (lowerQuestion.includes('mission') || lowerQuestion.includes('purpose')) {
      return "Our mission is to build human-first platforms that empower users and teams. We believe technology should enhance human potential, not replace it. We create solutions that are intuitive, accessible, and meaningful.";
    }
    
    if (lowerQuestion.includes('vision') || lowerQuestion.includes('future')) {
      return "Our vision is to become a catalyst for accessible, impactful technology. We envision a world where innovative solutions bridge gaps between imagination and reality, creating extraordinary outcomes that shape tomorrow.";
    }
    
    // Team Information
    if (lowerQuestion.includes('team') || lowerQuestion.includes('who') || lowerQuestion.includes('people')) {
      return "We're 8 brilliant innovators united by a shared purpose: Zakaria Sisu (Software Developer), Luut Iddrisu (Frontend Developer), Waliu Yelabeyiani Bukari (Graphic Designer), Kasim Major Sulemana (Cybersecurity), Peter Bedzra (Web Developer), Wudana Jamaldeen (Data Scientist), Aaron (Web Developer), and our Future Thinker. Each brings unique expertise to create something greater than the sum of its parts.";
    }
    
    // Services
    if (lowerQuestion.includes('service') || lowerQuestion.includes('what do you do') || lowerQuestion.includes('offer')) {
      return "We offer comprehensive technology solutions: Web Development (custom websites and applications), Mobile App Development (iOS and Android), Database Design (efficient architecture), Cloud Solutions (infrastructure setup), DevOps & Deployment (automated pipelines), and System Integration (unified workflows).";
    }
    
    if (lowerQuestion.includes('web development') || lowerQuestion.includes('website')) {
      return "We specialize in custom websites and web applications built with modern technologies and best practices. Our web development services include responsive design, performance optimization, and user experience enhancement.";
    }
    
    if (lowerQuestion.includes('mobile') || lowerQuestion.includes('app')) {
      return "We develop native and cross-platform mobile applications for iOS and Android devices. Our mobile solutions are designed for optimal performance, user engagement, and seamless integration with existing systems.";
    }
    
    if (lowerQuestion.includes('cloud') || lowerQuestion.includes('infrastructure')) {
      return "We provide cloud infrastructure setup, migration, and management for modern businesses. Our cloud solutions ensure scalability, security, and cost-effectiveness for your digital transformation needs.";
    }
    
    // Projects
    if (lowerQuestion.includes('project') || lowerQuestion.includes('work') || lowerQuestion.includes('portfolio')) {
      return "We've completed projects like EduTech Platform (learning management system), HealthCare Connect (patient management), EcoTrack Mobile App (environmental monitoring), FinanceFlow Dashboard (financial analytics), SmartCity IoT Network (infrastructure management), and Artisan Marketplace (e-commerce platform).";
    }
    
    if (lowerQuestion.includes('completed') || lowerQuestion.includes('finished')) {
      return "Our completed projects include EduTech Platform with real-time collaboration, HealthCare Connect for patient-provider communication, EcoTrack Mobile App for carbon footprint tracking, FinanceFlow Dashboard with automated reporting, SmartCity IoT Network for infrastructure monitoring, and Artisan Marketplace connecting local artisans globally.";
    }
    
    if (lowerQuestion.includes('ongoing') || lowerQuestion.includes('current') || lowerQuestion.includes('developing')) {
      return "We're currently developing: AI-Powered Analytics Suite (machine learning algorithms), Blockchain Voting System (secure voting platform), Virtual Reality Workspace (immersive collaboration), and GreenTech Monitoring (IoT environmental sensors).";
    }
    
    if (lowerQuestion.includes('upcoming') || lowerQuestion.includes('future project')) {
      return "Our upcoming projects include Quantum Computing Interface, Neural Network Platform for non-coders, SpaceTech Solutions for space exploration, Biotech Data Platform for pharmaceutical research, and Smart Agriculture IoT for precision farming.";
    }
    
    // Team Members
    if (lowerQuestion.includes('zakaria') || lowerQuestion.includes('sisu')) {
      return "Zakaria Sisu is our Software Developer who dreams in code and thinks in possibilities. He bridges the gap between imagination and reality, turning wild ideas into tangible innovations.";
    }
    
    if (lowerQuestion.includes('luut') || lowerQuestion.includes('iddrisu')) {
      return "Luut Iddrisu is our Frontend Developer with artistic vision. She transforms complex concepts into beautiful, intuitive experiences, seeing canvases where others see problems.";
    }
    
    if (lowerQuestion.includes('waliu') || lowerQuestion.includes('bukari')) {
      return "Waliu Yelabeyiani Bukari is our Graphic Designer and the mastermind behind our technical foundation. He builds systems that are not just functional, but elegant and scalable.";
    }
    
    if (lowerQuestion.includes('kasim') || lowerQuestion.includes('sulemana')) {
      return "Kasim Major Sulemana specializes in Cybersecurity. He sees patterns others miss and connects dots across industries, with strategic thinking that guides us toward meaningful impact.";
    }
    
    if (lowerQuestion.includes('peter') || lowerQuestion.includes('bedzra')) {
      return "Peter Bedzra is our Web Developer and the spark that ignites breakthrough moments. His curiosity and experimental mindset push us beyond conventional boundaries.";
    }
    
    if (lowerQuestion.includes('wudana') || lowerQuestion.includes('jamaldeen')) {
      return "Wudana Jamaldeen is our Data Scientist who understands that great ideas need great communities. He creates connections that amplify our collective impact.";
    }
    
    if (lowerQuestion.includes('aaron')) {
      return "Aaron is our Web Developer who ensures every project creates real value. His focus on measurable outcomes keeps us grounded in purpose.";
    }
    
    // Technology & Skills
    if (lowerQuestion.includes('technology') || lowerQuestion.includes('tech') || lowerQuestion.includes('stack')) {
      return "We work with modern technologies including React, Node.js, Python, JavaScript, cloud platforms (AWS, Azure), mobile frameworks (React Native, Flutter), databases (MongoDB, PostgreSQL), and emerging technologies like AI/ML, blockchain, and IoT.";
    }
    
    if (lowerQuestion.includes('ai') || lowerQuestion.includes('artificial intelligence') || lowerQuestion.includes('machine learning')) {
      return "We're developing AI-powered solutions including machine learning algorithms for predictive analytics, neural network platforms for non-coders, and AI interfaces for complex problem-solving. Our AI projects focus on practical applications that enhance human capabilities.";
    }
    
    if (lowerQuestion.includes('blockchain') || lowerQuestion.includes('crypto')) {
      return "We're working on blockchain solutions including a secure voting system using blockchain technology for enhanced security and transparency. Our blockchain projects prioritize trust and verifiability.";
    }
    
    if (lowerQuestion.includes('iot') || lowerQuestion.includes('internet of things')) {
      return "We develop IoT solutions for smart city infrastructure management, environmental monitoring, and precision agriculture. Our IoT projects connect physical devices to create intelligent, data-driven systems.";
    }
    
    // Contact & Collaboration
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('get in touch')) {
      return "You can reach us through our Contact page or collaborate with us on projects. We believe in building together - whether you're a student, mentor, or organization, there's a place for you in the 8nova journey.";
    }
    
    if (lowerQuestion.includes('collaborate') || lowerQuestion.includes('work together') || lowerQuestion.includes('partnership')) {
      return "We believe in building together! Whether you're a student, mentor, or organization, there's a place for you in the 8nova journey. We welcome collaborations that amplify our collective impact and create meaningful solutions.";
    }
    
    if (lowerQuestion.includes('hire') || lowerQuestion.includes('work with') || lowerQuestion.includes('project')) {
      return "We'd love to work with you! We offer comprehensive technology solutions including web development, mobile apps, cloud solutions, and system integration. Visit our Portfolio page to see our completed projects and contact us to discuss your needs.";
    }
    
    // Company Information
    if (lowerQuestion.includes('company') || lowerQuestion.includes('about') || lowerQuestion.includes('8nova')) {
      return "8nova is a collective of 8 brilliant minds united by a shared vision to push boundaries, challenge conventions, and create extraordinary solutions that shape tomorrow. We're an innovation collective focused on human-first technology.";
    }
    
    if (lowerQuestion.includes('innovation') || lowerQuestion.includes('creative')) {
      return "Innovation is at our core. We think differently, act boldly, and create solutions that matter. Every challenge is an opportunity to push the boundaries of what's possible, combining creativity with technical excellence.";
    }
    
    // Values & Philosophy
    if (lowerQuestion.includes('value') || lowerQuestion.includes('believe') || lowerQuestion.includes('philosophy')) {
      return "Our core values are Innovation (thinking differently and acting boldly), Collaboration (8 minds working as one), and Impact (building the future through meaningful change). We measure success by the positive impact we create in the world.";
    }
    
    // Default response for unrecognized questions
    return "That's an interesting question! I can help you learn about our mission, vision, team members, services, projects, technologies, and how to collaborate with us. Feel free to ask about any specific aspect of 8nova!";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="assistant-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="assistant-chat-window">
          <div className="assistant-header">
            <div className="assistant-header-content">
              <FaRobot className="assistant-icon" />
              <h3 className="assistant-title">8novo Assistant</h3>
            </div>
            <button 
              className="assistant-close-btn"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="assistant-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`assistant-message ${message.isUser ? 'user-message' : 'assistant-message-content'}`}
              >
                <div className="message-bubble">
                  <p className="message-text">{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="assistant-input-container">
            <div className="assistant-input-row">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="assistant-input"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="assistant-send-btn"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        className={`assistant-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close assistant' : 'Open assistant'}
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>
    </div>
  );
};

export default Assistant;
