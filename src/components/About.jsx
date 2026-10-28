
export default function About() {
  return (
    <section id="about" className="border-t border-white/5 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">About me</p>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight sm:text-5xl">Curious mind.<br /><span className="text-zinc-500">Purposeful code.</span></h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-zinc-400">
          <p>I'm a frontend developer who enjoys solving problems through technology and creating web experiences that are useful and easy to use.</p>
          <p>I focus on reusable React components, responsive layouts, and connecting frontend applications to backend services.</p>
          <p>My goal is to keep learning, collaborate with great teams, and build products that make a meaningful difference.</p>
        </div>
      </div>
    </section>
  )
}