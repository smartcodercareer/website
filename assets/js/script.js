(function() {
  "use strict";

  if (WOW) {
    new WOW().init();
  }

  // Portfolio tabs
  // var portfoliolist = document.getElementById('portfoliolist');
  // var portfoliolist = document.querySelector('.portfolio_tabs');
  // if (portfoliolist) {
  //   mixitup(portfoliolist, {
  // controls: {
  //   scope: 'local'
  // },
  // selectors: {
  // target: '.portfolio'
  // },
  // load: {
  //   filter: '.designs, .development, .seo, .marketing'
  // }
  // }); //.filter('.filter');
  // }

  // var portfoliolist1 = document.querySelectorAll('#portfoliolist1');
  // if (portfoliolist1.length) {
  //   mixitup(portfoliolist1, {
  //     selectors: {
  //       target: '.portfolio'
  //     },
  //     load: {
  //       filter: '.yoga, .fitness, .gym, .running'
  //     }
  //   }).filter('.filter');
  // }

  // var portfoliolist2 = document.querySelectorAll('#portfoliolist2');
  // if (portfoliolist2.length) {
  //   mixitup(portfoliolist2, {
  //     selectors: {
  //       target: '.portfolio'
  //     },
  //     load: {
  //       filter: '.breakfast, .lunch, .dinner, .snack'
  //     }
  //   }).filter('.filter');
  // }

  // var portfoliolist3 = document.querySelectorAll('#portfoliolist3');
  // if (portfoliolist3.length) {
  //   mixitup(portfoliolist3, {
  //     selectors: {
  //       target: '.portfolio'
  //     },
  //     load: {
  //       filter: '.cardiology, .dental, .surgeries, .patology'
  //     }
  //   }).filter('.filter');
  // }

  function mainSlider() {
    var BasicSlider = $('.banner_slider');
    BasicSlider.on('init', function(e, slick) {
      var $firstAnimatingElements = $('.b_slide').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.b_slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }

  mainSlider();

  $(function() {
    // header Fixed class
    $(window).on("scroll", function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 2) {
        $(".main_header.with-transition").addClass("dark_bg");
      } else {
        $(".main_header.with-transition").removeClass("dark_bg");
      }
    });

    // header Menu Scroll down js
    $(window).on("scroll", function(){
      var scrollPos = $(window).scrollTop();
      $('.main_menu_list li a').on("each", function(){
        var currentElement = $(this);
        var currentTop =  $($(this).attr('href')).offset().top - 80;
        var currentHeight = $(currentElement.attr("href")).outerHeight();
        if ( currentTop <= scrollPos && (currentTop + currentHeight) > scrollPos ) {
          $(currentElement).parent().siblings().find('a').removeClass('active');
          $(currentElement).addClass('active');
        }
        else{
          $(currentElement).removeClass('active');
        }
      });
    });

    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top - 77,
        },
        500,
        'linear'
      )
    });

    // Scroll up js
    $(window).on("scroll", function(){
      if ($(this).scrollTop() >= 50) {
        $('.scrollUp').fadeIn(200);
      } else {
        $('.scrollUp').fadeOut(200);
      }
    });

    $('.scrollUp').on('click', function() {
      $('body,html').animate({
        scrollTop : 0
      }, 800);
    });

    // Counter js
    // $(window).scroll(startCounter);
    // function startCounter() {
    //   var hT = jQuery('.love_counter').offset().top,
    //       hH = jQuery('.love_counter').outerHeight(),
    //       wH = jQuery(window).height();
    //   if (jQuery(window).scrollTop() > hT+hH-wH) {
    //     jQuery(window).off("scroll", startCounter);
    //     jQuery('.love_count').each(function () {
    //       var $this = jQuery(this);
    //       jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    //         duration: 2000,
    //         easing: 'swing',
    //         step: function () {
    //           $this.text(Math.ceil(this.Counter) );
    //         }
    //       });
    //     });
    //   }
    // }

    // Loader Js
    $(window).on("load", function(){
      $(".loader").fadeOut("slow");
    });


    // go down
    $(".go_down_arrow i.fa,.sliding_link").on('click', function() {
      $('html, body').animate({
        scrollTop: $("#main_body").offset().top
      }, 800);
    });


    // banner slider js
    $('.banner_slider').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      // fade:true,
      slidesToShow: 1,
      arrows:false,
      autoplay:true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false,
          }
        }
      ]
    })


    // porfloio slider  js
    $('.porfloio_slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      // fade:true,
      slidesToShow: 1,
      arrows:true,
      autoplay:true,
      slidesToScroll: 1
    })


    // Teams slider js
    $('.team_list').slick({
      dots: false,
      infinite: true,
      speed: 500,
      // fade:true,
      slidesToShow: 4,
      arrows:true,
      autoplay:true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })

    // related items slider js
    // $('.related_items_slider').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   arrows:false,
    //   autoplay:true,
    //   slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 991,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //       }
    //     },
    //     {
    //       breakpoint: 767,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     },
    //     {
    //       breakpoint: 479,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // })

    // testimonials slider  js
    $('.testi_slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      arrows:false,
      autoplay:true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })

    // Partners slider  js
    $('.partners_slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      arrows:false,
      autoplay:true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })

    // Main Slider Slide animation
    // if ($(".b_slide").hasClass(".slick-active") ) {
    //   $(this).find(".wow").removeClass('wow');
    // }

    $(document).ready(function () {
      // scroll Down js
      $('.scroll_down').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({scrollTop: $('#about').offset().top - 77, },'slow')
      });

      $( ".sliding_link" ).on("click", function( event ){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
      });

      // portfolio popup js
      $('#portfoliolist .portfolio_item, #portfoliolist1 .portfolio_item, .galleryList .gallery_item').magnificPopup({
        delegate: 'a',
        gallery: {
          enabled: true
        },
        type: 'image'
      });

      // // portfolio popup js
      // $('.get_quote').magnificPopup({});


      // $('.open-popup-link').magnificPopup({
      //   type:'inline',
      //   midClick: true
      // });

      // mobile menu toggle
      // $(".menu-bar").on('click', function() {
      //   $(this).addClass('active');
      //   $('.main_menu').addClass('opened');
      // });
      // $(".close_menu").on('click', function() {
      //   $('.menu-bar').removeClass('active');
      //   $('.main_menu').removeClass('opened');
      // });
    });
  });
})();
