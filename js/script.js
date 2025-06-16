$(document).ready(function () {

  $(".map-info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    speed: 800,
  });

  $(".center-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '200px',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '20px',
        }
      }
    ]
  });

  $(".info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    cssEase: "ease-in-out",
    speed: 800,
    prevArrow: $(".info-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".info-slider-wrap .slider-navigation .slick-next"),
  });

  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    cssEase: "ease-in-out",
    speed: 800,
    fade: true,
  });

  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      // Активная кнопка
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      const tabId = button.getAttribute('data-tab');
  
      // Скрыть все табы
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
  
      // Показать активный
      document.getElementById(tabId).classList.add('active');
    });
  });

  $(".information-slider").each(function (index, element) {
    const $slider = $(element); // текущий слайдер
    const $wrap = $slider.closest(".information-slider-wrap"); // обертка, где находятся стрелки
  
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      cssEase: "ease-in-out",
      speed: 800,
      prevArrow: $wrap.find(".slider-navigation .slick-prev"),
      nextArrow: $wrap.find(".slider-navigation .slick-next"),
    });
  });

  $('.accordion').each(function () {
    var accordion = $(this);
    
    accordion.find('.accordion-header').on('click', function () {
      var item = $(this).closest('.accordion-item');

      if (!item.hasClass('active')) {
        accordion.find('.accordion-item').removeClass('active').find('.accordion-body').slideUp(300);
        item.addClass('active').find('.accordion-body').slideDown(300);
      } else {
        item.removeClass('active').find('.accordion-body').slideUp(300);
      }
    });
  });

  $(".tab-menu li a").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });
  
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
    ],
  });



  $(".technology-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    cssEase: "ease-in-out",
    speed: 800,
    prevArrow: $(".technology-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".technology-slider-wrap .slider-navigation .slick-next"),
  });

  $(".club-house-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: $(".club-house-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".club-house-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  })

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".header-menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
});

  $(".scroll").smoothScroll({
    speed: 1000,
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".logotype", {
    y: 100, 
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".home-babnner",   
      start: "top top",
      end: "+=300",   
      scrub: true      
    }
  });

  gsap.to(".club-house", {
    y: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".club-house",
      start: "top 80%",
      end: "top 60%",   
      scrub: true      
    }
  });

  gsap.to(".advantages", {
    y: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".advantages",
      start: "top 80%",
      end: "top 60%",     
      scrub: true        
    }
  });

  gsap.to(".information", {
    y: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".information",
      start: "top 80%",
      end: "top 60%",      
      scrub: true         
    }
  });

  gsap.to(".technology", {
    y: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".technology",
      start: "top 80%",
      end: "top 60%",      
      scrub: true         
    }
  });

  gsap.to(".planing-image", {
    y: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".planing-image",
      start: "top 80%",
      end: "top 60%",      
      scrub: true         
    }
  });

  gsap.utils.toArray(".fon-wrap").forEach((el) => {
    gsap.to(el, {
      y: 0,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 60%",
        scrub: true
      }
    });
  });



  AOS.init();
});
