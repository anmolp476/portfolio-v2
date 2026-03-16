import { useEffect, useRef } from "react";
import { useTerminal } from "../../hooks/useTerminal";

export default function Terminal() {
  const {
    output,
    inputValue,
    setInputValue,
    handleKeyDown,
    focusInput,
    inputRef,
  } = useTerminal();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  return (
    <div
      className="w-full min-h-screen flex flex-col cursor-text"
      onClick={focusInput}
    >
      {/* titlebar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          background: "var(--bg-tertiary)",
          borderColor: "var(--border)",
        }}
      >
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: "var(--acc)" }}
        />
        <span
          className="flex-1 text-center text-xs font-mono"
          style={{ color: "var(--text-dim)" }}
        >
          guest@portfolio ~ zsh
        </span>
      </div>

      {/* output */}
      <div
        className="flex-1 px-5 py-4 font-mono text-sm flex flex-col gap-0.5"
        style={{ background: "var(--bg-secondary)" }}
      >
        {output.map((line) => (
          <div
            key={line.id}
            style={{
              color:
                line.type === "command"
                  ? "var(--text-dim)"
                  : line.type === "success"
                    ? "var(--acc)"
                    : line.type === "error"
                      ? "#f87171"
                      : "var(--text)",
              whiteSpace: "pre-wrap",
            }}
          >
            {line.type === "command" ? (
              <>
                <span style={{ color: "var(--acc)" }}>guest@portfolio:~$</span>{" "}
                {String(line.content)}
              </>
            ) : (
              String(line.content)
            )}
          </div>
        ))}

        {/* live input line */}
        <div className="flex items-center mt-1">
          <span
            className="mr-2 font-mono text-sm"
            style={{ color: "var(--acc)" }}
          >
            guest@portfolio:~$
          </span>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            placeholder="type 'help' for available commands..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm caret-current"
            style={{ color: "var(--text)", caretColor: "var(--acc)" }}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
