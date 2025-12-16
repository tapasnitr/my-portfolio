import Hero from '@/components/Herosection'
import React from 'react'
import Projects from '@/components/Project'
import Skills from '@/components/Skills'
import FreelanceServices from '@/components/service'
import Footer from '@/components/Footer'
import ContactSection from '@/components/Contact'
function page() {
  return (
    <div>
      <Hero />
      <FreelanceServices />
      <Projects />
      <Skills />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  )
}

export default page