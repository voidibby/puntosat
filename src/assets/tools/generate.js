const { generateTemplateFiles } = require("generate-template-files")
const config = require("../../../package.json")

generateTemplateFiles([
  {
    option: "create event element",
    defaultCase: "(nocase)",
    entry: {
      folderPath: "./src/assets/tools/templates/event-template.md",
    },
    stringReplacers: [
      { question: "Insert event title", slot: "_title" },
      { question: "Insert event date (YYYY-MM-DD)", slot: "_date" },
      { question: "Insert event thumbnail image name (example.jpg)", slot: "_thumbnailImage" },
      { question: "Insert event start date (DD.MM.YY)", slot: "_from" },
      { question: "Insert event end date (DD.MM.YY)", slot: "_to" },
      { question: "Insert event preview text", slot: "_textPreview" },
    ],
    output: {
      path: "./src/calendar/_title(lowerCase).md",
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
  },
  {
    option: "create work element",
    defaultCase: "(nocase)",
    entry: {
      folderPath: "./src/assets/tools/templates/work-template.md",
    },
    stringReplacers: ["__store__", "__model__"],
    dynamicReplacers: [
      { slot: "__version__", slotValue: config.version },
      { slot: "__description__", slotValue: config.description },
    ],
    output: {
      path: "./src/works/_title(lowerCase).md",
      pathAndFileNameDefaultCase: "(kebabCase)",
    },
    onComplete: (results) => {
      console.log(`results`, results)
    },
  },
])
