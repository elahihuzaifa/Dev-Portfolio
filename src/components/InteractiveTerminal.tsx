"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

const initialOutput = [
  "Welcome to Huzaifa's Dev Portfolio Terminal",
  "Type 'help' to see available commands",
];

const commands = {
  help: () => [
    "Available commands:",
    "  help    - Show this help message",
    "  skills  - Display my technical skills",
    "  roadmap - Show my DevOps learning progress",
    "  clear   - Clear the terminal",
  ],
  skills: () => [
    "✓ HTML5 [MASTERED]",
    "✓ CSS3 [MASTERED]",
    "✓ JavaScript (ES6+) [MASTERED]",
    "✓ PHP [MASTERED]",
    "✓ WordPress [MASTERED]",
    "✓ MySQL [MASTERED]",
    "✓ Git [ACTIVE]",
    "✓ GitHub [ACTIVE]",
  ],
  roadmap: () => [
    "DevOps Learning Progress:",
    "Linux Shell ............. [████████░░] 80%",
    "Docker Containerization .. [██████░░░░] 60%",
    "CI/CD Pipelines ......... [████░░░░░░] 40%",
    "Cloud Concepts .......... [██░░░░░░░░] 20%",
    "",
    "Overall Progress: [===================>       ] 65%",
  ],
} as const;

function renderOutputLine(line: string, index: number) {
  return (
    <div key={index} className="whitespace-pre-wrap">
      {line.split(" ").map((part, partIndex) => {
        if (part.startsWith("✓")) {
          return (
            <span key={partIndex} className="text-emerald-400">
              ✓
            </span>
          );
        }

        return <span key={partIndex}>{part} </span>;
      })}
    </div>
  );
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>(initialOutput);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const nextOutput = [...output, `root@portfolio:~$ ${cmd}`];

    if (trimmedCmd === "clear") {
      setOutput([]);
      setInput("");
      return;
    }

    const commandFn = commands[trimmedCmd as keyof typeof commands];
    if (commandFn) {
      setOutput([...nextOutput, ...commandFn()]);
    } else if (trimmedCmd) {
      setOutput([
        ...nextOutput,
        `Command not found: ${cmd}. Type 'help' for available commands.`,
      ]);
    }

    setCommandHistory((prevHistory) => [...prevHistory, cmd]);
    setHistoryIndex(commandHistory.length);
    setInput("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleCommand(input);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setInput(commandHistory[0]);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(commandHistory.length);
        setInput("");
      }
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 font-mono text-sm shadow-2xl">
      <div className="mb-3 flex items-center gap-2 text-slate-400">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="mb-3 max-h-64 overflow-y-auto space-y-1 text-slate-300">
        {output.map(renderOutputLine)}
      </div>
      <div className="flex items-center gap-2 text-cyan-300">
        <span>root@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none"
          autoFocus
        />
      </div>
    </div>
  );
}
