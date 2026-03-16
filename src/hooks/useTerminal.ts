import { useState, useCallback, useRef } from "react";
import type { OutputLine } from "../types/terminal";
import { runCommand } from "../components/Terminal/commands/index";

export function useTerminal() {
  const [output, setOutput] = useState<OutputLine[]>([
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "Welcome! Type help to see available commands.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const pushLines = useCallback((lines: OutputLine[]) => {
    setOutput((prev) => [...prev, ...lines]);
  }, []);

  const handleSubmit = useCallback(() => {
    const raw = inputValue.trim();

    const cmdLine: OutputLine = {
      id: crypto.randomUUID(),
      type: "command",
      content: raw,
    };

    if (!raw) {
      pushLines([cmdLine]);
      setInputValue("");
      return;
    }

    setCommandHistory((prev) => [raw, ...prev]);
    setHistoryIndex(-1);

    const [cmd, ...args] = raw.split(" ");

    if (cmd.toLowerCase() === "clear") {
      setOutput([]);
      setInputValue("");
      return;
    }

    const result = runCommand(cmd.toLowerCase(), args);
    pushLines([cmdLine, ...result]);
    setInputValue("");
  }, [inputValue, pushLines]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSubmit();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHistoryIndex((prev) => {
          const next = Math.min(prev + 1, commandHistory.length - 1);
          setInputValue(commandHistory[next] ?? "");
          return next;
        });
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setHistoryIndex((prev) => {
          const next = Math.max(prev - 1, -1);
          setInputValue(next === -1 ? "" : (commandHistory[next] ?? ""));
          return next;
        });
      }
    },
    [handleSubmit, commandHistory],
  );

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return {
    output,
    inputValue,
    setInputValue,
    handleKeyDown,
    focusInput,
    inputRef,
  };
}
