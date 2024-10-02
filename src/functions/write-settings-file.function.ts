import { javascriptConfigurationConstant, typescriptConfigurationConstant } from "@constant";
import { LanguageIdentifier } from "@type";

import * as vscode from "vscode";

export async function writeSettingsFile(language: LanguageIdentifier, useSingleQuotes: boolean): Promise<void> {
  if (language === "javascript") {
    const jsConfiguration: object = javascriptConfigurationConstant(useSingleQuotes);
    const tsConfiguration: object = typescriptConfigurationConstant(useSingleQuotes);
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
  } else {
    const configuration: object = typescriptConfigurationConstant(useSingleQuotes);

    for (const [key, value] of Object.entries(configuration)) {
      vscode.workspace.getConfiguration().update(key, value, vscode.ConfigurationTarget.Workspace);
    }
  }
}
