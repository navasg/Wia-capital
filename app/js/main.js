wow = new WOW({
  animateClass: 'animated',
  mobile: false,
  offset: 100,
});
wow.init();

var bLazy = new Blazy({
  selector: 'img' // all images
});

$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

// $('.dropdown-toggle').dropdown()

//menu drop
$(document).ready(function () {
  $('.navbar .dropdown').hover(function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
  }, function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150)
  });
});


// Menú fixed
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 768)) {
    $('.navbar-fixed-js').addClass('fixed');
    $('.nav-link').addClass('fixed-color');
    $('.nav-top__header').addClass('nav-top__header--detele');
    $('.main-brand__fixed').css('display', 'initial');
    $('.main-brand__top').css('display', 'none');
    $('nav > div > div.navbar-collapse.offcanvas-collapse > ul > li:nth-child(8) > a').addClass('contact')
    // $("#iso").addClass('img-size').attr('src', 'assets/img/logo-white.jpg').removeClass('scroll-up');

  } else {
    $('nav > div > div.navbar-collapse.offcanvas-collapse > ul > li:nth-child(8) > a').removeClass('contact')
    $('.main-brand__top').css('display', 'initial')
    $('.main-brand__fixed').css('display', 'none')
    $('.navbar-fixed-js').removeClass('fixed');
    $('.nav-link').removeClass('fixed-color');
    $('.nav-top__header').removeClass('nav-top__header--detele');
    // $("#iso").removeClass('img-size').attr('src', 'assets/img/logo-fvr.jpg').removeClass('scroll-up');

  }
});


// $('ul.nav li.dropdown').hover(function () {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
// }, function () {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
// });

$('.nav-link-p').click(function () {
  $('.offcanvas-collapse').removeClass('open');
})

$(".hamburger").on("click", function () {
  $(this).toggleClass("is-active");
});


// $(document).ready(function () {
//   // Add smooth scrolling to all links
//   $("a").on('click', function (event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function () {

//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });




document.querySelector("html").classList.add('js');

var fileInput = document.querySelector(".input-file"),
  button = document.querySelector(".input-file-trigger"),
  the_return = document.querySelector(".file-return");

button.addEventListener("keydown", function (event) {
  if (event.keyCode == 13 || event.keyCode == 32) {
    fileInput.focus();
  }
});
button.addEventListener("click", function (event) {
  fileInput.focus();
  return false;
});
fileInput.addEventListener("change", function (event) {
  the_return.innerHTML = this.value;
});

// Font
$(document).ready(function () {
  WebFontConfig = {
    google: {
      families: ['Poppins:400,500,700,800,900']
    }
  };
  (function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
});


// $(document).ready(function () {
//   $(".dropdown").hover(
//     function () {
//       $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("8000");
//       $(this).toggleClass('open');
//     },
//     function () {
//       $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("8000");
//       $(this).toggleClass('open');
//     }
//   );
// });