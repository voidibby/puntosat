const Image = require("./src/assets/_includes/components/Image")
const Parallax = require("./src/assets/_includes/components/Parallax")
//const EventCard = require("./src/assets/_includes/components/EventCard")
const ImageSlider = require("./src/assets/_includes/components/ImageSlider")
const Test = require("./src/assets/_includes/components/Test")
const Sass = require("eleventy-sass")

module.exports = function (eleventyConfig) {
  /*
  eleventyConfig.addTemplateFormats("scss")

  // Creates the extension for use
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    // `compile` is called once per .scss file in the input directory
    compile: async function (inputContent) {
      let result = sass.compileString(inputContent)

      // This is the render function, `data` is the full data cascade
      return async (data) => {
        return result.css
      }
    },
  })
*/

  function configureMarkdownIt() {
    // Reference: https://github.com/markdown-it/markdown-it-container/issues/23
    // https://davidea.st/articles/11ty-tips-i-wish-i-knew-from-the-start/
    return require("markdown-it")().use(require("markdown-it-container"), "dynamic", {
      validate: function () {
        return true
      },
      render: function (tokens, idx) {
        var token = tokens[idx]

        if (token.nesting === 1) {
          return '<div class="' + token.info.trim() + '">'
        } else {
          return "</div>"
        }
      },
    })
  }

  eleventyConfig.addNunjucksFilter("related", function (collection = []) {
    const { tags: requiredTags, page } = this.ctx
    return collection.filter((post) => {
      // Filter the specified collection, confirm it isn't the current page, and has all the required tags.
      // Updated to handle potentially missing `tags` properties, per https://github.com/11ty/eleventy/discussions/2534#discussioncomment-3419991 above.
      return (
        post.url !== page.url &&
        requiredTags?.slice(1).some((tag) => post.data.tags?.slice(1).includes(tag))
      )
    })
  })

  eleventyConfig.addGlobalData("currentYear", () => {
    let year = new Date().getFullYear()
    return year
  })

  eleventyConfig.setLibrary("md", configureMarkdownIt())
  eleventyConfig.addGlobalData("sitetitle", "Adriana Torres Topaga")
  eleventyConfig.addPlugin(Sass)
  eleventyConfig.addShortcode("Image", Image)
  eleventyConfig.addShortcode("Parallax", Parallax)
  //eleventyConfig.addShortcode("EventCard", EventCard)
  eleventyConfig.addShortcode("ImageSlider", ImageSlider)
  eleventyConfig.addShortcode("Test", Test)

  eleventyConfig.addPassthroughCopy({ "src/assets/resources/": "assets/resources" })
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts/": "assets/fonts" })
  eleventyConfig.addPassthroughCopy({ "src/assets/js/": "assets/js" })
  eleventyConfig.addPassthroughCopy({ "src/assets/static/favicon.svg": "/assets/favicon.svg" })

  return {
    dir: {
      input: "src",
      includes: "assets/_includes",
      layouts: "assets/_includes/layouts",
    },
  }
}
