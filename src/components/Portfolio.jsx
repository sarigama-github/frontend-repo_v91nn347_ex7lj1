import React from 'react'

const Portfolio = () => {
  const items = [
    { title: 'Brand Campaign', tag: 'Film', img: 'https://images.unsplash.com/photo-1526178612557-2b98c3ccec2d?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Product Shoot', tag: 'Photo', img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Event Recap', tag: 'Film', img: 'https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Portrait Series', tag: 'Photo', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Travel Reel', tag: 'Film', img: 'https://images.unsplash.com/photo-1520978782301-8112a4b81e52?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Editorial', tag: 'Photo', img: 'https://images.unsplash.com/photo-1548286978-f218023f8a9b?q=80&w=1400&auto=format&fit=crop' },
  ]

  return (
    <section id="portfolio" className="relative py-24 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected Work</h2>
          <p className="mt-3 text-slate-300">A mix of campaigns, commercial, and personal projects.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-xs text-slate-400">{item.tag}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white border border-white/10">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
