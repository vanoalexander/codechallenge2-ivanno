import React from "react"
import Hero from './components/Hero'
import OurService from './components/OurService'
import Testimonials from "./components/Testimonials"
import Overview from "./components/Overview"
import Contact from "./components/Contact"


export default function Home() {
  return (
    <main>
      <Hero />
      <OurService />
      <Testimonials />
      <Overview />
      <Contact />
    </main>
  )
}
