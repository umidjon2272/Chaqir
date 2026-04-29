import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/Home'
import AboutPage from './pages/About/About'
import MastersPage from './pages/Masters/Masters'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/masters" element={<MastersPage />} />
      </Routes>
      <Footer />
    </>
  )
}
