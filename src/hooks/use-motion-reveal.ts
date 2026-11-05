import { useEffect, useRef } from "react";

/** One observer, one reveal per section; content remains visible without JS. */
export function useMotionReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const update = () => {
      observer?.disconnect();
      if (preference.matches) return;
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "true");
          observer?.unobserve(entry.target);
        }
      }, { threshold: 0.15 });
      root.querySelectorAll("[data-motion-reveal]:not([data-revealed])")
        .forEach((element) => observer?.observe(element));
    };
    update();
    preference.addEventListener("change", update);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", update);
    };
  }, []);

  return ref;
}