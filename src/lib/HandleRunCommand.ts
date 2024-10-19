import { Command } from "@tauri-apps/plugin-shell";
import { toast } from "../hooks/use-toast";

export const handleRunCommand = async (generatedCommand: string) => {
  if (!generatedCommand) {
    toast({
      title: "No Command Generated",
      description: "Please generate a command first.",
      variant: "destructive",
    });
    return;
  }

  try {
    const command = Command.create("exec-sh", ["/c", generatedCommand]);
    const output = await command.execute();

    if (output.code === 0) {
      toast({
        title: "Command Executed Successfully",
        description: "The project has been created.",
      });
      console.log("Command output:", output.stdout);
    } else {
      throw new Error(output.stderr);
    }
  } catch (error) {
    console.error("Failed to execute command:", error);
    toast({
      title: "Error",
      description:
        "Failed to execute the command. Please check the console for more information.",
      variant: "destructive",
    });
  }
};
