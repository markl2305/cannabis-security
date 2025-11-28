"use client";

import { useEffect, useState } from "react";

export default function StickyCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6;
      setShow(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-900 text-white shadow-2xl shadow-black/40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-white/85 text-center sm:text-left">
          Need cannabis security that passes inspection? Book a free compliance assessment.
        </p>
        <a
          href="#consultation-form"
          data-cta="sticky-bar-assessment"
          className="inline-flex items-center justify-center rounded-lg bg-brand-teal px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal/70"
        >
          Book My Assessment
        </a>
      </div>
    </div>
  );
}
