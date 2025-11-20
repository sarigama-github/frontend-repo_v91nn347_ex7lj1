import React from 'react'
import Spline from '@splinetool/react-spline'
import { Camera, PlayCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60"></div>

      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md text-white/90 mb-6">
            <Camera className="w-4 h-4" />
            <span className="text-xs tracking-wide uppercase">Photography • Videography • Editing</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            Visual stories that move people
          </h1>
          <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-slate-200/90">
            I craft cinematic films and striking imagery for brands, events, and creators. From concept to final cut, every frame is intentional.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#packages" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition">
              View Packages
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white px-6 py-3 font-medium backdrop-blur-md hover:bg-white/15 transition">
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Reel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
