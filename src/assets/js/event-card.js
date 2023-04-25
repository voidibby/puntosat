// const createExpandableCard = (expandButtonId, overflowContainerId) => {
const createExpandableCard = (cardElement) => {
  let expandButton = null
  let overflowContainer = null
  let overflowed = false
  let expanded = false

  const handleExpand = () => {
    expanded = !expanded
    if (overflowContainer.dataset.expanded == "false") {
      overflowContainer.dataset.expanded = "true"
      overflowContainer.style.maxHeight = `${overflowContainer.scrollHeight + 100}px`
    } else {
      overflowContainer.dataset.expanded = "false"
      overflowContainer.removeAttribute("style")
    }
  }

  const checkOverflow = () => {
    if (overflowContainer.scrollHeight > overflowContainer.clientHeight) {
      overflowed = true
      expandButton.dataset.overflow = "true"
    }
  }

  const handleClickOut = (event) => {
    if (expanded && expandButton && !expandButton.contains(event.target)) {
      expanded = false
      overflowContainer.removeAttribute("style")
      overflowContainer.dataset.expanded = "false"
    }
  }

  const addEventListeners = () => {
    document.addEventListener("click", handleClickOut)
    expandButton.addEventListener("click", handleExpand)
    //document.addEventListener("scroll", handleClickOut);
  }

  const removeEventListeners = () => {
    document.removeEventListener("click", handleClickOut)
    //document.removeEventListener("scroll", handleClickOut);
  }

  expandButton = cardElement.getElementsByClassName("upcoming-events__expand-button")[0]
  overflowContainer = cardElement.getElementsByClassName("upcoming-events__details")[0]

  checkOverflow()
  addEventListeners()

  return {}
}

const cardElements = document.getElementsByClassName("upcoming-events__element")
for (let i = 0; i < cardElements.length; i++) {
  createExpandableCard(cardElements[i])
}
