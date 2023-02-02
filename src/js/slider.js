$(document).ready(function() {
  $('#sertificates-slider').owlCarousel({
    loop: true,
    margin:28,
    nav:true,
    items: 5,
    navText:[
         '<img src="./src/image/left.svg" alt="">',
         '<img src="./src/image/right.svg" alt="">'
      ],
      

  });

  $('.products-slider').owlCarousel({
    dots: false,
    loop: true,
    margin:28,
    nav:true,
    items: 5,
    navText:[
         '<img src="./src/image/left.svg" alt="">',
         '<img src="./src/image/right.svg" alt="">'
      ],
      

  });
});