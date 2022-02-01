import * as vscode from 'vscode';
// import * as MyLibrary from './libraries/MyLibrary';

const MyLibrary = require('./libraries/MyLibrary')

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "testextension" is now active!');

    let disposable = vscode.commands.registerCommand('testextension.helloWorld', () => {
		MyLibrary.printStuff();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
