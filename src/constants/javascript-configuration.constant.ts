export function javascriptConfigurationConstant(useSingleQuotes: boolean): object {
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
    "vue",
    "vue-html",
    "xml",
    "xsl"
  ];

  return {
    "abracadabra.ignoredPatterns": ["build/*", "compile/*", "dist/*", "out/*", "output/*"],
    "auto-close-tag.activationOnLanguage": activationOnLanguage,
    "auto-rename-tag.activationOnLanguage": activationOnLanguage,
    "autoBarrel.files.includeExtensionOnExport": ["js", "jsx"],
    "autoBarrel.formatting.useSingleQuotes": useSingleQuotes,
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
      build: true,
      compile: true,
      coverage: true,
      dist: true,
      node_modules: true,
      out: true,
      output: true
    },
    "template-string-converter.autoRemoveTemplateString": true,
    "template-string-converter.quoteType": useSingleQuotes ? "single" : "double",
    "template-string-converter.validLanguages": ["javascript", "javascriptreact", "svelte", "vue"],
    "turboConsoleLog.addSemicolonInTheEnd": true,
    "turboConsoleLog.insertEmptyLineAfterLogMessage": true,
    // eslint-disable-next-line prettier/prettier
    "turboConsoleLog.quote": useSingleQuotes ? "'" : "\"",
    "vsintellicode.java.completionsEnabled": false,
    "vsintellicode.python.completionsEnabled": false
  };
}
