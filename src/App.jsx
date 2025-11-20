import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
        <Portfolio />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Aurora Visuals. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
