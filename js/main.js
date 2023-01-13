$(function () {
  $(".mainSlide").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true,
    fade: true,
    arrows: false,
  });

  $(".mainContent .img_box ").slick({
    slidesToShow: 4,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true,
  });

  $(".controller .xi-arrow-left").on("click", function () {
    $(".img_box").slick("slickPrev");
  });
  $(".controller .xi-arrow-right").on("click", function () {
    $(".img_box").slick("slickNext");
  });

  $('.fl .btn').on('click', function () {
    //$('.fl ul').toggle();
    //$('.fl ul').slideToggle();
    $(this).toggleClass('on');
    $(this).prev().slideToggle();
    // $(this) : 내가 클릭한 것
})

$('.secondsubconTent .menu li').on("click",function(){
  $('.secondsubconTent .menu li').removeClass('active');
  $(this).addClass("active");
});
});


