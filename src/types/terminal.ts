export type OutputType = "text" | "error" | "success" | "command" | "jsx";

export interface OutputLine {
  id: string;
  type: OutputType;
  content: string | React.ReactNode;
}

export interface Command {
  name: string;
  description: string;
  usage?: string;
  handler: (args: string[]) => OutputLine[];
}
