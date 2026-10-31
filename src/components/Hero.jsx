



// import {
//   ArrowDown,
//   ArrowUpRight,
//   Code2,
// } from 'lucide-react'
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
// import { motion } from 'framer-motion'

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.35,
//       delayChildren: 0.2,
//     },
//   },
// }

// const textVariants = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: 'easeOut',
//     },
//   },
// }

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
//     >
//       <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />

//       <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
//         {/* Animated hero content */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div
//             variants={textVariants}
//             className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-zinc-300"
//           >
//             <span className="h-2 w-2 rounded-full bg-lime-400" />
//             React Developer · Ghana
//           </motion.div>

//           <motion.h1
//             variants={textVariants}
//             className="max-w-3xl font-['Space_Grotesk'] text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
//           >
//             Building digital
//             <br />
//             experiences that
//             <br />
//             <span className="text-lime-400">make an impact.</span>
//           </motion.h1>

//           <motion.p
//             variants={textVariants}
//             className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
//           >
//             Hi, I'm Paul — a frontend developer who enjoys turning ideas
//             into responsive, accessible, and user-friendly web applications.
//           </motion.p>

//           <motion.div
//             variants={textVariants}
//             className="mt-9 flex flex-wrap gap-4"
//           >
//             <a
//               href="#projects"
//               className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-lime-300"
//             >
//               Explore my work <ArrowUpRight size={18} />
//             </a>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold transition hover:border-lime-400/50"
//             >
//               Contact me
//             </a>

//             <a
//               href="/Paul_Afriyie_Musah_React_Developer_CV.pdf"
//               download="Paul_Afriyie_Musah_React_Developer_CV.pdf"
//               className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 px-6 py-3.5 font-semibold text-lime-400 transition hover:-translate-y-1 hover:bg-lime-400/10"
//             >
//               <ArrowDown size={18} />
//               Download CV
//             </a>
//           </motion.div>

//           <motion.div
//             variants={textVariants}
//             className="mt-12 flex items-center gap-5"
//           >
//             <a
//               href="https://github.com/Pamusah"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub profile"
//               className="text-zinc-400 transition hover:text-lime-400"
//             >
//               <FaGithub size={22} />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/YOUR_USERNAME/"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="LinkedIn profile"
//               className="text-zinc-400 transition hover:text-lime-400"
//             >
//               <FaLinkedinIn size={22} />
//             </a>

//             <span className="h-px w-12 bg-zinc-700" />

//             <span className="text-sm text-zinc-500">
//               Let's build something great.
//             </span>
//           </motion.div>
//         </motion.div>

//         {/* Developer card animation remains unchanged */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative mx-auto w-full max-w-sm"
//         >
//           <div className="absolute -inset-4 rotate-3 rounded-4xl border border-lime-400/10" />

//           <div className="relative rounded-4xl border border-white/10 bg-linear-to-br from-zinc-800 to-zinc-950 p-7 shadow-2xl">
//             <div className="mb-12 flex items-center justify-between">
//               <Code2 className="text-lime-400" size={28} />

//               <span className="rounded-full border border-lime-400/20 px-3 py-1 text-xs text-lime-400">
//                 Developer mode
//               </span>
//             </div>

//             <div className="font-mono text-sm leading-8">
//               <p className="text-zinc-500">// A little about me</p>

//               <p>
//                 <span className="text-violet-400">const</span>{' '}
//                 <span className="text-sky-300">developer</span> = {'{'}
//               </p>

//               <p className="pl-4">
//                 name: <span className="text-lime-300">'Paul'</span>,
//               </p>

//               <p className="pl-4">
//                 focus: <span className="text-lime-300">'React'</span>,
//               </p>

//               <p className="pl-4">
//                 mindset: <span className="text-lime-300">'Growth'</span>,
//               </p>

//               <p className="pl-4">
//                 build: <span className="text-lime-300">'With purpose'</span>,
//               </p>

//               <p>{'}'}</p>
//             </div>

//             <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
//               <div>
//                 <p className="text-xs text-zinc-500">CURRENT FOCUS</p>
//                 <p className="mt-1 font-medium">Frontend Development</p>
//               </div>

