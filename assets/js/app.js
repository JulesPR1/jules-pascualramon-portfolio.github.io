$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

$('.navbar-brand').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if(target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 20
      }, 0);
    }
  });
});


var navbarLinks = $(".nav-link[href!='#']");

$(window).scroll(function() {
  var scrollPosition = $(window).scrollTop();

  navbarLinks.each(function() {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.offset().top <= scrollPosition && refElement.offset().top + refElement.outerHeight() > scrollPosition) {
      currentLink.addClass("active");
    } else {
      currentLink.removeClass("active");
    }
  });
});
