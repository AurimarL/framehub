import { SelectedOptions } from "../../App";

export const generateNuxtCommand = (options: SelectedOptions): string => {
  let command = "npx nuxi init";
  if (options["project-name"]) {
    command += ` ${options["project-name"] ?? "my-nuxt-app"} `;
  } else {
    command += ` my-nuxt-app `;
  }

  // Add template option if specified
  if (options["template"]) {
    command += ` --template ${options["template"]}`;
  }

  // Add force option if specified
  if (options["force"]) {
    command += ` --force`;
  }

  // Add offline option if specified
  if (options["offline"]) {
    command += ` --offline`;
  }

  // Add prefer-offline option if specified
  if (options["prefer-offline"]) {
    command += ` --prefer-offline`;
  }

  // Add no-install option if specified
  if (options["no-install"]) {
    command += ` --no-install`;
  }

  // Add git-init option if specified
  if (options["git-init"]) {
    command += ` --git-init`;
  }

  // Add shell option if specified
  if (options["shell"]) {
    command += ` --shell`;
  }

  // Add package manager option if specified
  if (options["package-manager"] && options["package-manager"] !== "npm") {
    command += ` --package-manager ${options["package-manager"]}`;
  }

  // Add log level option if specified
  if (options["log-level"]) {
    command += ` --log-level ${options["log-level"]}`;
  }

  return command.trim();
};
