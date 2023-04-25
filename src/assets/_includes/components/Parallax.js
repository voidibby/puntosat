const Image = require("@11ty/eleventy-img")
const path = require("path")

async function getCSSImage(src) {
  src = `./src/assets/images/${src}`
  let options = await Image(src, {
    widths: [4800],
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
  })
  // console.log(options.webp[0].url)
  return options.webp[0].url
}

async function Parallax(src) {
  const imageURL = await getCSSImage(src)

  return `
  <div class="parallax" style="background-image: url(${imageURL})">
  </div>
  `
}

module.exports = Parallax
