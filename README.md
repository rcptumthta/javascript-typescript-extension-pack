# Javascript/Typescript Extension Pack

This extension pack is a collection of JavaScript and TypeScript tools for Visual Studio Code.

## ✨ Generate configuration

### 🎮 Command

- `Javascript/Typescript: Generate configuration for workspace`

### 🚀 Usage

1. Open the command palette `ctrl+shift+p` / `cmd+shift+p` or `F1`
2. Search for `Javascript/Typescript: Generate configuration for workspace`
3. Run the command and select the options you want to use

![How to use](./assets/gif/how-to-use.gif)

### ⚙️ Configurations

1. Javascript

   ```json
   {
     "abracadabra.ignoredPatterns": ["build/*", "compile/*", "coverage/*", "dist/*", "out/*", "output/*"],
     "auto-close-tag.activationOnLanguage": [
       "csv",
       "handlebars",
       "html",
       "jade",
       "javascript",
       "javascriptreact",
       "json",
       "json5",
       "jsonc",
       "jsonl",
       "markdown",
       "plaintext",
       "pug",
       "sql",
       "svelte",
       "svg",
       "vue",
       "vue-html",
       "xml",
       "xsl"
     ],
     "auto-rename-tag.activationOnLanguage": [
       "csv",
       "handlebars",
       "html",
       "jade",
       "javascript",
       "javascriptreact",
       "json",
       "json5",
       "jsonc",
       "jsonl",
       "markdown",
       "plaintext",
       "pug",
       "sql",
       "svelte",
       "svg",
       "vue",
       "vue-html",
       "xml",
       "xsl"
     ],
     "autoBarrel.files.includeExtensionOnExport": ["js", "jsx"],
     "autoBarrel.formatting.useSingleQuotes": "<option you chose>", // true or false
     "autoBarrel.language.defaultLanguage": "JavaScript",
     "colorize.colorized_variables": ["CSS", "LESS", "SASS", "STYLUS"],
     "colorize.enable_search_variables": true,
     "colorize.hide_current_line_decorations": false,
     "colorize.languages": [
       "css",
       "csv",
       "handlebars",
       "html",
       "jade",
       "javascript",
       "javascriptreact",
       "json",
       "json5",
       "jsonc",
       "jsonl",
       "less",
       "markdown",
       "plaintext",
       "pug",
       "sass",
       "scss",
       "stylus",
       "svelte",
       "svg",
       "vue",
       "vue-html",
       "xml",
       "xsl",
       "yaml"
     ],
     "cSpell.ignoreRegExpList": ["/[\\u0E00-\\u0E7F]/g"],
     "cSpell.language": "en-US",
     "cSpell.words": ["brotli", "filesize", "intellicode", "rcptumthta", "rgba", "vsintellicode"],
     "dotenv.cloakIcon": "*",
     "filesize.showBrotli": true,
     "filesize.showGzipInStatusBar": true,
     "intellicodeApiExamples.loggingLevel": "ALL",
     "intellicodeApiExamples.python.enabled": false,
     "javascript.inlayHints.enumMemberValues.enabled": true,
     "javascript.inlayHints.functionLikeReturnTypes.enabled": true,
     "javascript.inlayHints.parameterNames.enabled": "all",
     "javascript.inlayHints.parameterTypes.enabled": true,
     "javascript.inlayHints.propertyDeclarationTypes.enabled": true,
     "javascript.inlayHints.variableTypes.enabled": true,
     "search.exclude": {
       "build": true,
       "compile": true,
       "coverage": true,
       "dist": true,
       "node_modules": true,
       "out": true,
       "output": true
     },
     "template-string-converter.autoRemoveTemplateString": true,
     "template-string-converter.quoteType": "<option you chose>", // "single" or "double"
     "template-string-converter.validLanguages": ["javascript", "javascriptreact", "svelte", "vue"],
     "turboConsoleLog.addSemicolonInTheEnd": true,
     "turboConsoleLog.insertEmptyLineAfterLogMessage": true,
     "turboConsoleLog.quote": "<option you chose>", // "'" or "\""
     "vsintellicode.java.completionsEnabled": false,
     "vsintellicode.python.completionsEnabled": false
   }
   ```

