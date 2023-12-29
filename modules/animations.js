import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

/**
 * Анимации
 */
let mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {
  // service section
  gsap.set(".service__item", { alpha: 0 });
  ScrollTrigger.batch(".service__item", {
    start: "top 80%",
    onEnter: (elements) =>
      gsap.to(elements, { alpha: 1, stagger: 0.15, ease: "none" }),
    onLeaveBack: (elements) =>
      gsap.set(elements, { alpha: 0, overwrite: true }),
  });
  // steps section
  gsap.set(".steps__item", { x: -100, alpha: 0 });
  ScrollTrigger.batch(".steps__item", {
    start: "bottom bottom",
    onEnter: (elements) => gsap.to(elements, { x: 0, alpha: 1, stagger: 0.3 }),
    onLeaveBack: (elements) =>
      gsap.set(elements, { x: -100, alpha: 0, overwrite: true }),
  });
  // prior section
  gsap.set(".prior__item", { alpha: 0 });
  ScrollTrigger.batch(".prior__item", {
    start: "top 90%",
    onEnter: (elements) =>
      gsap.to(elements, { alpha: 1, stagger: 0.3, duration: 0.5 }),
    onLeaveBack: (elements) =>
      gsap.set(elements, { alpha: 0, overwrite: true }),
  });
  //   phone animation
  gsap.to(".blue__phone-icon-a", {
    scale: 1.1,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });
  gsap.to(".blue__phone-hand-a", {
    y: -10,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });
});
