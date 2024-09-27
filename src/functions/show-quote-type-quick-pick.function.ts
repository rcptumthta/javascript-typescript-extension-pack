import { QuoteTypeQuickPick } from "@model";

import * as vscode from "vscode";

export function showQuoteTypeQuickPick(): Thenable<QuoteTypeQuickPick> {
  return vscode.window.showQuickPick(
    [
      new QuoteTypeQuickPick({
        label: "Double quotes",
        value: false
      }),
      new QuoteTypeQuickPick({
        label: "Single quotes",
        value: true
      })
    ],
    {
      placeHolder: "Select quote type"
    }
  );
}
