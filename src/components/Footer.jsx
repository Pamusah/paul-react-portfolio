// export default function Footer() {
//   return (
//     <footer className="border-t border-white/5 px-5 py-7 sm:px-8">
//       <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
//         <p>© {new Date().getFullYear()} Paul. Built with React.</p>
//         <a href="#home" className="transition hover:text-lime-400">Back to top ↑</a>
//       </div>
//     </footer>
//   )
// }


import { motion } from 'framer-motion'
import { ArrowUp, ArrowUpRight, Heart } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-5 pb-8 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight"
            >
              Paul<span className="text-lime-400">.</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-500">
              Frontend Developer passionate about building modern,
              responsive and meaningful digital experiences.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/Pamusah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-lime-400/40 hover:bg-lime-400/10 hover:text-lime-400"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/musah-paul-afriyie-080467241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-lime-400/40 hover:bg-lime-400/10 hover:text-lime-400"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Explore
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-zinc-500 transition hover:translate-x-1 hover:text-lime-400"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Let's connect
            </h3>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
              </span>

              <span className="text-sm text-zinc-400">
                Open to opportunities
              </span>
            </div>

            <a
              href="mailto:musahpaulafriyie@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-lime-400 transition hover:text-lime-300"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">

          <p className="flex flex-wrap items-center justify-center gap-1 text-xs text-zinc-500">
            © {new Date().getFullYear()} Paul Afriyie Musah.
            Crafted with React and <Heart size={13} className="mx-1 text-lime-400" />.
          </p>

          <motion.a
            href="#home"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs text-zinc-400 transition hover:border-lime-400/40 hover:text-lime-400"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
