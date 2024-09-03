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

  $('.copy-btn').on('click', function() {
    console.log('click');
    var codeBlock = $(this).parent().find('code').text();
    console.log(codeBlock);

    // Copy codeBlock to clipboard
    navigator.clipboard.writeText(codeBlock).then(() => {
        var icon = $(this).find('i');

        // Replace the copy icon with the check icon
        icon.removeClass('fa-copy').addClass('fa-check');

        // After 1 second, revert back to the copy icon
        setTimeout(function() {
            icon.removeClass('fa-check').addClass('fa-copy');
        }, 1000);
    });
  });

  $(".wallet-copy").on('click', function() {
    var wallet = "bc1qk837uakg4f0vrpypc3drnhxln5rphnvj02c2hy";

    navigator.clipboard.writeText(wallet).then(() => {
      var icon = $(this).find('i');

      // Replace the copy icon with the check icon
      icon.removeClass('fa-copy').addClass('fa-check');

      // After 1 second, revert back to the copy icon
      setTimeout(function() {
          icon.removeClass('fa-check').addClass('fa-copy');
      }, 1000);
    });
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

// var months = [
//   "Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Aout", "Sep", "Oct", "Nov", "Dec"
// ];

// var daysOfWeekShort = [
//   "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
// ];

// var daysOfWeek = [
//   "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
// ];

// var today = new Date();
// var oneYearAgo = new Date();
// oneYearAgo.setFullYear(today.getFullYear() - 1);

// var currentMonth = -1;

// var weeks = Math.floor((today - oneYearAgo) / (7 * 24 * 60 * 60 * 1000));

// $.ajax({
//   url: "https://git.isee-u.fr/users/jules/calendar.json",
//   dataType: "json",
//   success: function (data) {
//     for (var i = 0; i < weeks; i++) {
//       var weekDiv = $('<div class="week"></div>');
//       if (oneYearAgo.getMonth() !== currentMonth) {
//         currentMonth = oneYearAgo.getMonth();
//         weekDiv.append('<div class="month">' + months[currentMonth] + '</div>');
//       }
//       for (var j = 0; j < 7; j++) {
//         var dayDiv = $('<div class="day"></div>');
//         dayDiv.data("date", new Date(oneYearAgo));
//         var formattedDate = oneYearAgo.toISOString().split('T')[0];
//         var commitCount = data[formattedDate] || 0;

//         if (commitCount === 0) {
//             dayDiv.addClass("gray");
//         } else if (commitCount >= 1 && commitCount <= 9) {
//             dayDiv.addClass("light-blue");
//         } else if (commitCount >= 10 && commitCount <= 19) {
//             dayDiv.addClass("medium-blue");
//         } else if (commitCount >= 20 && commitCount <= 29) {
//             dayDiv.addClass("dark-blue");
//         } else {
//             dayDiv.addClass("very-dark-blue");
//         }

//         var date = dayDiv.data("date");
//         var str = "Jour: " + daysOfWeek[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + "\n" + "Commits: " + commitCount;;

//         // Add a tooltip
//         dayDiv.attr("title", str);


//         weekDiv.append(dayDiv);
//         oneYearAgo.setDate(oneYearAgo.getDate() + 1);
//       }
//       $('#weeks-container').append(weekDiv);
//     }
//   }
// });