2. Typescript

   ```json
   {
     "abracadabra.ignoredPatterns": ["build/*", "compile/*", "coverage/*", "dist/*", "out/*", "output/*"],
     "auto-close-tag.activationOnLanguage": [
       "csv",
       "handlebars",
       "html",
       "jade",
       "javascript",
       "javascriptreact",
       "json",
       "json5",
       "jsonc",
       "jsonl",
       "markdown",
       "plaintext",
       "pug",
       "sql",
       "svelte",
       "svg",
       "typescript",
       "typescriptreact",
       "vue",
       "vue-html",
       "xml",
       "xsl"
     ],
     "auto-rename-tag.activationOnLanguage": [
       "csv",
       "handlebars",
       "html",
       "jade",
       "javascript",
       "javascriptreact",
       "json",
       "json5",
       "jsonc",
       "jsonl",
       "markdown",
       "plaintext",
       "pug",
       "sql",
       "svelte",
       "svg",
       "typescript",
       "typescriptreact",
       "vue",
       "vue-html",
       "xml",
       "xsl"
     ],
     "autoBarrel.files.includeExtensionOnExport": ["ts", "tsx"],
     "autoBarrel.formatting.useSingleQuotes": "<option you chose>", // true or false
     "autoBarrel.language.defaultLanguage": "TypeScript",
     "colorize.colorized_variables": ["CSS", "LESS", "SASS", "STYLUS"],
     "colorize.enable_search_variables": true,
     "colorize.hide_current_line_decorations": false,
     "colorize.languages": [
       "css",
       "csv",
       "handlebars",
       "html",
       "jade",
       "javascript",
       "javascriptreact",
       "json",
       "json5",
       "jsonc",
       "jsonl",
       "less",
       "markdown",
       "plaintext",
       "pug",
       "sass",
       "scss",
       "stylus",
       "svelte",
       "svg",
       "typescript",
       "typescriptreact",
       "vue",
       "vue-html",
       "xml",
       "xsl",
       "yaml"
     ],
     "cSpell.ignoreRegExpList": ["/[\\u0E00-\\u0E7F]/g"],
     "cSpell.language": "en-US",
     "cSpell.words": ["brotli", "filesize", "intellicode", "rcptumthta", "rgba", "vsintellicode"],
     "dotenv.cloakIcon": "*",
     "filesize.showBrotli": true,
     "filesize.showGzipInStatusBar": true,
     "intellicodeApiExamples.loggingLevel": "ALL",
     "intellicodeApiExamples.python.enabled": false,
     "javascript.inlayHints.enumMemberValues.enabled": true,
     "javascript.inlayHints.functionLikeReturnTypes.enabled": true,
     "javascript.inlayHints.parameterNames.enabled": "all",
     "javascript.inlayHints.parameterTypes.enabled": true,
     "javascript.inlayHints.propertyDeclarationTypes.enabled": true,
     "javascript.inlayHints.variableTypes.enabled": true,
     "search.exclude": {
       "build": true,
       "compile": true,
       "coverage": true,
       "dist": true,
       "node_modules": true,
       "out": true,
       "output": true
     },
     "template-string-converter.autoRemoveTemplateString": true,
     "template-string-converter.quoteType": "<option you chose>", // "single" or "double"
     "template-string-converter.validLanguages": [
       "javascript",
       "javascriptreact",
       "svelte",
       "typescript",
       "typescriptreact",
       "vue"
     ],
     "turboConsoleLog.addSemicolonInTheEnd": true,
     "turboConsoleLog.insertEmptyLineAfterLogMessage": true,
     "turboConsoleLog.quote": "<option you chose>", // "'" or "\""
     "typescript.inlayHints.enumMemberValues.enabled": true,
     "typescript.inlayHints.functionLikeReturnTypes.enabled": true,
     "typescript.inlayHints.parameterNames.enabled": "all",
     "typescript.inlayHints.parameterTypes.enabled": true,
     "typescript.inlayHints.propertyDeclarationTypes.enabled": true,
     "typescript.inlayHints.variableTypes.enabled": true,
     "typescript.tsdk": "node_modules\\typescript\\lib",
     "vsintellicode.java.completionsEnabled": false,
     "vsintellicode.python.completionsEnabled": false
   }
   ```

