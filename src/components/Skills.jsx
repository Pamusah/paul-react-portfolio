// const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript', 'Git', 'REST APIs', 'Responsive Design']

// export default function Skills() {
//   return (
//     <section id="skills" className="px-5 py-24 sm:px-8">
//       <div className="mx-auto max-w-6xl">
//         <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">My toolkit</p>
//         <h2 className="font-['Space_Grotesk'] text-4xl font-bold sm:text-5xl">Technologies I work with.</h2>
//         <p className="mt-4 max-w-xl leading-7 text-zinc-400">Tools I use to build modern web applications.</p>
//         <div className="mt-10 flex flex-wrap gap-3">
//           {skills.map(skill => <span key={skill} className="rounded-xl border border-white/10 bg-white/3 px-5 py-3 text-sm text-zinc-300 transition hover:border-lime-400/40 hover:text-lime-400">{skill}</span>)}
//         </div>
//       </div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiMongodb,
  SiPostman,
  SiFastapi,
} from 'react-icons/si'
import { Code2, Database, Wrench } from 'lucide-react'

const categories = [
  {
    title: 'Frontend Development',
    description: 'Building modern, responsive and interactive interfaces.',
    icon: Code2,
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
      { name: 'React', icon: FaReact, color: 'text-sky-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Working with server-side technologies and data.',
    icon: Database,
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
      { name: 'REST APIs', icon: Code2, color: 'text-lime-400' },
    ],
  },
  {
    title: 'Tools & Workflow',
    description: 'Tools that support development and collaboration.',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'GitHub', icon: FaGithub, color: 'text-zinc-200' },
      { name: 'Vite', icon: SiVite, color: 'text-violet-400' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
    ],
  },
]

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/5 px-5 py-24 sm:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-lime-400/5 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            My toolkit
          </p>

          <h2 className="font-['Space_Grotesk'] text-4xl font-bold sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
            A collection of technologies and tools I use to build,
            develop and improve modern web applications.
          </p>
        </motion.div>

        {/* Core stack highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-lime-400/20 bg-lime-400/4 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
                Core technology
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                My frontend stack
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                My primary focus is building responsive web applications
                with React and modern JavaScript.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['React', 'JavaScript', 'Tailwind CSS'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology categories */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition duration-300 hover:-translate-y-2 hover:border-lime-400/30 hover:bg-white/4"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime-400/10 text-lime-400">
                    <CategoryIcon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-6 text-zinc-400">
                  {category.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.04, y: -3 }}
                        className="flex items-center gap-2 rounded-xl border border-white/5 bg-black/20 px-3 py-3 transition hover:border-lime-400/20"
                      >
                        <SkillIcon
                          size={20}
                          className={`shrink-0 ${skill.color}`}
                        />

                        <span className="text-xs font-medium text-zinc-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Closing note */}
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-zinc-500"
        >
          Always learning. Always building. Always improving.
        </motion.p>

      </div>
    </section>
  )
}
