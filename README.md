# Glow Markdown Preview

A VS Code extension that enhances the built-in markdown preview with Glow/Glamour-inspired terminal aesthetics.

## Features

- **Dark theme styling** inspired by the [Glow](https://github.com/charmbracelet/glow) terminal markdown renderer
- **Task list support** with styled checkboxes
- **Custom heading styles**: Yellow H1 on blue background, blue H2-H5, green H6
- **Code blocks**: Pink text on dark gray with syntax highlighting
- **Styled links**: Cyan with underlines
- **Blockquotes**: Purple left border with italic text
- **Custom list bullets**: Different symbols for nested levels (•, ◦, ▪)
- **Styled tables**: Blue headers with alternating row colors

## Installation

### From VSIX

1. Download the `.vsix` file
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

## Color Palette

| Element | Color |
|---------|-------|
| H1 text | Yellow (#FFD75F) |
| H1 background | Blue (#5F5FD7) |
| H2-H5 | Blue (#00AFFF) |
| H6 | Green (#00D787) |
| Code text | Pink (#FF5F87) |
| Code background | Dark gray (#373737) |
| Links | Cyan (#008787) |
| Blockquote border | Purple (#AF87FF) |

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
