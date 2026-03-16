import type { Command, OutputLine } from "../../../types/terminal";

export const contactCommand: Command = {
  name: "contact",
  description: "get in touch",
  handler: (): OutputLine[] => [
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "contact",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  email      anmolp476@gmail.com",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  github     github.com/anmolp476",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  linkedin   linkedin.com/in/panchal2003",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  type 'ls files/' to check out and download my resumes",
    },
  ],
};
