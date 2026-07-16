import { Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10  backdrop-blur-xl">
      <nav className="mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-400 to-sky-500 shadow-xl shadow-cyan-500/10 ring-1 ring-white/10">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950/90 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-lg shadow-cyan-500/20">
              HE
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-100">
              Huzaifa Elahi
            </p>
            <p className="text-xs text-slate-400">
              Web Developer • DevOps Learner
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#overview" className="transition hover:text-cyan-300">
            Overview
          </a>
          <a href="#experience" className="transition hover:text-cyan-300">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-cyan-300">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-cyan-300">
            Skills
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-300"
            aria-label="Toggle theme"
          >
            <Sun size={16} />
          </button>
        </div>
      </nav>
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 pb-4 text-sm text-slate-300 md:hidden lg:px-8">
        <a
          href="#overview"
          className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 transition hover:text-cyan-300"
        >
          Overview
        </a>
        <a
          href="#experience"
          className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 transition hover:text-cyan-300"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 transition hover:text-cyan-300"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 transition hover:text-cyan-300"
        >
          Skills
        </a>
      </div>
    </header>
  );
}
