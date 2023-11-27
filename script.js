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
// lenisJs();

function swiperJs() {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 50,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
swiperJs();

let videos = document.querySelectorAll(".swiper-slide>a>video");

videos.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    elem.play();
    elem.playbackRate = 2.0;
    elem.setAttribute("controls", "");
  });

  elem.addEventListener("mouseleave", () => {
    elem.pause();
    elem.removeAttribute("controls");
  });
});

let myInterval = setInterval(() => {
  randomNumber = randomNumber + Math.floor(Math.random() * 22);
  if (randomNumber < 85) {
    counter.textContent = randomNumber;
  } else {
    counter.textContent = 100;
    gsapAnimations();
    clearInterval(myInterval);
  }
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

  t1.from(".page5>h1,.page5>p", {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "body",
      start: "top 70%",
      end: "top 20",
      scrub: 1,
      // markers: true,
    },
  });

  t1.to(".page5>h1>span", {
    color: "#bd0a0a",
    scrollTrigger: {
      trigger: ".page5",
      scroller: "body",
      start: "top 50%",
      end: "top 20",
      scrub: 1,
      // markers: true,
    },
  });

  t1.from(".page6", {
    opacity: 0.5,
    onComplete: experience,
    scrollTrigger: {
      trigger: ".page6",
      scroller: "body",
      start: "top 80%",
      end: "top 70%",
      // scrub: 0.3,
      // markers: true,
    },
  });

  let experienceH1 = document.querySelector(".experience");
  let websiteH1 = document.querySelector(".website");
  let sleepH1 = document.querySelector(".sleep");
  function experience() {
    let experienceCount = 0;
    let websiteCount = 0;
    let sleepCount = 0;
    let Interval1 = setInterval(() => {
      experienceCount++;
      experienceH1.textContent = experienceCount;
      if (experienceCount === 3) {
        clearInterval(Interval1);
      }
    }, 100);
    let Interval2 = setInterval(() => {
      websiteCount++;
      websiteH1.textContent = websiteCount;
      if (websiteCount === 20) {
        clearInterval(Interval2);
      }
    }, 70);
    let Interval3 = setInterval(() => {
      sleepCount++;
      sleepH1.textContent = sleepCount;
      if (sleepCount === 7) {
        clearInterval(Interval3);
      }
    }, 90);
  }
}

function sheryJs() {
  Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("nav > a", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageEffect(
    ".page3-left-part1>img,.page3-left-part2-top>img,.page3-left-part2-bottom>img",
    {
      style: 5,
      // debug: true,
      config: {
        a: { value: 2, range: [0, 30] },
        b: { value: 0.75, range: [-1, 1] },
        zindex: { value: "9", range: [-9999999, 9999999] },
        aspect: { value: 0.7266655535147771 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0.05, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: false },
        maskVal: { value: 1.15, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
      },
    }
  );
}

sheryJs();

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

var x = window.matchMedia("(max-width: 768px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);

function myFunction(x) {
  if (x.matches) {
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      // centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 10,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

var x = window.matchMedia("(max-width: 600px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);

function myFunction(x) {
  if (x.matches) {
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: 6,
      spaceBetween: 10,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
