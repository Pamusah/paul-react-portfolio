import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-linear-to-br from-zinc-900 to-zinc-950 px-6 py-14 text-center sm:px-12 sm:py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">Get in touch</p>
        <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight sm:text-6xl">Have a project in mind?<br /><span className="text-lime-400">Let's talk.</span></h2>
        <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">I'm open to frontend opportunities, collaborations, and interesting ideas.</p>
        <a href="mailto:YOUR_EMAIL@example.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-lime-300"><Mail size={18} /> Send me an email</a>
      </div>
    </section>
  )
}