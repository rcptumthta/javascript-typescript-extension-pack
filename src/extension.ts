import {
  generateConfigurationDisposable,
  generateJavascriptConfigurationDisposable,
  generateTypescriptConfigurationDisposable
} from "@disposable";

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    generateConfigurationDisposable(),
    generateJavascriptConfigurationDisposable(),
    generateTypescriptConfigurationDisposable()
  );
}
