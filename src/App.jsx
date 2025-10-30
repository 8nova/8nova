import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Assistant from './components/Assistant'
import Home from './pages/Home'
import Team from './pages/Team'
import Mission from './pages/Mission'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (
    // Use HashRouter to avoid server-side 404s on page refresh for client-side routes.
    // This keeps routing working even when the server isn't configured to rewrite
    // requests to `index.html` (useful for static hosts).
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Assistant />
      </div>
    </Router>
  )
}

export default App
