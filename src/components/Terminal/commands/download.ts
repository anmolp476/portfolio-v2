import type { Command, OutputLine } from "../../../types/terminal";

const allowedFiles = ["resume.pdf", "resume.docx"];

export const downloadCommand: Command = {
  name: "download",
  description: "download a file",
  usage: "download <file>",
  handler: (args: string[]): OutputLine[] => {
    const filename = args[0];

    if (!filename) {
      return [
        {
          id: crypto.randomUUID(),
          type: "error",
          content:
            "usage: download <file> — try 'ls files/' to see available files",
        },
      ];
    }

    if (!allowedFiles.includes(filename)) {
      return [
        {
          id: crypto.randomUUID(),
          type: "error",
          content: `file not found: ${filename} — try 'ls files/' to see available files`,
        },
      ];
    }

    // trigger the actual browser download
    const link = document.createElement("a");
    link.href = `/files/${filename}`;
    link.download = filename;
    link.click();

    return [
      {
        id: crypto.randomUUID(),
        type: "success",
        content: `downloading ${filename}...`,
      },
    ];
  },
};
