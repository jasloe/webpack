import "intersection-observer";
import scrollama from "scrollama";
import "../scss/main.scss";

// let a;

// console.log(a);

// // ES6 example code
// if (true) {
//  let a = 40;
//  console.log(a); //40
// }

// instantiate the scrollama
const scroller = scrollama();

function handleStepEnter(response) {
  response.element.classList.add('is-active');
}

function handleStepExit(response) {
  response.element.classList.remove("is-active");
}

// setup the instance, pass callback functions
scroller
  .setup({
    step: ".step",
    debug: true,
    offset: 0.25
  })
  .onStepEnter(handleStepEnter)
  .onStepExit(handleStepExit);

// setup resize event
window.addEventListener("resize", scroller.resize);
