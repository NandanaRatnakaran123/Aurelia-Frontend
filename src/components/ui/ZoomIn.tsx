"use client";

import { useEffect, useRef, useState } from "react";

export default function ZoomIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1400ms] ease-out motion-reduce:transition-none ${
        shown ? "scale-100 opacity-100" : "scale-[0.7] opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
