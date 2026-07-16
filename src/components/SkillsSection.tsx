"use client";

import { Layers3, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveTerminal from "./InteractiveTerminal";
import { skillGroups } from "./data";

export default function SkillsSection() {
  return (
    <section id="skills" className="grid gap-8">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="glass-panel p-6 sm:p-8"
      >
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-cyan-300">
          <TerminalSquare size={18} />
          Interactive Linux Terminal
        </div>
        <h2 className="text-2xl font-semibold text-white">
          Command-line experience
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Type commands to explore my skills and DevOps journey. Try 'help',
          'skills', or 'roadmap'.
        </p>
        <div className="mt-6">
          <InteractiveTerminal />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="glass-panel p-6 sm:p-8"
      >
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-emerald-300">
          <Layers3 size={18} />
          Capability Snapshot
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-4"
            >
              <p className="text-sm font-medium text-white">{group.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm leading-7 text-slate-300">
          <p className="font-medium text-white">Current focus</p>
          <p className="mt-2">
            I&apos;m pairing strong frontend foundations with practical DevOps
            habits so every release is more reliable and easier to automate.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
