$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: 60, // Remova as aspas extras nesta linha
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /* Navigation scroll */
  $("a[href*='#']:not([href='#'])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });

  /* Animations on scroll */
  $(".js--wp-1, .js--wp-2, .js--wp-3, .js--wp-4").waypoint(
    function (direction) {
      $(this.element).addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  /* Mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });

  // Menu filter
  $("#menu-filters li a").click(function () {
    $("#menu-filters li a").removeClass("active");
    $(this).addClass("active");

    var selectedFilter = $(this).data("filter");
    $(".menu-restaurant").fadeOut();

    setTimeout(function () {
      $(selectedFilter).slideDown();
    }, 300);
  });
});

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout(execmascara, 1);
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}

function mtel(v) {
  v = v.replace(/\D/g, ""); // Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

function id(el) {
  return document.getElementById(el);
}

window.onload = function () {
  id("tel").onkeyup = function () {
    mascara(this, mtel);
  };
};
