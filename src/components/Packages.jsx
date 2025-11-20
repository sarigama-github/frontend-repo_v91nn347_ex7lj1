import React from 'react'
import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Essential',
    price: 499,
    period: 'per session',
    highlights: ['Up to 2 hours', '30 edited photos', '1-minute highlight reel', 'Delivery in 3 days'],
    badge: 'Best for Starters',
  },
  {
    name: 'Professional',
    price: 1299,
    period: 'per project',
    highlights: ['Half-day coverage', '80 edited photos', '2–3 minute film', 'Drone add-on available'],
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    price: 2499,
    period: 'per project',
    highlights: ['Full-day coverage', 'Unlimited photos', '5–7 minute film', 'On-set audio + lighting kit'],
    badge: 'For Big Shoots',
  },
]

const Packages = () => {
  return (
    <section id="packages" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_90%_10%,rgba(14,165,233,0.15),transparent)]"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Packages</h2>
          <p className="mt-3 text-slate-300">Transparent pricing. Flexible add-ons. Clear deliverables.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`relative rounded-2xl border p-6 backdrop-blur-xl ${pkg.featured ? 'border-blue-400/40 bg-blue-500/10 shadow-[0_0_60px_rgba(59,130,246,0.2)]' : 'border-slate-800/80 bg-slate-900/40'}`}>
              {pkg.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-white/10 text-white text-xs px-3 py-1 border border-white/20">{pkg.badge}</span>
              )}
              <h3 className="text-white text-xl font-medium">{pkg.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white">${pkg.price}</span>
                <span className="text-slate-300">{pkg.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-slate-200">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-sm">{h}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-medium transition ${pkg.featured ? 'bg-white text-slate-900 hover:opacity-90' : 'border border-white/20 text-white hover:bg-white/10'}`}>Book this</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
