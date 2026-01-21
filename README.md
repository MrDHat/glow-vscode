# Glow Markdown Preview

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/MrDHat.glow-vscode?label=VS%20Code%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=MrDHat.glow-vscode)

A VS Code extension that enhances the built-in markdown preview with Glow/Glamour-inspired terminal aesthetics.

## Features

- **Dark and light theme support** - automatically adapts to your VS Code theme
- **Terminal aesthetics** inspired by the [Glow](https://github.com/charmbracelet/glow) markdown renderer
- **Task list support** with styled checkboxes
- **Custom heading styles**: Yellow H1 on blue background, blue H2-H5, green H6
- **Code blocks**: Pink text on dark gray with syntax highlighting
- **Styled links**: Cyan with underlines
- **Blockquotes**: Purple left border with italic text
- **Custom list bullets**: Different symbols for nested levels (•, ◦, ▪)
- **Styled tables**: Blue headers with alternating row colors

## Installation

### From VS Code Marketplace (Recommended)

1. Open VS Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open Extensions
3. Search for "Glow Markdown Preview"
4. Click Install

Or install via command line:
```bash
code --install-extension MrDHat.glow-vscode
```

### From VSIX

1. Download the `.vsix` file from [Releases](https://github.com/MrDHat/glow-vscode/releases)
2. In VS Code, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Install from VSIX" and select the command
4. Choose the downloaded `.vsix` file

### From Source

1. Clone this repository
2. Run `npm install`
3. Run `npm run compile`
4. Press `F5` to launch the Extension Development Host

## Usage

1. Open any `.md` file in VS Code
2. Open the markdown preview with `Ctrl+Shift+V` (or `Cmd+Shift+V` on Mac)
3. The preview will automatically use the Glow dark theme

## Recommended Font

For the best experience matching the terminal aesthetic, install **JetBrains Mono** (the same font used by [Ghostty](https://ghostty.org) and other modern terminals):

```bash
# macOS (Homebrew)
brew install --cask font-jetbrains-mono

# Or download from https://www.jetbrains.com/lp/mono/
```

After installing, restart VS Code for the font to take effect.

## Color Palette

| Element | Color |
|---------|-------|
| H1 text | Yellow (#ffff87) |
| H1 background | Purple (#5f5fff) |
| H2-H5 | Cyan (#5fafff) |
| H6 | Green (#00d787) |
| Inline code | Pink (#ff5f87) |
| Code background | Dark gray (#303030) |
| Links | Teal (#008787) |
| Blockquote border | Gray (#666) |

## Development

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch mode
npm run watch

# Package extension
npm run package
```

## License

MIT
