const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript', 'Git', 'REST APIs', 'Responsive Design']

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">My toolkit</p>
        <h2 className="font-['Space_Grotesk'] text-4xl font-bold sm:text-5xl">Technologies I work with.</h2>
        <p className="mt-4 max-w-xl leading-7 text-zinc-400">Tools I use to build modern web applications.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map(skill => <span key={skill} className="rounded-xl border border-white/10 bg-white/3 px-5 py-3 text-sm text-zinc-300 transition hover:border-lime-400/40 hover:text-lime-400">{skill}</span>)}
        </div>
      </div>
    </section>
  )
}