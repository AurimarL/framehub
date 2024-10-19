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
];
