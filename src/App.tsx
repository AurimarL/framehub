import { useState } from "react";
import { Search, Terminal, Loader2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Framework, frameworks } from "./lib/Frameworks";
import { generateNextJsCommand } from "./lib/Frameworks/nextjs";
import { renderOption } from "./components/renderOption";
import { handleRunCommand } from "./lib/HandleRunCommand";

export interface SelectedOptions {
  [key: string]: string | boolean;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(
    null
  );
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [generatedCommand, setGeneratedCommand] = useState("");
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  const filteredFrameworks = frameworks.filter((framework) =>
    framework.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOptionChange = (optionId: string, value: string | boolean) => {
    setSelectedOptions((prev) => ({ ...prev, [optionId]: value }));
  };

  const resetOptions = () => {
    setSelectedOptions({});
    setGeneratedCommand("");
  };

  const handleCreateProject = async () => {
    if (selectedFramework && selectedFramework.name === "Next.js") {
      const command = generateNextJsCommand(selectedOptions);

      setGeneratedCommand(command);
      setIsCreatingProject(true);

      await handleRunCommand(command);

      setIsCreatingProject(false);
    } else {
      setGeneratedCommand(
        "Command generation not implemented for this framework yet."
      );
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Choose a Framework</h1>
      <div className="mb-4 relative">
        <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search frameworks..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {filteredFrameworks.map((framework) => (
          <Dialog
            key={framework.name}
            onOpenChange={(open) => !open && resetOptions()}
          >
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center"
                onClick={() => setSelectedFramework(framework)}
              >
                <img
                  src={framework.icon}
                  alt={framework.name}
                  className="w-10 h-10 mb-2"
                />
                {framework.name}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Initialize {framework.name} Project</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {framework.options.map((option) => (
                  <div key={option.id} className="flex flex-col space-y-2">
                    {(!option.dependsOn ||
                      selectedOptions[option.dependsOn] === true) &&
                      renderOption(selectedOptions, handleOptionChange, option)}
                  </div>
                ))}
              </div>
              <Button
                className="w-full"
                onClick={handleCreateProject}
                disabled={isCreatingProject}
              >
                {isCreatingProject ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Project...
                  </>
                ) : (
                  <>
                    Create Project
                    <Terminal className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
              {generatedCommand && (
                <div className="mt-4">
                  <Label htmlFor="generated-command">Generated Command:</Label>
                  <code>{generatedCommand}</code>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
