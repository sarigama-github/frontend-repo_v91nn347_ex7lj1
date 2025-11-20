import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.15),transparent)]"></div>
      <div className="relative max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s create together</h2>
          <p className="mt-3 text-slate-300">Tell me about your project, timeline, and budget.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input required placeholder="Name" className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <input placeholder="Subject" className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea required rows="5" placeholder="Project details" className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition w-full md:w-auto">Send inquiry</button>
          {status && <p className="text-emerald-400 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
