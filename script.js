let randomNumber = 0;
let counter = document.querySelector(".loder>h1");

function lenisJs() {
  const lenis = new Lenis({
    duration: 4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
lenisJs();

let myInterval = setInterval(() => {
  randomNumber = randomNumber + Math.floor(Math.random() * 22);
  if (randomNumber < 85) {
    counter.textContent = randomNumber;
  } else {
    counter.textContent = 100;
    gsapAnimations();
    clearInterval(myInterval);
  }
  console.log(randomNumber);
}, 250);

const t1 = gsap.timeline();

function gsapAnimations() {
  t1.to(".loder", {
    top: "-100vh",
    duration: 1,
    ease: "power3.inOut",
  });

  t1.from("nav", {
    opacity: 0,
  });

  t1.from(".page1-main-left", {
    opacity: 0,
    y: 50,
  });

  t1.to(".page2", {
    backgroundColor: "#bd0a0a",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top 80%",
      end: "top 50",
      //   markers: true,
      scrub: 1,
    },
  });

  let clutter = "";

  document
    .querySelector(".page2>h1")
    .textContent.split(" ")
    .forEach(function (dets) {
      clutter += `<span> ${dets} </span>`;
      document.querySelector(".page2>h1").innerHTML = clutter;
    });

  document.querySelectorAll(".page2>h1>span").forEach((dets) => {
    dets.style.color = "#dadada0";
  });

  t1.to(".page2>h1>span", {
    stagger: 0.1,
    color: "#fff",
    scrollTrigger: {
      trigger: ".page2>h1>span",
      scroller: "body",
      start: "top 70%",
      end: "bottom 30%",
      scrub: 0.5,
      //   markers: true,
    },
  });

  t1.from(".page3-left", {
    y: -100,
    scrollTrigger: {
      trigger: ".page3-left",
      scroller: "body",
      start: "top 100%",
      end: "bottom 70%",
      scrub: 1,
      //   markers: true,
    },
  });

  t1.from(".page3-right", {
    y: 50,
    scrollTrigger: {
      trigger: ".page3-right",
      scroller: "body",
      start: "top 100%",
      end: "bottom 70%",
      scrub: 1,
      //   markers: true,
    },
  });

  t1.to(".page3,.page4,.page5", {
    backgroundColor: "#1f1e21",
    scrollTrigger: {
      trigger: ".page5",
      scroller: "body",
      start: "top 30%",
      end: "top 10%",
      scrub: 1,
      //   markers: true,
    },
  });
}
