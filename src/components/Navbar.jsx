
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#09090b]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Paul<span className="text-lime-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-zinc-400 transition hover:text-lime-400"
            >
              {label}
            </a>
          ))}
          
<a
  href="/Paul_Afriyie_Musah_React_Developer_CV.pdf"
  download="Paul_Afriyie_Musah_React_Developer_CV.pdf"
  className="text-sm text-zinc-400 transition hover:text-lime-400"
>
  Download CV ↓
</a>

          <a
            href="#contact"
            className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-lime-300"
          >
            Let's talk
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-zinc-200 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-white/10 bg-[#09090b] px-6 py-6 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-lime-400"
            >
              {label}
            </a>
          ))}
          
<a
  href="/Paul_Afriyie_Musah_React_Developer_CV.pdf"
  download="Paul_Afriyie_Musah_React_Developer_CV.pdf"
  onClick={() => setMenuOpen(false)}
  className="text-zinc-300 transition hover:text-lime-400"
>
  Download CV ↓
</a>

        </div>
      )}
    </header>
  )
}
