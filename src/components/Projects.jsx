import { motion } from 'framer-motion'
import { ArrowUpRight, Code2 } from 'lucide-react'
const projects = [
  {
    number: '01',
    title: 'SmartTestHub',
    category: 'Smart Contract Testing',
    description:
      'A platform designed to simplify smart contract testing across multiple blockchain ecosystems.',
    stack: ['React', 'Tailwind CSS', 'FastAPI'],
    color: 'from-lime-400/20 to-emerald-500/5',
    symbol: '01',
    github: 'https://github.com/Pamusah/Final-Year',
    demo: 'https://smarttest-hub.vercel.app',
  },
  {
    number: '02',
    title: 'Sound Recorder',
    category: 'Web Application',
    description:
      'A web application for recording audio, managing recordings, and exploring browser-based media features.',
    stack: ['React', 'Node.js', 'MongoDB'],
    color: 'from-sky-400/20 to-blue-500/5',
    symbol: '02',
     github: 'https://github.com/Pamusah/Final-Year',
    demo: 'https://my-project-seven-lilac.vercel.app/',
  },
  {
    number: '03',
    title: 'Birthday Automation',
    category: 'Automation',
    description:
      'An application concept for automating birthday workflows using Google APIs and SMS notifications.',
    stack: ['React', 'Node.js', 'Google APIs'],
    color: 'from-violet-400/20 to-fuchsia-500/5',
    symbol: '03',
     github: 'https://github.com/Pamusah/Final-Year',
    demo: 'https://smarttest-hub.vercel.app',
  },
]

export default function Projects() {
 return (
    <section id="projects" className="border-y border-white/5 bg-white/1.5 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
  Selected work
</p>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold sm:text-5xl">
              Projects I've built.
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-zinc-400">
            A selection of projects showcasing my interest in useful,
            real-world software.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-lime-400/30"
            >
              <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br ${project.color}`}>
                <span className="font-['Space_Grotesk'] text-7xl font-bold text-white/10 transition duration-300 group-hover:scale-110">
                  {project.symbol}
                </span>
                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">
                  {project.category}
                </span>
                <Code2 className="absolute bottom-5 right-5 text-white/50" size={28} />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-zinc-600">{project.number}</span>
                </div>

                <p className="mt-3 min-h-20 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-sm">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="text-zinc-300 transition hover:text-lime-400"
  >
    GitHub ↗
  </a>

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-lime-400 transition hover:text-lime-300"
    >
      Live Demo ↗
    </a>
  )}
</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
