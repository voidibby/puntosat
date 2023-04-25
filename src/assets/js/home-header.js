const headerImage = document.getElementsByClassName("parallax")[0]

const getNextImage = () => {}

const nextImage = () => {
  setTimeout(() => {
    nextImage()
  }, 2000)
}
