const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// let animation1 = alice1.animate(aliceTumbling, aliceTiming);
// console.log(animation1.finished);

//promise chain - using arrow functions

// animation1.finished
// .then(() => {
//   animation2 = alice2.animate(aliceTumbling, aliceTiming);
//   return animation2.finished
// })
// .then(() => {
//   alice3.animate(aliceTumbling, aliceTiming);
// });

//promise chain - using normal functions

// animation1.finished
// .then(function () {
//   animation2 = alice2.animate(aliceTumbling, aliceTiming);
//   return animation2.finished
// })
// .then(function() {
//   alice3.animate(aliceTumbling, aliceTiming);
// });

// async-await - using normal functions

// async function anim() {
//   await alice1.animate(aliceTumbling, aliceTiming).finished; // Awaits animation *finish*
//   await alice2.animate(aliceTumbling, aliceTiming).finished; // Waits for *finish* AFTER first animation *finish*
//   await alice3.animate(aliceTumbling, aliceTiming).finished;
// }

// anim();

// async-await - using arrow functions

// const asyncArrow = async () => {
//                         await alice1.animate(aliceTumbling, aliceTiming).finished; // Awaits animation *finish*
//                         await alice2.animate(aliceTumbling, aliceTiming).finished; // Waits for *finish* AFTER first animation *finish*
//                         await alice3.animate(aliceTumbling, aliceTiming).finished;
//                       }

// asyncArrow();

//callbacks

function animate1(){
  return alice1.animate(aliceTumbling, aliceTiming).finished;
}

function animate2(){
  return alice2.animate(aliceTumbling, aliceTiming).finished;
}

function animate3(){
  alice3.animate(aliceTumbling, aliceTiming);
}

function animation(){
  animate1().then(() => {
    animate2().then(() => {
      animate3();
    })
  })
}

animation();