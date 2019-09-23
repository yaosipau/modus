$('.slider-container').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
$('.clients-slider-block').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
$(function () {
  var len = $('.clients-slider-block .slick-dots li button').length;
  for (var i = 0; i < len; i++){
     $('.clients-slider-block .slick-dots li button')[i].style.backgroundImage = "url(pic/"+(i+10)+".jpg)";   
  };
});   

$('nav div').click(function() {
  $('ul').slideToggle();
  $('ul ul').css("display","none");
});
$('ul li').click(function() {
  $(this).find('ul').slideToggle();
  $(this).find('a').not($('ul ul li a')).toggleClass('active');
  $(this).siblings().find('ul').slideUp();
  $(this).siblings().find('a').removeClass('active');
});
$(window).resize(function() {
  if ($(window).width() > 768) {
    $("ul").removeAttr('style');
  }
})
