$(function () {

  $('.slider_inner, .news_slider_inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header_btn-menu').on('click', function () {
    $('.menu ul').slideToggle();
  });

  const $scrollBtn = $('#scrollTopBtn');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 900) {
      $scrollBtn.fadeIn(300); // Плавное появление
    } else {
      $scrollBtn.fadeOut(300); // Плавное исчезновение
    }
  });

  $scrollBtn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 200); // Плавный скролл наверх
  });




});