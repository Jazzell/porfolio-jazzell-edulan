$(document).ready(function () {
  $('[tool-tip-toggle="tooltip-demo"]').tooltip({
    placement: "bottom",
  });
});
//Project Page
$(document).ready(function () {
  let $btns = $("#header-sub .button-group button");

  $btns.click(function (e) {
    $("#header-sub .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#header-sub .grid").isotope({
      filter: selector,
    });

    return false;
  });

  $("#header-sub .button-group #btn1").trigger("click");

  $("#header-sub .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
});
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});

//End Skills page

//Background - Particles
particlesJS("particles-js", {
  particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

//For Education Page
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  slidesPerColumn: 4,
  spaceBetween: 30,
  slidesPerColumnFill: "column",

  pagination: {
    el: ".swiper-pagination",
  },
});

//Page Transition
//Initiate WOW js
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // change this if you are not using animate.css
  offset: 0, // default
  mobile: true, // keep it on mobile
  live: true, // track if element updates
});
wow.init();