## 📦 Extensions Included

### 🤖 Artificial Intelligence

|                                               Extension Name                                                                           |             Description                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)                              | AI assisted developer productivity                                                                                        |

### 🔡 Grammar

| Extension Name                                                                                                                         | Description                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)                               | Make TypeScript errors prettier and more human-readable in VSCode                                                         |

### Productivity

| Extension Name                                                                                                                         | Description                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [Abracadabra, refactor this!](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra)                              | Automated refactorings for VS Code, in JavaScript and TypeScript                                                          |

### 🔗 Code Snippets

| Extension Name                                                                                                                         | Description                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)                       | Code snippets for JavaScript in ES6 syntax                                                                                |

### 🔬 Code Generator

| Extension Name                                                                                                                         | Description                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [TypeScript constructor generator](https://marketplace.visualstudio.com/items?itemName=toanchivu.tcv-typescript-constructor-generator) | Auto generate constructor for TypeScript object in VS code                                                                |
| [TypeScript GetSet](https://marketplace.visualstudio.com/items?itemName=z0gSh1u.vscode-ts-getset)                                      | TypeScript getter / setter generator based on AST                                                                         |
| [TS Env Typings](https://marketplace.visualstudio.com/items?itemName=YassinEldeeb.env-typings)                                         | Automatically generate typings for process.env from your env file on save                                                 |
| [Auto Barrel for VSCode](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-auto-barrel)                              | Automatically generate index files for your project                                                                       |
| [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)                                | Automating the process of writing meaningful log messages                                                                 |

### 📝 Template Productivity

| Extension Name                                                                                                                         | Description                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag)                               | Extension Packs to add close tag and rename paired tag automatically                                                      |
| [Template String Converter](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter)                  | Converts a string to a template string                                                                                    |

### ✅ Code Analysis

| Extension Name                                                                                                                         | Description                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                                                   | Integrates ESLint into VS Code                                                                                            |
| [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)                                     | Markdown linting and style checking for Visual Studio Code                                                                |

### 💻 Workbench

| Extension Name                                                                                                                         | Description                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [Dotenv Official +Vault](https://marketplace.visualstudio.com/items?itemName=dotenv.dotenv-vscode)                                     | Official Dotenv. Syntax highlighting, auto-cloaking, auto-completion, in-code secret peeking, and optionally dotenv-vault |
| [grepc: Regex Highlighting](https://marketplace.visualstudio.com/items?itemName=stneveadomi.grepc)                                     | An approachable regular expression highlighter with advanced customization for VS Code                                    |
| [filesize](https://marketplace.visualstudio.com/items?itemName=mkxml.vscode-filesize)                                                  | Show the current file size in the status bar                                                                              |
| [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)                               | Shows image preview in the gutter and on hover                                                                            |
| [JSON Crack](https://marketplace.visualstudio.com/items?itemName=AykutSarac.jsoncrack-vscode)                                          | Seamlessly visualize your JSON data instantly into graphs                                                                 |
| [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)                                           | A vscode extension to help visualize css colors in files                                                                  |
| [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)                          | Highlights matching closing and opening tags                                                                              |
| [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)                              | EditorConfig Support for Visual Studio Code                                                                               |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)                        | This extension provides a basic spell checker that works well with code and documents                                     |

## 📄 Credits

All credits goes to original authors of the above mentioned extensions.

**Happy Coding!**
