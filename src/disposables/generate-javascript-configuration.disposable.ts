import { javascriptConfigurationConstant, typescriptConfigurationConstant } from "@constant";
import { showQuoteTypeQuickPick } from "@function";
import { QuoteTypeQuickPick } from "@model";

import * as vscode from "vscode";

export function generateJavascriptConfigurationDisposable(): vscode.Disposable {
  return vscode.commands.registerCommand(
    "javascript-typescript-extension-pack.generate-javascript-configuration",
    async (): Promise<void> => {
      const quoteType: QuoteTypeQuickPick = await showQuoteTypeQuickPick();

      if (quoteType !== null && quoteType !== undefined) {
        const jsConfiguration = javascriptConfigurationConstant(quoteType.value);
        const tsConfiguration = typescriptConfigurationConstant(quoteType.value);
        const jsKeys: string[] = Object.keys(jsConfiguration);
        const tsKeys: string[] = Object.keys(tsConfiguration);
        const keys: string[] = tsKeys.filter((key: string): boolean => {
          return !jsKeys.includes(key);
        });

        for (const key of keys) {
          vscode.workspace.getConfiguration().update(key, undefined, vscode.ConfigurationTarget.Workspace);
        }

        for (const [key, value] of Object.entries(jsConfiguration)) {
          vscode.workspace.getConfiguration().update(key, value, vscode.ConfigurationTarget.Workspace);
        }

        await vscode.window.showInformationMessage("Generate javascript configuration for workspace successfully");
      }
    }
  );
}
