import Hero from '@/components/Herosection'
import React from 'react'
import Projects from '@/components/Project'
import Skills from '@/components/Skills'
function page() {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default page