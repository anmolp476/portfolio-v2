import type { Command, OutputLine } from "../../../types/terminal";

export const projectsCommand: Command = {
  name: "projects",
  description: "my featured work",
  handler: (): OutputLine[] => [
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "featured projects",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    // Project 1
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "  01  JobFinderAutomation",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content:
        "      JobFinderAutomation is a tool that automatically collects and filters job postings using SerpAPI, delivering a customizable list of relevant opportunities directly to your inbox.",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "      ",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content:
        "      stack   React & TailwindCSS(for the website) · Python · GitHub Actions · Docker · SerpAPI",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "      repo    github.com/anmolp476/JobFinderAutomation",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    // Project 2
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "  02  WhatWasThisFor",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content:
        "      WhatWasThisFor is a simple chrome extension to let you attach reminders to certain tabs, so that when you visit the tab again you wil be reminded of why you wanted to visit that website in the first place.",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "      ",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "      stack   JavaScript · HTML5 · CSS3",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "      repo    github.com/anmolp476/WhatWasThisFor",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    // Project 3
    /*
    {
      id: crypto.randomUUID(),
      type: "success",
      content: "  03  Project Name Here",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "      Short description of what it does and why it matters.",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "      stack   Go · PostgreSQL · Docker · AWS",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "      repo    github.com/yourname/project",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "─────────────────────────────────────",
    },
    {
      id: crypto.randomUUID(),
      type: "text",
      content: "  type 'skills' to see my tech stack",
    },
    */
  ],
};
