import type { Command, OutputLine } from "../../../types/terminal";

export const helpCommand: Command = {
  name: "help",
  description: "show available commands",
  handler: (): OutputLine[] => [
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "available commands",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  help              show this menu",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  about             who i am",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  projects          featured work",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  skills            my tech stack",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  contact           get in touch",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  ls files/         list downloadable files",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  download <file>   download a file",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  clear             clear the terminal",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
  ],
};
