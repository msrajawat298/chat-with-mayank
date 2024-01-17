// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const view = vscode.window.createTreeView('chat', {
        treeDataProvider: {
            getChildren: () => ['Chat Bot'],
            getTreeItem: (item) => ({
                label: item,
                command: {
                    command: 'myExtension.openChatBot',
                    title: 'Open Chat Bot'
                }
            })
        }
    });

    const command = vscode.commands.registerCommand('myExtension.openChatBot', () => {
        const panel = vscode.window.createWebviewPanel(
            'chatBot',
            'Chat Bot',
            vscode.ViewColumn.One,
            {}
        );

        panel.webview.html = getChatBotHtml();
    });

    context.subscriptions.push(view, command);
}

function getChatBotHtml() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <body>
            <h1>Chat Bot testing</h1>
            <!-- Your chat bot code goes here -->
        </body>
        </html>
    `;
}

exports.activate = activate;