// import { Mail } from 'lucide-react'

// export default function Contact() {
//   return (
//     <section id="contact" className="px-5 py-28 sm:px-8">
//       <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-linear-to-br from-zinc-900 to-zinc-950 px-6 py-14 text-center sm:px-12 sm:py-20">
//         <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">Get in touch</p>
//         <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight sm:text-6xl">Have a project in mind?<br /><span className="text-lime-400">Let's talk.</span></h2>
//         <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">I'm open to frontend opportunities, collaborations, and interesting ideas.</p>
//         <a href="mailto:YOUR_EMAIL@example.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-lime-300"><Mail size={18} /> Send me an email</a>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  Code2,
  Sparkles,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400">
            <Sparkles size={18} />
          </span>

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            What's next?
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_0.7fr]">

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-['Space_Grotesk'] text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl"
            >
              Have an idea?

              <br />

              <span className="text-zinc-600">
                Let's make it
              </span>

              <br />

              <span className="text-lime-400">
                happen.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
            >
              Great ideas deserve great execution. I'm interested in
              meaningful projects, frontend opportunities, collaborations,
              and connecting with people who love building useful things.
            </motion.p>

            {/* Email button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              href="mailto:musahpaulafriyie@gmail.com?subject=Let's%20Work%20Together"
              className="group mt-10 inline-flex items-center gap-4 rounded-full bg-lime-400 px-7 py-4 font-semibold text-zinc-950 transition duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_10px_40px_rgba(163,230,53,0.2)]"
            >
              <Mail size={19} />

              Let's work together

              <ArrowUpRight
                size={19}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-7 backdrop-blur-xl sm:p-9"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
                  <Code2 size={23} />
                </div>

                <span className="rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1.5 text-xs text-lime-400">
                  Open to opportunities
                </span>
              </div>

              <h3 className="mt-9 font-['Space_Grotesk'] text-2xl font-bold">
                Let's connect.
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Whether you have an opportunity, a project idea, or simply
                want to connect, my inbox is open.
              </p>

              <div className="my-8 h-px bg-white/10" />

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="group flex items-center justify-between gap-3 py-3 text-sm text-zinc-300 transition hover:text-lime-400"
              >
                <span className="flex items-center gap-3">
                  <Mail size={18} />
                  Send an email
                </span>

                <ArrowUpRight
                  size={17}
                  className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://github.com/Pamusah"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 border-t border-white/10 py-4 text-sm text-zinc-300 transition hover:text-lime-400"
              >
                <span className="flex items-center gap-3">
                  <FaGithub size={18} />
                  Explore my GitHub
                </span>

                <ArrowUpRight
                  size={17}
                  className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 border-t border-white/10 pt-8"
        >
          <p className="text-sm text-zinc-500">
            Good ideas. Thoughtful design. Meaningful code.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
