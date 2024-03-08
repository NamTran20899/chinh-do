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
  autoPlay: false,
  lazyLoad: true,
  imagesLoaded: true,
});
var $carousel = $(".sect-carousel").flickity();
$(".sect-btn-group").on("click", ".carousel-cell-btn", function () {
  var index = $(this).index();
  $carousel.flickity("select", index);
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
