"use client";

import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Node = forwardRef<
  HTMLDivElement,
  { className?: string; emoji: string; label: string }
>(({ className, emoji, label }, ref) => (
  <div className="flex flex-col items-center gap-2">
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-2xl border border-emerald-200 bg-white text-2xl shadow-sm",
        className,
      )}
    >
      {emoji}
    </div>
    <span className="text-xs font-medium text-neutral-500">{label}</span>
  </div>
));
Node.displayName = "Node";

export function ProcessBeams({
  labels,
}: {
  labels: { ad: string; quiz: string; hub: string; wa: string; crm: string };
}) {
  const container = useRef<HTMLDivElement>(null);
  const ad = useRef<HTMLDivElement>(null);
  const quiz = useRef<HTMLDivElement>(null);
  const hub = useRef<HTMLDivElement>(null);
  const wa = useRef<HTMLDivElement>(null);
  const crm = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      className="relative mx-auto flex w-full max-w-3xl items-center justify-between px-2 py-12"
    >
      <Node ref={ad} emoji="🎯" label={labels.ad} />
      <Node ref={quiz} emoji="🧬" label={labels.quiz} />
      <Node ref={hub} emoji="⚡" label={labels.hub} className="size-20 text-3xl border-emerald-300" />
      <Node ref={wa} emoji="💬" label={labels.wa} />
      <Node ref={crm} emoji="🗂️" label={labels.crm} />

      <AnimatedBeam containerRef={container} fromRef={ad} toRef={quiz} gradientStartColor="#34d399" gradientStopColor="#059669" pathColor="#e5e7eb" duration={4} />
      <AnimatedBeam containerRef={container} fromRef={quiz} toRef={hub} gradientStartColor="#34d399" gradientStopColor="#059669" pathColor="#e5e7eb" duration={4} delay={0.4} />
      <AnimatedBeam containerRef={container} fromRef={hub} toRef={wa} gradientStartColor="#059669" gradientStopColor="#34d399" pathColor="#e5e7eb" duration={4} delay={0.8} />
      <AnimatedBeam containerRef={container} fromRef={hub} toRef={crm} gradientStartColor="#059669" gradientStopColor="#34d399" pathColor="#e5e7eb" duration={4} delay={1.1} curvature={40} />
    </div>
  );
}
