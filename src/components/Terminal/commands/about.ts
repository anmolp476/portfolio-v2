import type { Command, OutputLine } from "../../../types/terminal";

export const aboutCommand: Command = {
  name: "about",
  description: "who I am!",
  handler: (): OutputLine[] => [
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "about me",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  name       Anmol Panchal :D",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  role       Unemployed :( (but actively looking for SWE or related roles!)",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  degree     B.Eng Computer Engineering (Software Option) @ Toronto Metropolitan University (formerly Ryerson)",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  based      Toronto, ON — open to remote",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  status     Open to work",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  I build full-stack apps, love systems",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  programming, and obsess over clean APIs.",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  type 'projects' to see my work",
    },
  ],
};
