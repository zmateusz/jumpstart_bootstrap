$(function(){
  hljs.initHighlightingOnLoad();
});

$('.scrollspy').affix({
  offset: {
    top: $('.scrollspy').offset().top
  } 
});

$('.scrollspy').on('affixed-top.bs.affix', function () {
  $('#mainnav li:first').removeClass("active");
})

$('.scrollspy').on('affix.bs.affix', function () {
  $('#mainnav li:first').addClass("active");
})