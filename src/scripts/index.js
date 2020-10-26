// import scss
import "../scss/main.scss";

// ES6 example code
if (true) {
  let a = 40;
  console.log(a); //40
}

// Headroom.
import Headroom from "headroom.js";

let el = document.querySelector("header");
let headroom = new Headroom(el);

headroom.init();

// Smooth scrolling polyfill.

// Scrollama, anime.
import "intersection-observer";
import scrollama from "scrollama";
import anime from "animejs/lib/anime.es.js";

const scroller1 = scrollama();
const scroller2 = scrollama();

function cardEnter(response) {
  response.element.classList.add("is-active");

  var tl = anime.timeline({
    easing: "easeInSine",
  });

  tl.add({
    targets: ".is-active h2:first-child",
    opacity: 1,
    duration: 250,
  });

    tl.add({
    targets: ".is-active h2:nth-child(2)",
    opacity: 1,
    duration: 250,
  });

    tl.add({
    targets: ".is-active .portrait-desktop-wrapper",
    opacity: 1,
    duration: 250,
  });

  tl.add({
    targets: ".is-active .about",
    opacity: 1,
    duration: 250,
  });

    tl.add({
    targets: ".return-wrapper",
    opacity: 1,
    duration: 250,
  });
}

function init1() {
  scroller1
    .setup({
      step: ".card-first",
      debug: false,
      offset: 0.75,
    })
    .onStepEnter(cardEnter);
}

function init2() {
  scroller2
    .setup({
      step: ".card-second",
      debug: false,
      offset: 0.75,
    })
    .onStepEnter(cardEnter);
}

init1();
init2();
