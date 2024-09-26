import { LanguageQuickPick } from "@model";

import * as vscode from "vscode";

export function showLanguageQuickPick(): Thenable<LanguageQuickPick> {
  return vscode.window.showQuickPick(
    [
      new LanguageQuickPick({
        label: "Javascript",
        value: "javascript"
      }),
      new LanguageQuickPick({
        label: "Typescript",
        value: "typescript"
      })
    ],
    {
      placeHolder: "Select language"
    }
  );
}
