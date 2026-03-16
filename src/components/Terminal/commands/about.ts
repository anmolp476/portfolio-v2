import type { Command, OutputLine } from "../../../types/terminal";

const myName = [
  "   █████╗ ███╗  ██╗███╗   ███╗ █████╗ ██╗",
  "  ██╔══██╗████╗ ██║████╗ ████║██╔══██╗██║",
  "  ███████║██╔██╗██║██╔████╔██║██║  ██║██║",
  "  ██╔══██║██║╚████║██║╚██╔╝██║██║  ██║██║",
  "  ██║  ██║██║ ╚███║██║ ╚═╝ ██║╚█████╔╝███████╗",
  "  ╚═╝  ╚═╝╚═╝  ╚══╝╚═╝     ╚═╝ ╚════╝╚══════╝",
];

export const aboutCommand: Command = {
  name: "about",
  description: "who I am!",
  handler: (): OutputLine[] => [
    // ASCII art lines
    ...myName.map((line) => ({
      id: crypto.randomUUID(),
      type: "success" as const,
      content: line,
    })),
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "",
    },
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  name       Anmol Panchal ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content:
        "  role       Unemployed :( (but actively looking for SWE or related roles!)",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content:
        "  degree     B.Eng Computer Engineering (Software Option) @ Toronto Metropolitan University (formerly Ryerson)",
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
      content: "  I build full-stack apps, love stalking",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  repos, build full-stack apps, love",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  stalking repos, build full-stack apps...",
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
