"use client";

import { useEffect, useState } from "react";
import { words } from "./data";

export default function TypewriterText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text === currentWord) {
            window.setTimeout(() => setIsDeleting(true), 900);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? 55 : 90,
    );

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return <span className="text-emerald-400">{text}</span>;
}
