import { QuoteTypeQuickPick } from "@model";

import * as vscode from "vscode";

export function showQuoteTypeQuickPick(): Thenable<QuoteTypeQuickPick> {
  return vscode.window.showQuickPick(
    [
      new QuoteTypeQuickPick({
        label: "Double",
        value: false
      }),
      new QuoteTypeQuickPick({
        label: "Single",
        value: true
      })
    ],
    {
      placeHolder: "Select quote type"
    }
  );
}
