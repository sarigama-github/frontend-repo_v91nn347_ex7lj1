import React from 'react'
import { Aperture, Film, Edit3, Mic2 } from 'lucide-react'

const services = [
  { icon: Aperture, title: 'Photography', desc: 'Lifestyle, products, portraits, events — crisp, color-true, and publication-ready.' },
  { icon: Film, title: 'Cinematography', desc: 'Story-driven films with dynamic movement, tasteful lighting, and clean audio.' },
  { icon: Edit3, title: 'Post-Production', desc: 'Professional color grading, sound design, and polished edits for every platform.' },
  { icon: Mic2, title: 'On-Set Audio', desc: 'Clean capture with lavs/shotgun mics, delivering broadcast-quality sound.' },
]

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_10%_10%,rgba(59,130,246,0.15),transparent)]"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Services</h2>
          <p className="mt-3 text-slate-300">End-to-end production tailored to your story and budget.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
