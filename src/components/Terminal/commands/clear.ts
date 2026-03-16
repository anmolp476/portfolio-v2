import type { Command, OutputLine } from "../../../types/terminal";

export const clearCommand: Command = {
  name: "clear",
  description: "clear the terminal",
  handler: (): OutputLine[] => {
    return [
      {
        id: "clear",
        type: "text",
        content: "",
      },
    ];
  },
};
