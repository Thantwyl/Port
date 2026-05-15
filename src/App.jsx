import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Contactpage from './pages/Contactpage.jsx'
import { usePageTitle } from './hooks/usePageTitle.js'

function AppContent() {
  usePageTitle()

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </MainLayout>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
