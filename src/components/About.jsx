
// export default function About() {
//   return (
//     <section id="about" className="border-t border-white/5 px-5 py-24 sm:px-8">
//       <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
//         <div>
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">About me</p>
//           <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight sm:text-5xl">Curious mind.<br /><span className="text-zinc-500">Purposeful code.</span></h2>
//         </div>
//         <div className="space-y-5 text-base leading-8 text-zinc-400">
//           <p>I'm a frontend developer who enjoys solving problems through technology and creating web experiences that are useful and easy to use.</p>
//           <p>I focus on reusable React components, responsive layouts, and connecting frontend applications to backend services.</p>
//           <p>My goal is to keep learning, collaborate with great teams, and build products that make a meaningful difference.</p>
//         </div>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import {
  Code2,
  MonitorSmartphone,
  TrendingUp,
  Lightbulb,
  ArrowUpRight,
} from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Clean & Maintainable Code',
    description:
      'Building reusable components and structured code that is easier to maintain and scale.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Experiences',
    description:
      'Creating interfaces that deliver a consistent experience across desktops, tablets and mobile devices.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description:
      'Always exploring new technologies, improving my skills and embracing new challenges.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 px-5 py-24 sm:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-lime-400/5 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
              About me
            </p>

            <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Curious mind.
              <br />
              <span className="text-zinc-500">
                Purposeful code.
              </span>
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 85 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-7 h-1 rounded-full bg-lime-400"
            />
          </motion.div>

          {/* About description */}
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg"
          >
            <motion.p variants={reveal}>
              I'm Paul, a frontend developer passionate about solving
              problems through technology and building digital experiences
              that are both functional and enjoyable to use.
            </motion.p>

            <motion.p variants={reveal}>
              My work focuses on React, JavaScript and modern frontend
              technologies. I enjoy developing reusable components,
              creating responsive interfaces and integrating frontend
              applications with backend services.
            </motion.p>

            <motion.p variants={reveal}>
              Beyond writing code, I value continuous learning,
              collaboration and attention to detail. I'm always looking
              for opportunities to improve my craft and contribute to
              products that solve real-world problems.
            </motion.p>

            <motion.a
              variants={reveal}
              href="#projects"
              whileHover={{ x: 6 }}
              className="inline-flex items-center gap-2 font-semibold text-lime-400 transition hover:text-lime-300"
            >
              Explore my projects
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Developer highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                variants={reveal}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lime-400 transition duration-300 group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-zinc-950">
                  <Icon size={23} />
                </div>

                <p className="mb-2 text-xs font-semibold tracking-widest text-zinc-600">
                  0{index + 1}
                </p>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
