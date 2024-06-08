# snippet.react-store

This is a template for a React app using Vite.  
It includes the following:

- [Emotion](https://emotion.sh/docs/introduction)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Project setup (`nvm` and `pnpm` required)

```
pnpm setup
```

### TailWind's Config for WebStorm

```json
{
  "includeLanguages": {
    "ftl": "html",
    "jinja": "html",
    "jinja2": "html",
    "smarty": "html",
    "tmpl": "gohtml",
    "cshtml": "html",
    "vbhtml": "html",
    "razor": "html",
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "files": {
    "exclude": ["**/.git/**", "**/node_modules/**", "**/.hg/**", "**/.svn/**"]
  },
  "emmetCompletions": false,
  "classAttributes": ["class", "className", "ngClass", "tw"],
  "colorDecorators": false,
  "showPixelEquivalents": true,
  "rootFontSize": 16,
  "hovers": true,
  "suggestions": true,
  "codeActions": true,
  "validate": true,
  "lint": {
    "invalidScreen": "error",
    "invalidVariant": "error",
    "invalidTailwindDirective": "error",
    "invalidApply": "error",
    "invalidConfigPath": "error",
    "cssConflict": "warning",
    "recommendedVariantOrder": "warning"
  },
  "experimental": {
    "configFile": null,
    "classRegex": [
      "tw`([^`]*)",
      "tw=\"([^\"]*)",
      "tw={\"([^\"}]*)",
      "tw\\.\\w+`([^`]*)",
      "tw\\(.*?\\)`([^`]*)"
    ]
  }
}
```
