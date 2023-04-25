const Image = require("./Image")

function ImageSlider(projectImages) {
  let imageElements = ""
  let fullImageElements = ""
  let isPortrait = ""

  projectImages.forEach((image) => {
    isPortrait = Image(image.path, "", "30%").includes("portrait")
    imageElements += `
    <div class="slider-image-wrapper">
      <div class="slider-image-container ${
        isPortrait ? "slider-image-container-portrait" : "slider-image-container-landscape"
      }">
        ${Image(image.path, image.alt, "30%")}
      </div>
     </div>
    `
  })

  projectImages.forEach((image) => {
    fullImageElements += `
    <div class="lightbox__image">
      <div class="lightbox__image__element">
        ${Image(image.path, "", "90%")}
        <p>${image.alt}</p>
      </div>
    </div>
    `
  })

  const ImageSliderElement = `
    <div class="slider-wrapper">
      <div class="slider-container">
        <div class="slider-arrow-container left-arrow left-arrow-slider">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 35L12.5172 20L27 5" />
          </svg>
        </div>
        <div class="slider-arrow-container right-arrow right-arrow-slider">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5L27.4828 20L13 35" />
          </svg>
        </div>
        <div class="slider">${imageElements}</div>
      </div>
      <div class="lightbox">
        <svg class="lightbox__button-close" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5L20 20M20 20L35 35M20 20L35 5M20 20L5 35" />
        </svg>
        <div class="lightbox__arrow lightbox__arrow--left">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 35L12.5172 20L27 5" />
          </svg>
        </div>
        <div class="lightbox__arrow lightbox__arrow--right">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5L27.4828 20L13 35" />
          </svg>
        </div>
        <div class="lightbox__slider" tabindex="-1">${fullImageElements}</div>
      </div>
    </div>
    `

  return ImageSliderElement
}

module.exports = ImageSlider
