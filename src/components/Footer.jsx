export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Paul. Built with React.</p>
        <a href="#home" className="transition hover:text-lime-400">Back to top ↑</a>
      </div>
    </footer>
  )
}