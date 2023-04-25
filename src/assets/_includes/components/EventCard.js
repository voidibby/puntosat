const Image = require("./Image")

function EventCard(title, details, url) {
  const { thumbnailImage } = details[0]
  const { from } = details[1]
  const { to } = details[2]
  const { textPreview } = details[3]

  let EventCardElement = `
    <li class="upcoming-events__element">
      <div class="upcoming-events__image">${Image(thumbnailImage, "thumbnail", "30vh")}</div>
      <div class="upcoming-events__details" data-expanded="false">
        <h5>
          ${from} ${to ? `– ${to}` : ``}
        </h5>
        <a href="${url}">
          <h2>${title}</h2>
        </a>
        <p class="upcoming-events__details__description">${textPreview}</p>
        <div class="upcoming-events__expand-button" data-overflow="false">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 13L20 27.4828L5 13" />
          </svg>
        </div>
      </div>
    </li>
    `

  return EventCardElement
}

module.exports = EventCard