//               <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime-400/10 text-lime-400">
//                 <Code2 size={23} />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <a
//         href="#about"
//         aria-label="Scroll to about section"
//         className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition hover:text-lime-400 sm:block"
//       >
//         <ArrowDown className="animate-bounce" />
//       </a>
//     </section>
//   )
// }



import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

const roles = [
  'React Developer',
  'Frontend Developer',
  'Software Developer',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-emerald-400/5 blur-[110px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">

        {/* LEFT: Hero content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div
            variants={textVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            React Developer · Ghana
          </motion.div>

          {/* Main heading */}
          <motion.div variants={textVariants}>
            <h1 className="max-w-3xl font-['Space_Grotesk'] text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Building digital
              <br />
              experiences that
              <br />
              <span className="bg-linear-to-r from-lime-300 via-lime-400 to-emerald-300 bg-clip-text text-transparent">
                make an impact.
              </span>
            </h1>
          </motion.div>

          {/* Animated job title */}
          <motion.div
            variants={textVariants}
            className="mt-7 flex min-h-9 items-center gap-2 text-lg font-semibold sm:text-xl"
          >
            <span className="text-zinc-400">I'm a</span>

            <span className="relative inline-flex min-w-0 overflow-hidden text-lime-400">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 18, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(5px)' }}
                  transition={{ duration: 0.45 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={textVariants}
            className="mt-5 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            Hi, I'm Paul — a frontend developer who enjoys turning ideas
            into responsive, accessible, and user-friendly web applications.
            I focus on creating digital experiences that are both functional
            and visually engaging.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={textVariants}
            className="mt-9 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 font-semibold text-zinc-950 shadow-lg shadow-lime-400/10 transition hover:bg-lime-300"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold transition hover:border-lime-400/50 hover:text-lime-400"
            >
              Contact me
            </motion.a>

            <motion.a
              href="/Paul_Afriyie_Musah_React_Developer_CV.pdf"
              download="Paul_Afriyie_Musah_React_Developer_CV.pdf"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 px-6 py-3.5 font-semibold text-lime-400 transition hover:bg-lime-400/10"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={textVariants}
            className="mt-12 flex items-center gap-5"
          >
            <motion.a
              href="https://github.com/Pamusah"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              whileHover={{ y: -4, scale: 1.15 }}
              className="text-zinc-400 transition hover:text-lime-400"
            >
              <FaGithub size={22} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/musah-paul-afriyie-080467241/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              whileHover={{ y: -4, scale: 1.15 }}
              className="text-zinc-400 transition hover:text-lime-400"
            >
              <FaLinkedinIn size={22} />
            </motion.a>

            <span className="h-px w-12 bg-zinc-700" />

            <span className="text-sm text-zinc-500">
              Let's build something great.
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT: Animated developer card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: 'easeOut',
          }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Outer glow */}
          <div className="absolute -inset-5 rounded-4xl bg-lime-400/5 blur-2xl" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className="absolute -inset-4 rotate-3 rounded-4xl border border-lime-400/10" />

            <div className="relative rounded-4xl border border-white/10 bg-linear-to-br from-zinc-800 to-zinc-950 p-7 shadow-2xl">

              <div className="mb-12 flex items-center justify-between">
                <Code2 className="text-lime-400" size={28} />

                <span className="rounded-full border border-lime-400/20 px-3 py-1 text-xs text-lime-400">
                  Developer mode
                </span>
              </div>

              {/* Code display */}
              <div className="font-mono text-sm leading-8">
                <p className="text-zinc-500">
                  // A little about me
                </p>

                <p>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-sky-300">developer</span> = {'{'}
                </p>

                <p className="pl-4">
                  name: <span className="text-lime-300">'Paul'</span>,
                </p>

                <p className="pl-4">
                  focus: <span className="text-lime-300">'React'</span>,
                </p>

                <p className="pl-4">
                  mindset: <span className="text-lime-300">'Growth'</span>,
                </p>

                <p className="pl-4">
                  build: <span className="text-lime-300">'With purpose'</span>,
                </p>

                <p>{'}'}</p>
              </div>

              {/* Bottom information */}
              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="text-xs text-zinc-500">
                    CURRENT FOCUS
                  </p>
                  <p className="mt-1 font-medium">
                    Frontend Development
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="grid h-11 w-11 place-items-center rounded-xl bg-lime-400/10 text-lime-400"
                >
                  <Code2 size={23} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition hover:text-lime-400 sm:block"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
