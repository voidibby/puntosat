const path = require("path")
const EleventyImage = require("@11ty/eleventy-img")

function Image(src, alt, sizes = "100vw") {
  src = `./src/assets/images/${src}`
  // console.log(`Generating image(s) from:  ${src}`)

  let options = {
    widths: [500, 800, 1200, 2400, 4800],
    formats: ["webp"],
    urlPath: "/assets/images/",
    outputDir: "./_site/assets/images/",
    filenameFormat: function (id, src, width, format, options) {
      // id: hash of the original image
      // src: original image path
      // width: current width in px
      // format: current file format
      // options: set of options passed to the Image call

      const extension = path.extname(src)
      const name = path.basename(src, extension)
      return `${name}-${width}w.${format}`
    },
  }

  // generate images
  EleventyImage(src, options)

  // get metadata
  metadata = EleventyImage.statsSync(src, options)

  let orientation = ""
  if (metadata.webp[0].width > metadata.webp[0].height) {
    orientation = "landscape"
  } else {
    orientation = "portrait"
  }

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    class: `${orientation}`,
  }
  return EleventyImage.generateHTML(metadata, imageAttributes)
}

module.exports = Image
