let randomNumber = 0;
let counter = document.querySelector(".loder>h1");
const html = document.querySelector("html");

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
  });

  elem.addEventListener("mouseleave", () => {
    elem.pause();
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

const specificClutterAnimation = (element) => {
  const htmlTag = document.querySelector(element);
  let clutter = "";
  htmlTag.textContent.split("").forEach((words, index) => {
    if (index > 8) {
      clutter += `<span class='float'>${words}</span>`;
      // console.log("h2");
    } else {
      clutter += `<span>${words}</span>`;
    }
  });
  htmlTag.innerHTML = clutter;
};

specificClutterAnimation(".overflow-hidden-overlay>h1");

const t1 = gsap.timeline();

function gsapAnimations() {
  t1.to(".loder", {
    top: "-100vh",
    duration: 1.5,
    ease: "power3.inOut",
  });

  t1.from("nav", {
    opacity: 0,
  });

  t1.from(".overflow-hidden-overlay>h1>span", {
    opacity: 0,
    y: 100,
    stagger: {
      amount: "1",
      from: "center",
    },
  });

  t1.from(".hardik-dets", {
    opacity: 0,
    y: 40,
  });

  // t1.to(".page2", {
  //   backgroundColor: "#92a4b1",
  //   scrollTrigger: {
  //     scroller: "body",
  //     trigger: ".page2",
  //     start: "top 80%",
  //     end: "top 50",
  //     //   markers: true,
  //     scrub: 1,
  //   },
  // });

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

  // t1.to(".page3,.page4,.page5", {
  //   backgroundColor: "#1f1e21",
  //   scrollTrigger: {
  //     trigger: ".page5",
  //     scroller: "body",
  //     start: "top 30%",
  //     end: "top 10%",
  //     scrub: 1,
  //     //   markers: true,
  //   },
  // });

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
    color: "#92a4b1",
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
      if (experienceCount === 1) {
        clearInterval(Interval1);
      }
    }, 100);
    let Interval2 = setInterval(() => {
      websiteCount++;
      websiteH1.textContent = websiteCount;
      if (websiteCount === 45) {
        clearInterval(Interval2);
      }
    }, 70);
    let Interval3 = setInterval(() => {
      sleepCount++;
      sleepH1.textContent = sleepCount;
      if (sleepCount === 22) {
        clearInterval(Interval3);
      }
    }, 90);
  }
}

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

if (
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  Shery.makeMagnet("nav > a", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.imageEffect(".page3-left-part1>img", {
    style: 3,
    // debug: true,
    config: {
      uFrequencyX: { value: 12, range: [0, 100] },
      uFrequencyY: { value: 12, range: [0, 100] },
      uFrequencyZ: { value: 10, range: [0, 100] },
      geoVertex: { range: [1, 64], value: 32 },
      zindex: { value: "9", range: [-9999999, 9999999] },
      aspect: { value: 0.7225538487226582 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0.05, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.18, range: [1, 5] },
      scrollType: { value: 0 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
      uColor: { value: false },
      uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
      uAmplitude: { value: 1.5, range: [0, 5] },
      uFrequency: { value: 3.5, range: [0, 10] },
    },
  });
  Shery.imageEffect(".page3-left-part2-top>img", {
    style: 3,
    // debug: true,
    config: {
      uFrequencyX: { value: 12, range: [0, 100] },
      uFrequencyY: { value: 12, range: [0, 100] },
      uFrequencyZ: { value: 10, range: [0, 100] },
      geoVertex: { range: [1, 64], value: 32 },
      zindex: { value: "9", range: [-9999999, 9999999] },
      aspect: { value: 1.4898222662133667 },
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
      masker: { value: true },
      maskVal: { value: 1.12, range: [1, 5] },
      scrollType: { value: 0 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.002, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });
  Shery.imageEffect(".page3-left-part2-bottom>img", {
    style: 3,
    // debug: true,
    config: {
      uFrequencyX: { value: 12, range: [0, 100] },
      uFrequencyY: { value: 12, range: [0, 100] },
      uFrequencyZ: { value: 10, range: [0, 100] },
      geoVertex: { range: [1, 64], value: 32 },
      zindex: { value: "9", range: [-9999999, 9999999] },
      aspect: { value: 1.4898222662133667 },
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
      masker: { value: true },
      maskVal: { value: 1.12, range: [1, 5] },
      scrollType: { value: 0 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.002, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });

  function mouseFollower() {
    // Select the circle element
    const circleElement = document.querySelector(".mouse-follower");
    circleElement.style.display = "initial";

    // Create objects to track mouse position and custom cursor position
    const mouse = { x: 0, y: 0 }; // Track current mouse position
    const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
    const circle = { x: 0, y: 0 }; // Track the circle position

    // Initialize variables to track scaling and rotation
    let currentScale = 0; // Track current scale value
    let currentAngle = 0; // Track current angle value

    // Update mouse position on the 'mousemove' event
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
    const speed = 0.17;

    // Start animation
    const tick = () => {
      // MOVE
      // Calculate circle movement based on mouse position and smoothing
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;
      // Create a transformation string for cursor translation
      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      // SQUEEZE
      // 1. Calculate the change in mouse position (deltaMouse)
      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;
      // Update previous mouse position for the next frame
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;
      // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        150
      );
      // 3. Convert mouse velocity to a value in the range [0, 0.5]
      const scaleValue = (mouseVelocity / 150) * 0.5;
      // 4. Smoothly update the current scale
      currentScale += (scaleValue - currentScale) * speed;
      // 5. Create a transformation string for scaling
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      // ROTATE
      // 1. Calculate the angle using the atan2 function
      const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
      // 2. Check for a threshold to reduce shakiness at low mouse velocity
      if (mouseVelocity > 20) {
        currentAngle = angle;
      }
      // 3. Create a transformation string for rotation
      const rotateTransform = `rotate(${currentAngle}deg)`;

      // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
      circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      // Request the next frame to continue the animation
      window.requestAnimationFrame(tick);
    };

    // Start the animation loop
    tick();
  }
  mouseFollower();
}

// circleElement.style.display = "initial";
