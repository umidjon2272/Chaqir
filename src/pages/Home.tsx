import React from 'react'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'
import Contact from '../components/Contact/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Contact />
    </main>
  )
}
