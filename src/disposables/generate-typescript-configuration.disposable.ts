import { showQuoteTypeQuickPick, writeExtensionsFile, writeSettingsFile } from "@function";
import { QuoteTypeQuickPick } from "@model";

import * as vscode from "vscode";

export function generateTypescriptConfigurationDisposable(): vscode.Disposable {
  return vscode.commands.registerCommand(
    "javascript-typescript-extension-pack.generate-typescript-configuration",
    async (): Promise<void> => {
      const quoteType: QuoteTypeQuickPick = await showQuoteTypeQuickPick();

      if (quoteType !== null && quoteType !== undefined) {
        const workspaceUrl: vscode.Uri = vscode.workspace.workspaceFolders?.at(0)?.uri;

        if (workspaceUrl === null || workspaceUrl === undefined) {
          vscode.window.showErrorMessage("Workspace doesn't contain any folders");
        } else {
          try {
            await writeExtensionsFile(workspaceUrl);
            await writeSettingsFile("typescript", quoteType.value);

            await vscode.window.showInformationMessage("Generate typescript configuration for workspace successfully");
          } catch (error) {
            if (error instanceof Error) {
              await vscode.window.showErrorMessage(error.message);
            }
          }
        }
      }
    }
  );
}
