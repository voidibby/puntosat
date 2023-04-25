const navBar = document.getElementsByClassName("navigation")[0]
const navButton = document.getElementsByClassName("navigation__button")[0]
const navButtonOpen = navButton.getElementsByClassName("navigation__button__open")[0]
//const navButtonClose = navButton.getElementsByClassName("navigation__button__close")[0]
const navLinks = document.getElementsByClassName("navigation__links--mobile")[0]
const navTitle =
  document.getElementsByClassName("navigation__header")[0].childNodes[1].childNodes[3]

let navOpen = false
const openNav = () => {
  navButtonOpen.classList.toggle("navigation__button--is-hidden")
  //navButtonClose.classList.toggle("navigation__button--is-hidden")
  navLinks.classList.toggle("navigation__links--mobile--is-visible")
  navTitle.style.opacity = 0
}
const closeNav = () => {
  navButtonOpen.classList.toggle("navigation__button--is-hidden")
  //navButtonClose.classList.toggle("navigation__button--is-hidden")
  navLinks.classList.toggle("navigation__links--mobile--is-visible")
  navTitle.style.opacity = 1
}
const handleButton = () => {
  navOpen = !navOpen
  if (navOpen) {
    openNav()
  } else {
    closeNav()
  }
}

// https://stackoverflow.com/questions/56324813/how-to-detect-touch-device-in-2019
// const touch = matchMedia("(hover: none)").matches
const mouse = matchMedia("(hover: hover)").matches

const body = document.getElementsByTagName("body")[0]
const text = document.getElementById("screen-width-text")

window.onload = () => {
  // text.innerText = body.clientWidth

  if (window.innerWidth < 768 || !mouse) {
    navButton.addEventListener("click", handleButton)
  }
}

window.onresize = (event) => {
  // text.innerText = body.clientWidth

  if (window.innerWidth < 768) {
    navButton.addEventListener("click", handleButton)
  } else {
    navButton.removeEventListener("click", handleButton)
    if (navOpen) {
      closeNav()
      navOpen = false
    }
  }
}

/*
  ~~ NAVIGATION BUTTON ANIMATION ~~
*/

const clean = (node) => {
  for (var n = 0; n < node.childNodes.length; n++) {
    var child = node.childNodes[n]
    if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
      node.removeChild(child)
      n--
    } else if (child.nodeType === 1) {
      clean(child)
    }
  }
}

clean(navButtonOpen)

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const buttonDots = navButtonOpen.childNodes
let previousDotIndex
let randomDotIndex

const colorRandomDot = () => {
  if (randomDotIndex == undefined) {
    randomDotIndex = getRandomInt(0, buttonDots.length)
  } else {
    while (randomDotIndex == previousDotIndex) {
      randomDotIndex = getRandomInt(0, buttonDots.length)
    }
  }

  if (previousDotIndex != undefined) {
    buttonDots[previousDotIndex].classList.toggle("navigation__button__open--colored-dot")
  }
  buttonDots[randomDotIndex].classList.toggle("navigation__button__open--colored-dot")

  previousDotIndex = randomDotIndex

  setTimeout(() => {
    colorRandomDot()
  }, 2000)
}

colorRandomDot()

const listColors = () => {
  const colorArr = []
  for (let i = 100; i >= 0; i--) {
    let opacity = parseInt((i / 100) * 255).toString(16)
    if (opacity.length < 2) {
      opacity = "0".concat(opacity)
    }
    let index = i.toLocaleString(undefined, { minimumIntegerDigits: 2 })
    colorArr.push(`$light-contrast-color-${index}: #ffffff${opacity};`)
  }
  return colorArr.join("\n")
}
