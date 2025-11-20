import React from 'react'
import { Menu, Camera } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 md:px-6 py-3">
          <div className="flex items-center gap-2 text-white">
            <Camera className="w-6 h-6" />
            <span className="font-semibold tracking-tight">Aurora Visuals</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/80">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
