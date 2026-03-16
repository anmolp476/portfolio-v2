import type { Command, OutputLine } from "../../../types/terminal";
import { helpCommand } from "./help";
import { aboutCommand } from "./about";
import { projectsCommand } from "./projects";
import { skillsCommand } from "./skills";
import { contactCommand } from "./contact";
import { downloadCommand } from "./download";
import { lsCommand } from "./ls";
import { clearCommand } from "./clear";

export const commands: Command[] = [
  helpCommand,
  aboutCommand,
  projectsCommand,
  skillsCommand,
  contactCommand,
  downloadCommand,
  lsCommand,
  clearCommand,
];

const commandMap = new Map(commands.map((c) => [c.name, c]));

export function runCommand(name: string, args: string[]): OutputLine[] {
  const command = commandMap.get(name);

  if (!command) {
    return [
      {
        id: crypto.randomUUID(),
        type: "error",
        content: `command not found: ${name} — type 'help' to see available commands`,
      },
    ];
  }

  return command.handler(args);
}
