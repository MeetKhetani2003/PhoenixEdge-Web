import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutTemplate from '@/components/Templates/LayoutTemplate'
import HomePage from '@/components/Pages/HomePage'
import TeamPage from '@/components/Pages/TeamPage'
import ServicePage from '@/components/Pages/ServicePage'
import ContactPage from '@/components/Pages/ContactPage'
import AboutPage from '@/components/Pages/AboutPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutTemplate/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/service" element={<ServicePage/>} />
          <Route path="/team" element={<TeamPage/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App