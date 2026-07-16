"use client";

import { ArrowRight, GitBranch, MonitorPlay, ServerCog } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "./data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col gap-2 sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Projects shaped by clean UI and practical delivery
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Each project reflects responsive design, thoughtful frontend
          implementation, and a growing DevOps mindset for reliable deployment.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.25 }}
            className="group glass-panel relative overflow-hidden p-6 min-w-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 opacity-0 transition group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-full border border-white/10 bg-slate-900/70 p-2 text-emerald-300">
                  <MonitorPlay size={18} />
                </div>
                <div className="text-sm text-slate-400">0{index + 1}</div>
              </div>
              {project.image && (
                <div className="relative mb-5 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full object-cover"
                  />
                  {project.title === "KarMuqabla App" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 px-4 text-center text-sm font-semibold text-amber-200">
                      Work in progress on the website
                    </div>
                  )}
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:scale-110 hover:text-cyan-300"
                >
                  <GitBranch size={16} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:scale-110 hover:text-emerald-300"
                >
                  <ArrowRight size={16} />
                </a>
                <button
                  className="ml-auto rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-xs font-medium text-amber-300 transition hover:scale-105 hover:bg-amber-400/20"
                  title="View Server Architecture"
                >
                  <ServerCog size={14} className="inline mr-1" />
                  Architecture
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
