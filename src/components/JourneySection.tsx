"use client";

import { motion } from "framer-motion";
import { milestones } from "./data";

export default function JourneySection() {
  return (
    <section id="journey" className="glass-panel p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Learning Timeline
          </p>
          <h2 className="text-3xl font-semibold text-white">
            My DevOps journey
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          The roadmap is moving from solid web foundations into automation,
          infrastructure, and cloud readiness.
        </p>
      </div>
      <div className="relative ml-0 space-y-8 border-l border-white/10 pl-0 sm:ml-2 sm:pl-6">
        {milestones.map((milestone) => {
          const Icon = milestone.icon;
          return (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <motion.span
                animate={
                  milestone.finished
                    ? {
                        boxShadow: [
                          "0 0 0 0 rgba(16, 185, 129, 0.4)",
                          "0 0 0 10px rgba(16, 185, 129, 0)",
                          "0 0 0 0 rgba(16, 185, 129, 0.4)",
                        ],
                      }
                    : {
                        boxShadow: [
                          "0 0 0 0 rgba(251, 191, 36, 0.4)",
                          "0 0 0 10px rgba(251, 191, 36, 0)",
                          "0 0 0 0 rgba(251, 191, 36, 0.4)",
                        ],
                      }
                }
                transition={{ repeat: Infinity, duration: 2 }}
                className={`absolute -left-[1.82rem] top-2 flex h-5 w-5 items-center justify-center rounded-full ${
                  milestone.finished
                    ? "bg-emerald-400"
                    : "bg-amber-400 animate-pulse"
                }`}
              >
                <Icon size={12} className="text-white" />
              </motion.span>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {milestone.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {milestone.detail}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      milestone.finished
                        ? "bg-emerald-400/15 text-emerald-300"
                        : "bg-amber-400/15 text-amber-300"
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>
                {!milestone.finished && (
                  <div className="mt-4 flex items-center gap-3 text-sm text-amber-200">
                    <div className="h-2.5 w-2.5 animate-spin rounded-full border-2 border-amber-400/50 border-t-amber-300" />
                    <span>
                      Active acquisition of Docker containerization and server
                      scripting
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
