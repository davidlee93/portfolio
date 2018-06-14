$(function() {
  // Scrollify options
  $.scrollify({
    section: ".divider",
    sectionName: "section-name",
    interstitialSection: ".footer",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true
  });

  $("#link-1").click(e => {
    e.preventDefault();
    $.scrollify.move("#home");
  });

  $("#link-2").click(e => {
    e.preventDefault();
    $.scrollify.move("#about");
  });

  $("#link-3").click(e => {
    e.preventDefault();
    $.scrollify.move("#projects");
  });

  $(".link-4").click(e => {
    e.preventDefault();
    $.scrollify.move("#contact");
  });

  $(".arrow").click(e => {
    e.preventDefault();
    $.scrollify.move("#about");
  });

  // Typed.js options
  const typed = new Typed("#typing-prompt", {
    strings: [
      "",
      "full-stack developer ^1000",
      "lifelong learner ^1000",
      "UI|UX enthusiast ^1000",
      "food lover ^1000",
      "sports fanatic"
    ],
    typeSpeed: 50,
    smartBackspace: true,
    loop: true
  });

  // scroll navigation
  let scrollTop = 0;
  $(window).scroll(function() {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $("#top-nav").addClass("scrolled-nav");
    } else if (scrollTop < 100) {
      $("#top-nav").removeClass("scrolled-nav");
    }
  });
});
