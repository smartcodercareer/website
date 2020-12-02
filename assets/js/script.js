import { debounce } from "./common"

const header = document.querySelector("header.header");

const scrollHandler = debounce(function () {
  console.log("test")
  if (window.scrollY) {
    header.classList.add("scrolled");

  } else {
    header.classList.remove("scrolled");
  }
}, 30)

document.addEventListener("scroll", scrollHandler);

scrollHandler();

// if (IntersectionObserver) {
//   let options = {
//     root: document.body,
//     rootMargin: "0px",
//     treshold: 1.0
//   };

//   let observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       console.log(entry)

//     })}, options);
// }

// (function() {
//   "use strict";

// $(function() {
// header Fixed class
// if ($(".dynamic-header .main_header").length) {
//   $(window).on("scroll", function(){
//     var scroll = $(window).scrollTop();
//     if (scroll >= 2) {
//       $(".dynamic-header .main_header").addClass("dark_bg");
//     } else {
//       $(".dynamic-header .main_header").removeClass("dark_bg");
//     }
//   });
// }

// header Menu Scroll down js
// $(window).on("scroll", function(){
//   var scrollPos = $(window).scrollTop();
//   $('.main_menu_list li a').on("each", function(){
//     var currentElement = $(this);
//     var currentTop =  $($(this).attr('href')).offset().top - 80;
//     var currentHeight = $(currentElement.attr("href")).outerHeight();
//     if ( currentTop <= scrollPos && (currentTop + currentHeight) > scrollPos ) {
//       $(currentElement).parent().siblings().find('a').removeClass('active');
//       $(currentElement).addClass('active');
//     }
//     else{
//       $(currentElement).removeClass('active');
//     }
//   });
// });

// $('a[href^="#"]').on('click', function(e) {
//   e.preventDefault()

//   $('html, body').animate(
//     {
//       scrollTop: $($(this).attr('href')).offset().top - 77,
//     },
//     1000,
//     'linear'
//   )
// });

// Scroll up js
// $(window).on("scroll", function(){
//   if ($(this).scrollTop() >= 50) {
//     $('.scrollUp').fadeIn(200);
//   } else {
//     $('.scrollUp').fadeOut(200);
//   }
// });

// $('.scrollUp').on('click', function() {
//   $('body,html').animate({
//     scrollTop : 0
//   }, 800);
// });

// Loader Js
// $(window).on("load", function(){
//   $(".loader").fadeOut("slow");
// });

// go down
// $(".go_down_arrow i.fa, .sliding_link").on('click', function() {
//   $('html, body').animate({
//     scrollTop: $("#main_body").offset().top
//   }, 800);
// });


// $(document).ready(function () {
//   // scroll Down js
// $('.scroll_down').on('click', function(e) {
//   e.preventDefault()
//   $('html, body').animate({scrollTop: $('#about').offset().top - 77, },'slow')
// });

// $( ".sliding_link" ).on("click", function( event ){
//   event.preventDefault();
//   $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 800);
// });

// portfolio popup js
// $('#portfoliolist .portfolio_item, #portfoliolist1 .portfolio_item, .galleryList .gallery_item').magnificPopup({
//   delegate: 'a',
//   gallery: {
//     enabled: true
//   },
//   type: 'image'
// });

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
// $(".close_menu, .nav-link").on('click', function() {
//   $('.menu-bar').removeClass('active');
//   $('.main_menu').removeClass('opened');
// });
// });
// });
// })();
