//=== aboutme pop ===//
$('.about_me').click(function () {
  $('.aboutme_more').addClass('on2');
});

$('.aboutme_more .x_btn').click(function () {
  $('.aboutme_more').removeClass('on2');
});

//=== publising pop ===//
$('.publising').click(function () {
  $('.works_more').addClass('on2');
});

$('.works_more .x_btn').click(function () {
  $('.works_more').removeClass('on2');
});

//=== desigin pop ===//
$('.desigin').click(function () {
  $('.desigin_more').addClass('on2');
});

$('.desigin_more .x_btn').click(function () {
  $('.desigin_more').removeClass('on2');
});

//=== swiper slide ===//
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

var swiper = new Swiper('.swiper-container1', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
  autoplay: {
      delay:5000,
  }
});