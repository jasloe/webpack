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
    translateY: 20,
    duration: 1,
  });

  tl.add({
    targets: ".is-active h2:nth-child(2)",
    opacity: 1,
    duration: 450,
  });

  tl.add({
    targets: ".card-second img",
    opacity: 1,
    duration: 200,
  });

  tl.add({
    targets: ".is-active .about",
    opacity: 1,
    duration: 450,
  });
}

function init1() {
  scroller1
    .setup({
      step: ".card-first",
      debug: true,
      offset: 0.75,
    })
    .onStepEnter(cardEnter);
}

function init2() {
  scroller2
    .setup({
      step: ".card-second",
      debug: true,
      offset: 0.75,
    })
    .onStepEnter(cardEnter);
}

init1();
init2();
