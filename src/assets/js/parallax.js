const mapRange = (value, minInput, maxInput, minOutput, maxOutput) => {
  const inputRange = maxInput - minInput
  const outputRange = maxOutput - minOutput
  const normalizedValue = (value - minInput) / inputRange
  const mappedValue = normalizedValue * outputRange + minOutput
  return mappedValue
}

const parallax = document.getElementsByClassName("parallax")[0]
/*
  https://stackoverflow.com/questions/3098404/get-the-size-of-a-css-background-image-using-javascript
*/

let imageSrc = parallax.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, "$2").split(",")[0]
let image = new Image()
image.src = imageSrc
let height

image.onload = () => {
  let offset = window.pageYOffset
  let scrolledPercentage = offset / window.innerHeight
}

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset
  let scrolledPercentage = offset / window.innerHeight
  /*
    let opacityVals = mapRange(scrolledPercentage, 0.2, 0.8, 1, 0)
    let blurVals = mapRange(scrolledPercentage, 0.5, 1, 0, 4)
    */
  let bgPositionY = scrolledPercentage * image.height - (image.height / 2) * 0.1
  let opacityVals = mapRange(scrolledPercentage, 0, 1, 1, 0)
  let blurVals = mapRange(scrolledPercentage, 0, 1, 0, 4)
  // parallax.style.backgroundPositionY = `${offset * -0.5}px`
  parallax.style.opacity = opacityVals
  parallax.style.filter = `blur(${blurVals}px)`
  if (window.innerWidth > 768) {
    parallax.style.backgroundPositionY = `${50 - offset * -0.15}%`
  }
})
