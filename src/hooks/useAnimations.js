import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade + translate-up on scroll enter
 */
export function useFadeInUp(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: options.y ?? 48 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.9,
          ease: options.ease ?? "power3.out",
          delay: options.delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);
}

/**
 * Stagger animation for a list of children
 */
export function useStaggerFadeIn(containerRef, selector = ".stagger-item", options = {}) {
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current.querySelectorAll(selector),
        { opacity: 0, y: options.y ?? 40 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.7,
          stagger: options.stagger ?? 0.12,
          ease: options.ease ?? "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: options.start ?? "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);
}

/**
 * Image reveal (clip-path) with GSAP timeline
 */
export function useImageReveal(wrapperRef, options = {}) {
  useEffect(() => {
    if (!wrapperRef.current) return;
    const img = wrapperRef.current.querySelector("img");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: options.start ?? "top 75%",
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(
        wrapperRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: options.duration ?? 1.1,
          ease: "power4.inOut",
        }
      );
      if (img) {
        tl.fromTo(
          img,
          { scale: 1.15 },
          { scale: 1, duration: options.duration ?? 1.1, ease: "power4.inOut" },
          "<"
        );
      }
    });
    return () => ctx.revert();
  }, []);
}

/**
 * Parallax scroll effect
 */
export function useParallax(ref, strength = 80) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: strength,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);
}

/**
 * Hero entrance timeline
 */
export function useHeroEntrance(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero__eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3 }
      )
        .fromTo(
          ".hero__heading",
          { opacity: 0, y: 60, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0 },
          "-=0.2"
        )
        .fromTo(
          ".hero__sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero__cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero__card",
          { opacity: 0, x: 30, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.7 },
          "-=0.4"
        );
    }, containerRef);
    return () => ctx.revert();
  }, []);
}
