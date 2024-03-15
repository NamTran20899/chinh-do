// board
$(".board-carousel").flickity({
  cellAlign: "center",
  prevNextButtons: false,
  draggable: false,
  pageDots: true,
  wrapAround: true,
  autoPlay: 2500,
  lazyLoad: true,
  imagesLoaded: true,
});

// sect
$(".sect-carousel").flickity({
  cellAlign: "center",
  prevNextButtons: false,
  draggable: false,
  pageDots: false,
  wrapAround: true,
  lazyLoad: true,
  imagesLoaded: true,
  autoPlay: 1500,
});

var $carousel = $(".sect-carousel").flickity();
// Flickity instance
var flkty = $carousel.data("flickity");
// elements
var $cellButtonGroup = $(".sect-btn");
var $cellButtons = $cellButtonGroup.find(".carousel-cell-btn");
// select cell on button click
$cellButtonGroup.on("click", ".carousel-cell-btn", function () {
  var index = $(this).index();
  $carousel.flickity("select", index);
});
// update selected cellButtons
$carousel.on("select.flickity", function () {
  $cellButtons.filter(".sect-active").removeClass("sect-active");
  $cellButtons.eq(flkty.selectedIndex).addClass("sect-active");
});

// banner-mobi
$(".banner-mobi-carousel").flickity({
  cellAlign: "center",
  prevNextButtons: false,
  draggable: false,
  pageDots: true,
  wrapAround: true,
  autoPlay: 2500,
  lazyLoad: true,
  imagesLoaded: true,
});
