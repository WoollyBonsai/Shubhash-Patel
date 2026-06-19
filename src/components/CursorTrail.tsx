import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const layer = layerRef.current!;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let lastBit = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      gsap.to(dot, { x: mx, y: my, duration: 0.08, ease: "power3.out" });

      const now = performance.now();
      if (now - lastBit > 28) {
        lastBit = now;
        const span = document.createElement("span");
        span.textContent = Math.random() > 0.5 ? "1" : "0";
        span.className = "absolute font-mono text-[11px] select-none pointer-events-none";
        span.style.color = "var(--glow)";
        span.style.left = `${mx + (Math.random() - 0.5) * 8}px`;
        span.style.top = `${my + (Math.random() - 0.5) * 8}px`;
        span.style.willChange = "transform, opacity";
        layer.appendChild(span);
        gsap.to(span, {
          y: "+=" + (40 + Math.random() * 60),
          x: "+=" + (Math.random() - 0.5) * 30,
          opacity: 0,
          duration: 1.1 + Math.random() * 0.6,
          ease: "power1.out",
          onComplete: () => span.remove(),
        });
      }
    };

    const onDown = () => gsap.to(ring, { scale: 0.7, duration: 0.15 });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.25 });

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={layerRef} className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[61] h-9 w-9 rounded-full border"
        style={{ borderColor: "var(--primary)", mixBlendMode: "difference" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[62] -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full"
        style={{ background: "var(--primary)" }}
      />
    </>
  );
}
