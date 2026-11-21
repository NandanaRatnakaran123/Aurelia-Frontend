"use client";

import { useEffect, useRef, useState } from "react";

export default function SlideIn({
  children,
  from,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  from: "left" | "right";
  className?: string;
  delay?: number;
}) {
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

  const hidden = from === "left" ? "-translate-x-24 opacity-0" : "translate-x-24 opacity-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
        shown ? "translate-x-0 opacity-100" : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}
