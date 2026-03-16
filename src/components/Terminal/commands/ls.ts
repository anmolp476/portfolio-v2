import type { Command, OutputLine } from "../../../types/terminal";

export const lsCommand: Command = {
  name: "ls",
  description: "list directory contents",
  usage: "ls <dir>",
  handler: (args: string[]): OutputLine[] => {
    const dir = args[0];

    if (!dir || dir === "files/") {
      return [
        {
          id: crypto.randomUUID(),
          type: "success",
          content: "files/",
        },
        {
          id: crypto.randomUUID(),
          type: "text",
          content: "─────────────────────────────────────",
        },
        {
          id: crypto.randomUUID(),
          type: "text",
          content: "  resume.pdf",
        },
        {
          id: crypto.randomUUID(),
          type: "text",
          content: "  resume.docx",
        },
        {
          id: crypto.randomUUID(),
          type: "text",
          content: "─────────────────────────────────────",
        },
        {
          id: crypto.randomUUID(),
          type: "text",
          content: "  usage: download <file>",
        },
      ];
    }

    return [
      {
        id: crypto.randomUUID(),
        type: "error",
        content: `ls: ${dir}: no such directory(for now only 'files/' is supported)`,
      },
    ];
  },
};
