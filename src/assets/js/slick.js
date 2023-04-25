/*
const lightboxImage = document.getElementsByClassName("lightbox__image__element")[0].childNodes[1]
let pz = new PinchZoom.default(lightboxImage, {})
*/

const referenceImage = document.getElementsByClassName("slider-image-container")[0]

const lightboxImage = document.getElementsByClassName("lightbox__image__element")
for (let i = 0; i < lightboxImage.length; i++) {
  new PinchZoom.default(lightboxImage[i].childNodes[1], {
    draggableUnzoomed: false,
  })
}
/*
const lightboxImages = document.getElementsByClassName("lightbox__image")[0]
new PinchZoom.default(lightboxImages, {})
*/

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".left-arrow-slider",
    nextArrow: ".right-arrow-slider",
    /*customPaging: (i) => <div className={css.sliderDots}></div>,*/
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  })
})

$(".lightbox__slider").slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  lazyLoad: "anticipated",
  prevArrow: ".lightbox__arrow--left",
  nextArrow: ".lightbox__arrow--right",
})

$(".slider-image-wrapper").on("click", function () {
  let index = $(this).attr("data-slick-index")
  $(".lightbox__slider").slick("slickGoTo", index)
  $(".slider-image-wrapper").blur()

  $(body).addClass("body--modal-is-open")
  $(".lightbox").addClass("lightbox--is-open")
})
$(".lightbox").on("click", function () {
  if (event.target.tagName == "IMG" && window.innerWidth > 768) {
    $(body).removeClass("body--modal-is-open")
    $(".lightbox").removeClass("lightbox--is-open")
  }
})

$(".lightbox__button-close").on("click", function () {
  $(body).removeClass("body--modal-is-open")
  $(".lightbox").removeClass("lightbox--is-open")
})

$(document).keydown(function (e) {
  if ($(".lightbox").hasClass("lightbox--is-open")) {
    if (e.keyCode == 39) {
      $(".lightbox__slider").slick("slickNext")
    } else if (e.keyCode == 37) {
      $(".lightbox__slider").slick("slickPrev")
    } else if (e.keyCode == 27) {
      $(body).removeClass("body--modal-is-open")
      $(".lightbox").removeClass("lightbox--is-open")
    }
  }
})
