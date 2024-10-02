import { Extension } from "@model";

import * as vscode from "vscode";

export async function writeExtensionsFile(workspaceUrl: vscode.Uri): Promise<void> {
  const vscodeExtensionUrl: vscode.Uri = vscode.Uri.parse(`${workspaceUrl.toString()}\\.vscode\\extensions.json`);

  let data: Extension;

  try {
    const stats: vscode.FileStat = await vscode.workspace.fs.stat(vscodeExtensionUrl);

    if (stats.type === vscode.FileType.File) {
      const file: Uint8Array = await vscode.workspace.fs.readFile(vscodeExtensionUrl);
      const text: string = new TextDecoder("utf8").decode(file);

      data = new Extension(JSON.parse(text));

      if (data.recommendations?.length > 0) {
        if (!data.recommendations?.includes("rcptumthta.javascript-typescript-extension-pack")) {
          data.recommendations = [...data.recommendations, "rcptumthta.javascript-typescript-extension-pack"].sort(
            (a: string, b: string): number => {
              return a.localeCompare(b);
            }
          );
        }
      } else {
        data.recommendations = ["rcptumthta.javascript-typescript-extension-pack"];
      }
    }
  } catch (error) {
    if (error instanceof Error && error.name === "EntryNotFound (FileSystemError)") {
      data = new Extension({
        recommendations: ["rcptumthta.javascript-typescript-extension-pack"],
        unwantedRecommendations: undefined
      });
    }
  }

  await vscode.workspace.fs.writeFile(vscodeExtensionUrl, Buffer.from(JSON.stringify(data, null, 2)));
}
