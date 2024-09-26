export function typescriptConfigurationConstant(useSingleQuotes: boolean): object {
  const activationOnLanguage: string[] = [
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
  ];

  return {
    "auto-close-tag.activationOnLanguage": activationOnLanguage,
    "auto-rename-tag.activationOnLanguage": activationOnLanguage,
    "autoBarrel.files.includeExtensionOnExport": ["ts", "tsx"],
    "autoBarrel.formatting.useSingleQuotes": useSingleQuotes,
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
    "template-string-converter.autoRemoveTemplateString": true,
    "template-string-converter.quoteType": useSingleQuotes ? "single" : "double",
    "template-string-converter.validLanguages": [
      "javascript",
      "javascriptreact",
      "svelte",
      "typescript",
      "typescriptreact",
      "vue"
    ],
    "typescript.inlayHints.enumMemberValues.enabled": true,
    "typescript.inlayHints.functionLikeReturnTypes.enabled": true,
    "typescript.inlayHints.parameterNames.enabled": "all",
    "typescript.inlayHints.parameterTypes.enabled": true,
    "typescript.inlayHints.propertyDeclarationTypes.enabled": true,
    "typescript.inlayHints.variableTypes.enabled": true,
    "typescript.tsdk": "node_modules\\typescript\\lib",
    "vsintellicode.java.completionsEnabled": false,
    "vsintellicode.python.completionsEnabled": false
  };
}
