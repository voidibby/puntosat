const languagesElement = document.getElementsByClassName("languages__element")[0]
const englishText = document.getElementsByClassName("english")[0]
const germanText = document.getElementsByClassName("german")[0]
const spanishText = document.getElementsByClassName("spanish")[0]
const languagesText = document.getElementsByClassName("languages__text")[0]

if (englishText) {
  languagesText.innerHTML = englishText.innerHTML
} else if (spanishText) {
  languagesText.innerHTML = spanishText.innerHTML
} else if (germanText) {
  languagesText.innerHTML = germanText.innerHTML
}

if (englishText && germanText && spanishText) {
  document.getElementById("en").style.visibility = "visible"
  document.getElementById("de").style.visibility = "visible"
  document.getElementById("es").style.visibility = "visible"
} else if (englishText && germanText) {
  document.getElementById("en").style.visibility = "visible"
  document.getElementById("de").style.visibility = "visible"
  document.getElementById("es").style.display = "none"
} else if (englishText && spanishText) {
  document.getElementById("en").style.visibility = "visible"
  document.getElementById("es").style.visibility = "visible"
  document.getElementById("de").style.display = "none"
} else if (germanText && spanishText) {
  document.getElementById("de").style.visibility = "visible"
  document.getElementById("es").style.visibility = "visible"
  document.getElementById("en").style.display = "none"
} else {
  document.getElementById("en").style.display = "none"
  document.getElementById("es").style.display = "none"
  document.getElementById("de").style.display = "none"
  // languagesElement.style.display = "none"
}

const displayLanguageText = (event) => {
  if (event.target.id == "de") {
    languagesText.innerHTML = germanText.innerHTML
  } else if (event.target.id == "en") {
    languagesText.innerHTML = englishText.innerHTML
  } else if (event.target.id == "es") {
    languagesText.innerHTML = spanishText.innerHTML
  }
}

for (let i = 0; i < languagesElement.childNodes.length; i++) {
  languagesElement.childNodes[i].addEventListener("click", displayLanguageText)
}
