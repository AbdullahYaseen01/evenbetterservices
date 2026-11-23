"use client";

import Image from "next/image";
import { useEffect, useId, useState, type ReactNode } from "react";
import { Container, Eyebrow } from "@/components/brand";
import { screenSlides, type ScreenSlide } from "@/data/screens";
import { usePrefersReducedMotion } from "@/lib/motion";

const SLIDE_MS = 5600;

export function ScreenSlider({
  group,
  id = "examples",
  eyebrow = "Selected screens",
  title = "Move through the",
  italic = "screens.",
  lede = "Mobile apps and websites, one frame at a time.",
}: {
  group?: ScreenSlide["group"];
  id?: string;
  eyebrow?: string;
  title?: string;
  italic?: string;
  lede?: string;
}) {
  const slides = group ? screenSlides.filter((slide) => slide.group === group) : screenSlides;
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);
  const baseId = useId();
  const count = slides.length;
  const current = slides[index] ?? slides[0];
  const running = playing && !reduce && !held && count > 1;

  useEffect(() => {
    function onHide() {
      setHeld(document.hidden);
    }
    document.addEventListener("visibilitychange", onHide);
    return () => document.removeEventListener("visibilitychange", onHide);
  }, []);

  function go(next: number) {
    setIndex((next + count) % count);
  }

  if (!current) return null;

  return (
    <section
      id={id}
      className="scroll-mt-28 py-20 sm:py-28"
      aria-roledescription="carousel"
      aria-label={eyebrow}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(document.hidden)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setHeld(document.hidden);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(index + 1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(index - 1);
        }
      }}
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4.5rem)] text-forest">
              {title} <span className="italic text-emerald">{italic}</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-ink/75">{lede}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="mr-2 font-display text-2xl text-emerald italic" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
              <span className="text-forest/35"> / {String(count).padStart(2, "0")}</span>
            </p>
            <Control label="Previous screen" onClick={() => go(index - 1)}>
              <Arrow direction="left" />
            </Control>
            <Control label="Next screen" onClick={() => go(index + 1)}>
              <Arrow direction="right" />
            </Control>
            <Control label={playing ? "Pause slides" : "Play slides"} pressed={playing} onClick={() => setPlaying((value) => !value)}>
              {playing ? <PauseIcon /> : <PlayIcon />}
            </Control>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-ink/10 bg-forest shadow-[0_30px_60px_-36px_rgba(18,60,53,0.65)]">
          <div className="h-1 bg-white/15">
            <div
              key={`${current.id}-${running ? "run" : "still"}`}
              className="h-full w-full origin-left bg-lime"
              style={
                running
                  ? {
                      animationName: "slide-progress",
                      animationDuration: `${SLIDE_MS}ms`,
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                    }
                  : { transform: "scaleX(1)" }
              }
              onAnimationEnd={() => {
                if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                if (running) go(index + 1);
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <figure
                  key={slide.id}
                  id={`${baseId}-slide-${slide.id}`}
                  className="w-full shrink-0"
                  aria-roledescription="slide"
                  aria-label={`${slideIndex + 1} of ${count}`}
                  aria-hidden={slideIndex !== index}
                >
                  <div className="relative h-[62vw] max-h-[680px] min-h-[240px] bg-[#101816]">
                    <Image
                      src={slide.src}
                      alt={slideIndex === index ? slide.alt : ""}
                      fill
                      sizes="(min-width: 1024px) 1100px, 100vw"
                      className={slide.fit === "cover" ? "object-cover object-top" : "object-contain"}
                      draggable={false}
                      priority={slideIndex === 0}
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div aria-live="polite">
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-emerald uppercase">{current.kind}</p>
            <h3 className="mt-1 text-2xl font-semibold text-forest">{current.title}</h3>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Choose a screen">
            {slides.map((slide, slideIndex) => {
              const selected = slideIndex === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  className={`h-16 w-24 shrink-0 overflow-hidden rounded-2xl border ${selected ? "border-forest ring-2 ring-lime" : "border-ink/10 opacity-80"}`}
                  aria-label={`Show ${slide.title}`}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => go(slideIndex)}
                >
                  <Image
                    src={slide.src}
                    alt=""
                    width={192}
                    height={128}
                    className="h-full w-full object-cover object-top"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Control({
  label,
  onClick,
  pressed,
  children,
}: {
  label: string;
  onClick: () => void;
  pressed?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-forest hover:border-forest/30"
    >
      {children}
    </button>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <path
        d={direction === "left" ? "M10 3.5 5.5 8 10 12.5" : "M6 3.5 10.5 8 6 12.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <path d="M5 3.5v9M11 3.5v9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <path d="M6 4.2v7.6L12 8 6 4.2Z" fill="currentColor" />
    </svg>
  );
}
