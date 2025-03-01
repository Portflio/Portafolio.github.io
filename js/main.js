(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);


      // -------------------------------------------------

      $(document).ready(function() {
        $(".more").on("click", function() {
          // cambiar la visibilidad de complete
          $(".complete").toggle();
      
          // cambiar el texto del boton dependiendo del texto actual
          if ($(this).text() == "Leer menos...") {
            $(this).text("Leer mas...");
          } else {
            $(this).text("Leer menos...");
          }
        });
      });
    
    
       // -------------------------------------------------

      // -------------------------------------------------

$(document).ready(function() {
    $(".more1").on("click", function() {
      // cambiar la visibilidad de complete
      $(".complete1").toggle();
  
      // cambiar el texto del boton dependiendo del texto actual
      if ($(this).text() == "Leer menos...") {
        $(this).text("Leer mas...");
      } else {
        $(this).text("Leer menos...");
      }
    });
  });


   // -------------------------------------------------

         // -------------------------------------------------

$(document).ready(function() {
    $(".more2").on("click", function() {
      // cambiar la visibilidad de complete
      $(".complete2").toggle();
  
      // cambiar el texto del boton dependiendo del texto actual
      if ($(this).text() == "Leer menos...") {
        $(this).text("Leer mas...");
      } else {
        $(this).text("Leer menos...");
      }
    });
  });


   // -------------------------------------------------

            // -------------------------------------------------

$(document).ready(function() {
    $(".more3").on("click", function() {
      // cambiar la visibilidad de complete
      $(".complete3").toggle();
  
      // cambiar el texto del boton dependiendo del texto actual
      if ($(this).text() == "Leer menos...") {
        $(this).text("Leer mas...");
      } else {
        $(this).text("Leer menos...");
      }
    });
  });


   // -------------------------------------------------

               // -------------------------------------------------

$(document).ready(function() {
  $(".more4").on("click", function() {
    // cambiar la visibilidad de complete
    $(".complete4").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
  });
});


 // -------------------------------------------------

                // -------------------------------------------------

$(document).ready(function() {
  $(".more5").on("click", function() {
    // cambiar la visibilidad de complete
    $(".complete5").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
  });
});


 // -------------------------------------------------

 // -------------------------------------------------
 const links = document.querySelectorAll(".navbar-nav a");

 for (const link of links) {
   link.addEventListener("click", clickHandler);
 }
 
 function clickHandler(e) {
   e.preventDefault();
   const href = this.getAttribute("href");
   const offsetTop = document.querySelector(href).offsetTop;
 
   scroll({
     top: offsetTop,
     behavior: "smooth"
   });
 }
 // -------------------------------------------------

  // -------------------------------------------------
 // Back to top button
 $(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  return false;
});
  // -------------------------------------------------

   // -------------------------------------------------
 const linksi = document.querySelectorAll(".menume a");

 for (const linki of linksi) {
   linki.addEventListener("click", clickHandler1);
 }
 
 function clickHandler1(e) {
   e.preventDefault();
   const href = this.getAttribute("href");
   const offsetTop = document.querySelector(href).offsetTop;
 
   scroll({
     top: offsetTop,
     behavior: "smooth"
   });
 }
 // -------------------------------------------------
          // -------------------------------------------------

$(document).ready(function() {
  $(".morek1").on("click", function() {
    // cambiar la visibilidad de complete
    $(".completek1").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
  });
});


 // -------------------------------------------------

           // -------------------------------------------------

$(document).ready(function() {
  $(".morek2").on("click", function() {
    // cambiar la visibilidad de complete
    $(".completek2").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
  });
});


 // -------------------------------------------------

 
           // -------------------------------------------------

$(document).ready(function() {
  $(".morek3").on("click", function() {
    // cambiar la visibilidad de complete
    $(".completek3").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
  });
});


 // -------------------------------------------------

            // -------------------------------------------------

$(document).ready(function() {
  $(".morek4").on("click", function() {
    // cambiar la visibilidad de complete
    $(".completek4").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
  });
});


 // -------------------------------------------------

            // -------------------------------------------------

$(document).ready(function() {
  $(".morek5").on("click", function() {
    // cambiar la visibilidad de complete
    $(".completek5").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
  });
});


 // -------------------------------------------------

            // -------------------------------------------------

$(document).ready(function() {
  $(".morek6").on("click", function() {
    // cambiar la visibilidad de complete
    $(".completek6").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
  });
});


 // -------------------------------------------------