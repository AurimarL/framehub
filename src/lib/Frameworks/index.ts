export interface FrameworkOption {
  id: string;
  label: string;
  type: optionType;
  placeholder?: string;
  options?: string[];
  flag?: string;
  dependsOn?: string;
  defaultValue?: string | boolean;
}

export interface Framework {
  name: string;
  icon: string;
  options: FrameworkOption[];
}

enum optionType {
  input = "input",
  checkbox = "checkbox",
  select = "select",
}
export const frameworks: Framework[] = [
  {
    name: "Next.js",
    icon: "/next.png",
    options: [
      {
        id: "project-name",
        label: "Project Name",
        type: optionType.input,
        placeholder: "my-app",
        defaultValue: "my-app",
      },
      {
        id: "typescript",
        label: "Use TypeScript",
        type: optionType.checkbox,
        flag: "ts",
        defaultValue: true,
      },
      {
        id: "eslint",
        label: "Use ESLint",
        type: optionType.checkbox,
        flag: "eslint",
        defaultValue: true,
      },
      {
        id: "tailwind",
        label: "Use Tailwind CSS",
        type: optionType.checkbox,
        flag: "tailwind",
        defaultValue: true,
      },
      {
        id: "src-directory",
        label: "Use `src/` directory",
        type: optionType.checkbox,
        flag: "src-dir",
        defaultValue: true,
      },
      {
        id: "app-router",
        label: "Use App Router",
        type: optionType.checkbox,
        flag: "app",
        defaultValue: true,
      },
      {
        id: "import-alias",
        label: "Customize default import alias",
        type: optionType.checkbox,
        defaultValue: false,
      },
      {
        id: "custom-alias",
        label: "Import alias",
        type: optionType.input,
        placeholder: "@/*",
        dependsOn: "import-alias",
        defaultValue: "@/*",
      },
      {
        id: "package-manager",
        label: "Package Manager",
        type: optionType.select,
        options: ["npm", "pnpm", "yarn", "bun"],
        defaultValue: "pnpm",
      },
    ],
  },
  {
    name: "Nuxt.js",
    icon: "/nuxt.png",
    options: [
      {
        id: "project-name",
        label: "Project Name",
        type: optionType.input,
        placeholder: "my-nuxt-app",
        defaultValue: "my-nuxt-app",
      },
      {
        id: "template",
        label: "Template",
        type: optionType.input,
        placeholder: "gh:org/name",
        defaultValue: "v3",
      },
      {
        id: "force",
        label: "Force Clone",
        type: optionType.checkbox,
        defaultValue: false,
      },
      {
        id: "offline",
        label: "Offline Mode",
        type: optionType.checkbox,
        defaultValue: false,
      },
      {
        id: "prefer-offline",
        label: "Prefer Offline Mode",
        type: optionType.checkbox,
        defaultValue: false,
      },
      {
        id: "no-install",
        label: "Skip Installing Dependencies",
        type: optionType.checkbox,
        defaultValue: false,
      },
      {
        id: "git-init",
        label: "Initialize Git Repository",
        type: optionType.checkbox,
        defaultValue: false,
      },
      {
        id: "shell",
        label: "Start Shell After Installation",
        type: optionType.checkbox,
        defaultValue: false,
      },
      {
        id: "package-manager",
        label: "Package Manager",
        type: optionType.select,
        options: ["npm", "pnpm", "yarn", "bun"],
        defaultValue: "npm",
      },
      {
        id: "log-level",
        label: "Log Level",
        type: optionType.input,
        placeholder: "info",
        defaultValue: "info",
      },
    ],
  },
];
