// import scss
import "../scss/main.scss";

// ES6 example code
if (true) {
  let a = 40;
  console.log(a); //40
}

import "intersection-observer";
import scrollama from "scrollama";
import anime from "animejs/lib/anime.es.js";

const scroller = scrollama();

function cardEnter(response) {
  response.element.classList.add("is-active");

  var tl = anime.timeline({
    easing: "easeInSine",
    duration: 750,
  });

  tl.add({
    targets: ".is-active",
    translate: 250,
  });

  anime({
    targets: [".is-active"],
    duration: 500,
    autoplay: true,
    easing: "easeInOutSine",
    translateY: {
      value: 40,
      duration: 500,
    },
    opacity: {
      value: 1,
      duration: 500,
    },
  });
}

function backgroundAnimation(response) {
  response.element.classList.add("fade-in");
}

function init1() {
  scroller
    .setup({
      step: ".step",
      debug: true,
      offset: 0.75,
    })
    .onStepEnter(cardEnter);
}

// function init2() {
//   scroller
//     .setup({
//       step: ".about",
//       debug: true,
//       offset: 0.8,
//     })
//     .onStepEnter(backgroundAnimation);
// }

// init1();
init1();
