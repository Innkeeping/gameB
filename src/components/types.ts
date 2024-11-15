export type CommandOutput = React.ReactNode | null;
export type CommandFunction = (setSudoAttempts?: (fn: (prev: number) => number) => void) => CommandOutput;