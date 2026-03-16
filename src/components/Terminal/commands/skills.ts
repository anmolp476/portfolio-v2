import type { Command, OutputLine } from "../../../types/terminal";

export const skillsCommand: Command = {
  name: "skills",
  description: "my tech stack",
  handler: (): OutputLine[] => [
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "tech stack",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content:
        "  languages     Python · JavaScript · C/C++ · TypeScript · Java · HTML5 · CSS3",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content:
        "  frameworks      React.js · Next.js · TailwindCSS · FastAPI · Express.js · Node.js · ASP.NET MVC · JUnit · Pygame",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  Libraries/Tools       Git · Bitbucket · GitHub Actions · Confluence · Jira · Docker · Perforce (Helix Swarm)",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  type 'contact' to get in touch",
    },
  ],
};
