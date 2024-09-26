import { showLanguageQuickPick } from "@function";
import { LanguageQuickPick } from "@model";

import * as vscode from "vscode";

export function generateConfigurationDisposable(): vscode.Disposable {
  return vscode.commands.registerCommand(
    "javascript-typescript-extension-pack.generate-configuration",
    async (): Promise<void> => {
      const language: LanguageQuickPick = await showLanguageQuickPick();

      if (language !== null && language !== undefined) {
        await vscode.commands.executeCommand(
          `javascript-typescript-extension-pack.generate-${language.value}-configuration`
        );
      }
    }
  );
}
