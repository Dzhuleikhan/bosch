import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on("scroll", (e) => {
  ScrollTrigger.update();
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

requestAnimationFrame(raf);

// const anchors = document.querySelectorAll(".scroll-link");

// anchors.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     let tag = e.target.getAttribute("href");
//     lenis.scrollTo(tag, {
//       duration: 1,
//       easing: (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2),
//     });
//   });
// });

export default lenis;
