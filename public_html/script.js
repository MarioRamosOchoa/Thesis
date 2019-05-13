// Javascript for main pages, excluding calendar.
$(document).ready(function() {
  // Transition effect for navbar
  $('.navbar').css("opacity", ".5");
  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({
      scrollTop: pos
    });
  });

  // On scroll, transition navbar from transparent to white and back again.
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(window).width() >= 960) {
      if ($(this).scrollTop() >= 50) {
        $('.navbar').css("background", "rgba(255, 255, 255, 1)");
        $('.navbar-light .navbar-nav .nav-link').css("color", "black");
        $('.navbar').css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2)");
      } else {
        $('.navbar').css("background", "rgba(255, 255, 255, 0.0)");
        $('.navbar-light .navbar-nav .nav-link').css("color", "white");
        $('.navbar').css("box-shadow", "none");
      }
    } else {
      $('.navbar-light .navbar-nav .nav-link').css("color", "black");
    }
  });

  // If window is resized to be mobile view, change the navbar text to black. This is bugfix for the scroll function above.
  $(window).on('resize', function() {
    if ($(window).width() <= 992) {
      $('.navbar-light .navbar-nav .nav-link').css("color", "black");
    }
  });

  // Same as the function above.
  $(function() {
    if ($(window).width < 960) {
      $('.navbar-light .navbar-nav .nav-link').css("color", "black");
    }
  })

  // Function to replace .content class with all terms on button click
  $(".all-terms").click(function() {
    if (!event.detail || event.detail == 1) {
      $('.content').animate({
        'opacity': 0
      }, 500, function() {
        $(this).load('all-terms.html');
      }).animate({
        'opacity': 1
      }, 1000);
    }
  });

  // Function to replace .content class with terms A-E on button click
  $(".A-E").click(function() {
    if (!event.detail || event.detail == 1) {
      $('.content').animate({
        'opacity': 0
      }, 500, function() {
        $(this).load('A-E.html');
      }).animate({
        'opacity': 1
      }, 1000);
    }
  });

  // Function to replace .content class with terms F-O on button click
  $(".F-O").click(function() {
    if (!event.detail || event.detail == 1) {
      $('.content').animate({
        'opacity': 0
      }, 500, function() {
        $(this).load('F-O.html');
      }).animate({
        'opacity': 1
      }, 1000);
    }
  });

  // Function to replace .content class with terms P-Z on button click
  $(".P-Z").click(function() {
    if (!event.detail || event.detail == 1) {
      $('.content').animate({
        'opacity': 0
      }, 500, function() {
        $(this).load('P-Z.html');
      }).animate({
        'opacity': 1
      }, 1000);
    }
  });
});
