
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            React Developer · Ghana
          </div>

          <h1 className="max-w-3xl font-['Space_Grotesk'] text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Building digital
            <br />
            experiences that
            <br />
            <span className="text-lime-400">make an impact.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Hi, I'm Paul — a frontend developer who enjoys turning ideas
            into responsive, accessible, and user-friendly web applications.
          </p>

          {/* <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-lime-300"
            >
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold transition hover:border-lime-400/50"
            >
              Contact me
            </a>
          </div> */}
          
<div className="mt-9 flex flex-wrap gap-4">
  <a
    href="#projects"
    className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-lime-300"
  >
    Explore my work <ArrowUpRight size={18} />
  </a>

  <a
    href="#contact"
    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold transition hover:border-lime-400/50"
  >
    Contact me
  </a>

  <a
    href="/Paul_Afriyie_Musah_React_Developer_CV.pdf"
    download="Paul_Afriyie_Musah_React_Developer_CV.pdf"
    className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 px-6 py-3.5 font-semibold text-lime-400 transition hover:-translate-y-1 hover:bg-lime-400/10"
  >
    <ArrowDown size={18} />
    Download CV
  </a>
</div>


          <div className="mt-12 flex items-center gap-5">
            <a
              href="https://github.com/Pamusah"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-zinc-400 transition hover:text-lime-400"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/YOUR_USERNAME/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-zinc-400 transition hover:text-lime-400"
            >
              <FaLinkedinIn size={22} />
            </a>
            <span className="h-px w-12 bg-zinc-700" />
            <span className="text-sm text-zinc-500">Let's build something great.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-4xl border border-lime-400/10 rotate-3" />
          <div className="relative rounded-4xl border border-white/10 bg-linear-to-br from-zinc-800 to-zinc-950 p-7 shadow-2xl">
            <div className="mb-12 flex items-center justify-between">
              <Code2 className="text-lime-400" size={28} />
              <span className="rounded-full border border-lime-400/20 px-3 py-1 text-xs text-lime-400">
                Developer mode
              </span>
            </div>

            <div className="font-mono text-sm leading-8">
              <p className="text-zinc-500">// A little about me</p>
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

            <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
              <div>
                <p className="text-xs text-zinc-500">CURRENT FOCUS</p>
                <p className="mt-1 font-medium">Frontend Development</p>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime-400/10 text-lime-400">
                <Code2 size={23} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition hover:text-lime-400 sm:block"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  )
}