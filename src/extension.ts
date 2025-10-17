import * as vscode from "vscode"

const clipboard = vscode.env.clipboard

export function activate(context: vscode.ExtensionContext) {
  let createHyperLinkCommand = vscode.commands.registerCommand(
    "superlink.createHyperLink",
    () => {
      // Get the currently selected text.
      let selectedText = vscode.window.activeTextEditor?.document.getText(
        vscode.window.activeTextEditor?.selection
      )

      // Get the URL from the clipboard.
      clipboard.readText().then((url) => {
        // Create the `<a>` tag and `href` attribute using the selected text and clipboard URL.
        let hyperlink = `<a href="${url}">${selectedText}</a>`

        // Insert the hyperlink into the HTML code.
        vscode.window.activeTextEditor?.edit((editBuilder) => {
          if (
            vscode.window.activeTextEditor &&
            vscode.window.activeTextEditor.selection
          ) {
            editBuilder.replace(
              vscode.window.activeTextEditor.selection,
              hyperlink
            )
            return
          } else {
            vscode.window.showErrorMessage("No active editor or selection.")
            return
          }
        })
      })
    }
  )
  context.subscriptions.push(createHyperLinkCommand)
}

// This method is called when the extension is deactivated
export function deactivate() {}
