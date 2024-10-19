# Framework Chooser

Framework Chooser is a desktop application built with React and Tauri that allows developers to easily select, configure, and initialize web development frameworks for their projects.

![Framework Chooser Screenshot](./screenshot.png)

## Features

- Interactive UI for selecting popular web development frameworks
- Customizable options for each framework
- Command generation based on selected options
- Integration with Tauri for cross-platform desktop support

## Installation

To get started with Framework Chooser, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/AurimarL/framehub.git
   cd framehub
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Install Tauri CLI (if not already installed):
   ```
   pnpm install -g @tauri-apps/cli
   ```

## Usage

To run the application in development mode:

```
pnpm tauri dev
```

To build the application for production:

```
pnpm tauri build
```

## Development

This project uses:

- React for the frontend UI
- Tauri for creating a cross-platform desktop application
- shadcn/ui for UI components
- Lucide React for icons

The main component is located in `src/App.tsx`. Framework configurations and command generation logic can be found in the `src/lib` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tauri](https://tauri.app/) for the desktop application framework
- [React](https://reactjs.org/) for the UI library
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon set