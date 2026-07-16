"use client";

import { motion } from "framer-motion";
import { contactLinks } from "./data";

export default function ContactSection() {
  return (
    <section id="contact" className="grid gap-8">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="glass-panel p-6 sm:p-8"
      >
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
          Get in touch
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-white">
          Let&apos;s build something sharp together
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          Whether it&apos;s a modern marketing site, a custom CMS, or a
          DevOps-friendly deployment workflow, I&apos;m ready to help.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex w-full items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:scale-105 hover:border-cyan-400/40 sm:w-auto"
              >
                <Icon
                  size={16}
                  className="transition group-hover:text-cyan-300"
                />
                {item.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
