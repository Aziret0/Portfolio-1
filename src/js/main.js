$(document).ready(function(){
    $("#home-slider").owlCarousel({
        items: 1,
        loop: true,
    });
    // Табы 
    $('ul.products-tabs__caption').on('click', 'li:not(.products-tabs__btn_active)', function() {
        $(this)
          .addClass('products-tabs__btn_active').siblings().removeClass('products-tabs__btn_active')
          .closest('div.products-tabs').find('div.products-tabs__content').removeClass('products-tabs__content_active').eq($(this).index()).addClass('products-tabs__content_active');
      });
      //burger
      $('.burger-menu').click(function(){
        $('.burger-menu').toggleClass('burger-menu_active')
        $('.nav__list').toggleClass('nav__list_active')
      });
      // laminant
      $("#laminant-slider").owlCarousel({
        items: 1,
        loop: true,
    });
  });
