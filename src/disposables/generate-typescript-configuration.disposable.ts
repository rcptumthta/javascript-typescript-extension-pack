import { typescriptConfigurationConstant } from "@constant";
import { showQuoteTypeQuickPick } from "@function";
import { QuoteTypeQuickPick } from "@model";

import * as vscode from "vscode";

export function generateTypescriptConfigurationDisposable(): vscode.Disposable {
  return vscode.commands.registerCommand(
    "javascript-typescript-extension-pack.generate-typescript-configuration",
    async (): Promise<void> => {
      const quoteType: QuoteTypeQuickPick = await showQuoteTypeQuickPick();

      if (quoteType !== null && quoteType !== undefined) {
        const configuration = typescriptConfigurationConstant(quoteType.value);

        for (const [key, value] of Object.entries(configuration)) {
          vscode.workspace.getConfiguration().update(key, value, vscode.ConfigurationTarget.Workspace);
        }

        await vscode.window.showInformationMessage("Generate typescript configuration for workspace successfully");
      }
    }
  );
}
