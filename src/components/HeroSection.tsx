"use client";

import {
  ArrowRight,
  Code2,
  GitBranch,
  Orbit,
  Sparkles,
  ServerCog,
} from "lucide-react";
import OrbitalBackground from "./OrbitalBackground";
import TypewriterText from "./TypewriterText";

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="glass-panel relative overflow-hidden px-6 py-10 sm:px-10 lg:px-14 lg:py-16"
    >
      <OrbitalBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_25%)]" />
      <div className="relative grid min-w-0 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-full min-w-0">
          <div className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <Sparkles size={16} />
            Building polished web experiences with a DevOps mindset
          </div>
          <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            I&apos;m a <br />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text font-bold text-transparent">
              {<TypewriterText />}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I build responsive websites and web apps with HTML, CSS, JavaScript,
            React, Next.js, Tailwind, Bootstrap, and PHP, while strengthening my
            DevOps workflow through Git, GitHub, and modern deployment
            practices.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/15 px-6 py-3 font-medium text-emerald-200 transition duration-300 hover:scale-105 hover:bg-emerald-400/25"
            >
              View My Work
              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={18}
              />
            </a>
            <a
              href="https://wa.me/03341823245?text=Hi%20Huzaifa%2C%20I%20want%20to%20connect%20via%20WhatsApp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-200 transition duration-300 hover:scale-105 hover:bg-cyan-400/20"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <div className="mb-2 flex items-center gap-2 text-cyan-300">
                <Code2 size={16} />
                Frontend
              </div>
              <p>React, Next.js, Tailwind, Bootstrap</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <div className="mb-2 flex items-center gap-2 text-emerald-300">
                <GitBranch size={16} />
                Workflow
              </div>
              <p>Git, GitHub, clean collaboration</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <div className="mb-2 flex items-center gap-2 text-amber-300">
                <ServerCog size={16} />
                Learning
              </div>
              <p>Docker, CI/CD, deployment automation</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-[260px] w-full max-w-[380px] items-center justify-center sm:h-[320px] sm:max-w-[440px]">
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute h-52 w-52 rounded-full border border-cyan-400/40 bg-cyan-400/10" />
          <div className="absolute h-72 w-72 animate-[spin_18s_linear_infinite] rounded-[2rem] border border-emerald-400/40 bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-indigo-500/20 p-6 shadow-[0_0_80px_rgba(0,0,0,0.35)]">
            <div className="flex h-full flex-col rounded-[1.2rem] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-3 rounded-2xl bg-slate-900/70 p-4">
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <ServerCog size={16} />
                  deploy@portfolio:~
                </div>
                <div className="h-3 w-24 rounded-full bg-emerald-400/30" />
                <div className="h-3 w-3/4 rounded-full bg-cyan-400/30" />
                <div className="h-3 w-1/2 rounded-full bg-indigo-400/30" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-slate-900/70 p-3 shadow-xl">
            <Orbit size={22} className="text-emerald-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
