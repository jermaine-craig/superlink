# Superlink

Superlink is a VS Code extension that allows you to quickly create hyperlinks in HTML code.

## Features

- Select some text in your HTML document
- Copy a URL to your clipboard
- Run the command `superlink.createHyperLink`
- The selected text will be replaced with a hyperlink using the copied URL

## Requirements

- VS Code 1.5.0 or later

## Usage

1. Select some text in your HTML document
2. Copy a URL to your clipboard
3. Run the command `superlink.createHyperLink`

## Assign a keybinding

You can assign a keybinding to the `superlink.createHyperLink` command in the `keybindings.json` file in your VS Code configuration.

To open the `keybindings.json` file, you can use the keyboard shortcut `Ctrl+K Ctrl+S` (Windows, Linux) or `Cmd+K Cmd+S` (macOS).

Here's an example of how you can assign the keybinding `Ctrl+Shift+H` (Windows, Linux) or `Cmd+Shift+H` (macOS) to the `superlink.createHyperLink` command:

```json
[
  {
    "key": "ctrl+shift+l",
    "command": "superlink.createHyperLink",
    "when": "editorTextFocus"
  }
]
```

## Extension Settings

This extension doesn't have any settings.

## Known Issues

- URL is too long, the maximum URL length is 70 characters.
- No active editor or selection.

## Release Notes

### 1.0.0

Initial release of Superlink

## Contributing

If you find any issues or have any suggestions for improvements, please open an issue or a pull request on the [GitHub repository](https://github.com/OWNER/REPO).

## License

This extension is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Author

[Jermaine Craig](https://jermainecraig.com)
[Chat GPT](https://chat.openai.com/chat)
