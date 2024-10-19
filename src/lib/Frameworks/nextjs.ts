import { frameworks } from ".";
import { SelectedOptions } from "../../App";

export const generateNextJsCommand = (options: SelectedOptions): string => {
  let command = "npx create-next-app";

  if (options["project-name"]) {
    command += ` ${options["project-name"] ?? "my-app"} `;
  } else {
    command += ` my-app `;
  }

  let hasTsFlag = false; // Track if TypeScript flag is added

  frameworks[0].options.forEach((option) => {
    if (option.flag) {
      if (options[option.id] === true) {
        if (option.id === "typescript") {
          hasTsFlag = true; // Set flag if TypeScript is selected
        } else {
          command += ` --${option.flag}`;
        }
      } else if (option.id !== "typescript") {
        command += ` --no-${option.flag}`;
      }
    }
  });

  // Add TypeScript or JavaScript flag only once
  if (hasTsFlag) {
    command += " --ts"; // Add TypeScript flag
  } else {
    command += " --js"; // Add JavaScript flag if TS is not selected
  }

  if (options["import-alias"] === true) {
    const alias = options["custom-alias"] || "./*";
    command += ` --import-alias '${alias}'`;
  } else {
    command += " --import-alias " + "@/*";
  }

  if (options["package-manager"] && options["package-manager"] !== "npm") {
    command += ` --use-${options["package-manager"]}`;
  }

  return command.trim();
};
