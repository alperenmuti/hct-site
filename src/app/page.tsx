"use client";

import {
  Scissors,
  Stethoscope,
  Plane,
  ShieldCheck,
  Languages,
  HeartPulse,
  Star,
  ArrowRight,
} from "lucide-react";

import { Particles } from "@/components/ui/particles";
import { RetroGrid } from "@/components/ui/retro-grid";
import { AuroraText } from "@/components/ui/aurora-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import { Meteors } from "@/components/ui/meteors";
import { BlurFade } from "@/components/ui/blur-fade";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ProcessBeams } from "@/components/site/process-beams";

const EMERALD = "#10b981";

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#07100c]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-white">
          <span className="grid size-7 place-items-center rounded-lg bg-emerald-500 text-[#04120c]">H</span>
          Hair Center<span className="text-emerald-400">·</span>Turkey
        </a>
        <nav className="hidden items-center gap-7 text-sm text-neutral-300 md:flex">
          <a href="#why" className="transition hover:text-white">Why us</a>
          <a href="#results" className="transition hover:text-white">Results</a>
          <a href="#reach" className="transition hover:text-white">Global</a>
          <a href="#process" className="transition hover:text-white">Process</a>
        </nav>
        <a href="#cta">
          <ShimmerButton className="h-9 px-4 text-sm" background="rgba(6,20,14,1)" shimmerColor="#34d399">
            Free hair analysis
          </ShimmerButton>
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-24 text-center">
      <RetroGrid className="opacity-40" angle={68} lightLineColor="#10b981" darkLineColor="#10b981" />
      <Particles className="absolute inset-0" quantity={90} color={EMERALD} ease={70} />
      <Meteors number={14} />

      <BlurFade delay={0.1} inView>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          <AnimatedGradientText className="text-sm font-medium">
            Since 2014 · 8,000+ transplants · 50+ countries
          </AnimatedGradientText>
        </div>
      </BlurFade>

      <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white text-balance sm:text-7xl">
        Your hair, <AuroraText colors={["#34d399", "#10b981", "#5eead4", "#059669"]}>restored</AuroraText>.
        <br />
        Your confidence, back.
      </h1>

      <TextAnimate
        as="p"
        by="word"
        animation="blurInUp"
        className="mx-auto mt-6 max-w-xl text-lg text-neutral-300"
      >
        Surgeon-led FUE & DHI in Istanbul — all-inclusive, with lifetime aftercare and a natural, undetectable result.
      </TextAnimate>

      <BlurFade delay={0.4} inView>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#cta">
            <ShimmerButton className="px-6 py-3 text-base font-semibold" shimmerColor="#6ee7b7" background="rgba(6,20,14,1)">
              Get my free analysis <ArrowRight className="ms-2 size-4" />
            </ShimmerButton>
          </a>
          <a
            href="#results"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10"
          >
            See real results
          </a>
        </div>
      </BlurFade>

      {/* floating preview card */}
      <BlurFade delay={0.6} inView>
        <div className="relative mt-14 w-full max-w-3xl animate-floaty overflow-hidden rounded-2xl border border-white/10 bg-[#0b1712]/80 p-6 text-left backdrop-blur">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Graft estimate", "3,200"],
              ["Technique", "DHI"],
              ["Duration", "6–8 h"],
              ["Aftercare", "Lifetime"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-white/5 p-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-400/80">{k}</div>
                <div className="mt-1 text-lg font-bold text-white">{v}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-neutral-400">
            → Personalised plan, sent to your WhatsApp in minutes.
          </p>
          <BorderBeam size={220} duration={9} colorFrom="#34d399" colorTo="#059669" />
        </div>
      </BlurFade>
    </section>
  );
}

/* ---------------- Trust marquee ---------------- */
const TRUST = ["Licensed clinic", "Partner hospitals", "JCI-standard OR", "Health Tourism Authorised", "12-year track record", "Surgeon-led", "50+ countries", "Lifetime aftercare"];
function TrustBar() {
  return (
    <div className="relative border-y border-white/5 bg-[#081109] py-5">
      <Marquee pauseOnHover className="[--duration:30s]">
        {TRUST.map((t) => (
          <span key={t} className="mx-6 flex items-center gap-2 text-sm font-medium text-neutral-400">
            <ShieldCheck className="size-4 text-emerald-400" /> {t}
          </span>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#081109] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#081109] to-transparent" />
    </div>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const items: [number, string, string][] = [
    [12, "+", "years of practice"],
    [8000, "+", "successful transplants"],
    [50, "+", "countries served"],
    [98, "%", "would recommend*"],
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map(([n, suf, label], i) => (
          <BlurFade key={label} delay={0.1 * i} inView>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 text-center">
              <div className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                <NumberTicker value={n} className="text-white" />
                <span className="text-emerald-400">{suf}</span>
              </div>
              <div className="mt-2 text-sm text-neutral-400">{label}</div>
            </div>
          </BlurFade>
        ))}
      </div>
      <p className="mt-4 text-center font-mono text-[11px] text-neutral-600">*Illustrative figures for this concept design.</p>
    </section>
  );
}

/* ---------------- Features (bento) ---------------- */
function Features() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-16">
      <BlurFade inView>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white text-balance">
          Everything handled. <span className="text-emerald-400">You just arrive.</span>
        </h2>
        <p className="mt-3 max-w-xl text-neutral-400">From your first message to a full year of aftercare — one team, one price, zero guesswork.</p>
      </BlurFade>

      <BentoGrid className="mt-10 grid-cols-1 auto-rows-[16rem] md:grid-cols-3">
        <BentoCard
          name="Surgeon-led, always"
          className="md:col-span-2"
          Icon={Stethoscope}
          description="Every operation planned and led by a specialist — not a rotating technician line."
          href="#cta"
          cta="Meet the approach"
          background={
            <div className="absolute inset-0">
              <div className="absolute -right-6 top-6 flex size-[16rem] items-center justify-center opacity-90">
                <OrbitingCircles radius={80} iconSize={34} duration={18}>
                  <Badge>FUE</Badge><Badge>DHI</Badge><Badge>PRP</Badge><Badge>Sapphire</Badge>
                </OrbitingCircles>
                <OrbitingCircles radius={45} iconSize={28} reverse duration={14}>
                  <Badge>✚</Badge><Badge>★</Badge><Badge>✓</Badge>
                </OrbitingCircles>
              </div>
            </div>
          }
        />
        <BentoCard
          name="FUE & DHI"
          className="md:col-span-1"
          Icon={Scissors}
          description="The right technique for your pattern — not a one-size-fits-all package."
          href="#cta"
          cta="Which suits me?"
          background={
            <Marquee pauseOnHover vertical className="absolute inset-0 [--duration:16s] opacity-40 [mask-image:linear-gradient(to_bottom,transparent,#000_20%,#000_80%,transparent)]">
              {["Hairline", "Crown", "Density", "Beard", "Eyebrow", "Repair"].map((t) => (
                <div key={t} className="mx-2 my-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300">{t}</div>
              ))}
            </Marquee>
          }
        />
        <BentoCard
          name="All-inclusive"
          className="md:col-span-1"
          Icon={Plane}
          description="5-star hotel, VIP transfers, interpreter — booked for you."
          href="#cta"
          cta="What's included"
          background={<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.18),transparent_60%)]" />}
        />
        <BentoCard
          name="Your language"
          className="md:col-span-1"
          Icon={Languages}
          description="Dedicated interpreter across 20+ languages, start to finish."
          href="#cta"
          cta="Talk to us"
          background={<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(52,211,153,0.16),transparent_60%)]" />}
        />
        <BentoCard
          name="Lifetime aftercare"
          className="md:col-span-1"
          Icon={HeartPulse}
          description="A full year of remote follow-up — and we don't disappear after."
          href="#cta"
          cta="How it works"
          background={<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(5,150,105,0.2),transparent_60%)]" />}
        />
      </BentoGrid>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-9 place-items-center rounded-full border border-emerald-400/30 bg-[#0c1a14] text-xs font-semibold text-emerald-300">
      {children}
    </span>
  );
}

/* ---------------- Results (before/after) ---------------- */
function Results() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-5 py-16">
      <BlurFade inView>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white text-balance">Real results, front and centre</h2>
          <span className="hidden font-mono text-xs text-neutral-500 sm:block">Sample layout — clinic’s own consented photos go here</span>
        </div>
      </BlurFade>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[["1,500 grafts", "Hairline"], ["3,200 grafts", "Hairline + crown"], ["4,600 grafts", "Advanced"]].map(([g, area], i) => (
          <BlurFade key={g} delay={0.12 * i} inView>
            <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0b1712] p-3">
              <ShineBorder shineColor={["#34d399", "#10b981", "#5eead4"]} borderWidth={1.5} duration={12} />
              <div className="grid grid-cols-2 gap-3">
                <Placeholder label="Before" />
                <Placeholder label="After · 12 mo" tone />
              </div>
              <div className="flex items-center justify-between px-1 pt-3">
                <span className="text-sm font-semibold text-white">{g}</span>
                <span className="text-xs text-neutral-400">{area}</span>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

function Placeholder({ label, tone }: { label: string; tone?: boolean }) {
  return (
    <div className={`relative flex aspect-[3/4] items-end overflow-hidden rounded-xl ${tone ? "bg-gradient-to-b from-emerald-900/40 to-emerald-500/10" : "bg-gradient-to-b from-neutral-800/60 to-neutral-900/40"}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
      <span className="m-2 rounded-md bg-black/40 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80">{label}</span>
    </div>
  );
}

/* ---------------- Global reach (globe) ---------------- */
function Reach() {
  return (
    <section id="reach" className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-20 md:grid-cols-2">
      <BlurFade inView>
        <div>
          <div className="mb-3 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-xs text-emerald-300">Global patients</div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white text-balance">
            Flown in from <AuroraText colors={["#34d399", "#10b981", "#5eead4"]}>50+ countries</AuroraText>
          </h2>
          <p className="mt-4 max-w-md text-neutral-400">
            The UK, Germany, the Gulf, the US — patients cross the world for Istanbul-grade restoration. We make the trip effortless from the first message to the flight home.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["🇬🇧 UK", "🇩🇪 DE", "🇫🇷 FR", "🇸🇦 SA", "🇺🇸 US", "🇳🇱 NL", "🇮🇹 IT", "🇦🇪 AE"].map((c) => (
              <span key={c} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-300">{c}</span>
            ))}
          </div>
        </div>
      </BlurFade>
      <div className="relative flex h-[26rem] items-center justify-center">
        <Globe className="!max-w-[26rem]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.15),transparent_60%)]" />
      </div>
    </section>
  );
}

/* ---------------- Process (animated beams) ---------------- */
function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-16">
      <BlurFade inView>
        <h2 className="text-center font-display text-4xl font-extrabold tracking-tight text-white text-balance">
          From click to consultation, <span className="text-emerald-400">in minutes</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-neutral-400">
          A 30-second analysis qualifies you and reaches a real coordinator instantly — no forms lost, no waiting.
        </p>
      </BlurFade>
      <ProcessBeams labels={{ ad: "You", quiz: "Free analysis", hub: "Instant routing", wa: "WhatsApp", crm: "Care team" }} />
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const REVIEWS = [
  ["A. — United Kingdom", "From landing to hotel to surgery, everything was handled. The result looks completely natural."],
  ["M. — Germany", "Clear plan, honest graft count, and a team that actually replied within minutes."],
  ["S. — UAE", "One year on and the density is exactly what they promised. Worth the trip."],
  ["J. — United States", "The interpreter made it effortless. I never felt like a number."],
  ["L. — France", "Booked, flew, done. The aftercare follow-ups still come like clockwork."],
];
function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto mb-8 max-w-6xl px-5">
        <span className="font-mono text-xs text-neutral-500">Sample layout — replace with verified reviews</span>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white text-balance">Patients, in their words</h2>
      </div>
      <Marquee pauseOnHover className="[--duration:40s]">
        {REVIEWS.map(([who, quote]) => (
          <figure key={who} className="mx-3 w-80 rounded-2xl border border-white/8 bg-[#0b1712] p-5">
            <div className="mb-2 flex gap-0.5 text-emerald-400">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-emerald-400" />)}
            </div>
            <blockquote className="text-sm text-neutral-200">“{quote}”</blockquote>
            <figcaption className="mt-3 font-mono text-xs text-neutral-500">{who}</figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="cta" className="relative mx-5 my-20 overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#081109] py-20">
      <Particles className="absolute inset-0" quantity={70} color={EMERALD} ease={60} />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl">
          Find out what’s possible — <AuroraText colors={["#34d399", "#10b981", "#5eead4"]}>free</AuroraText>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-neutral-300">
          A 30-second hair analysis: your graft estimate, the right technique, and a realistic 12-month plan. No obligation.
        </p>
        <div className="mt-8 flex justify-center">
          <a href="#top">
            <ShimmerButton className="px-7 py-3.5 text-base font-semibold" shimmerColor="#6ee7b7" background="rgba(4,18,12,1)">
              Start my free analysis <ArrowRight className="ms-2 size-4" />
            </ShimmerButton>
          </a>
        </div>
      </div>
      <BorderBeam size={320} duration={12} colorFrom="#34d399" colorTo="#059669" />
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060d09] px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="font-display text-lg font-extrabold text-white">Hair Center · Turkey</span>
          <span className="font-mono text-xs text-neutral-500">Concept redesign · Istanbul</span>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-neutral-600">
          Unofficial concept redesign by <span className="text-neutral-400">Alperen Muti</span> — a permissionless-apprenticeship demonstration. Not affiliated with, or endorsed by, Hair Center of Turkey. Statistics, results, and reviews shown are illustrative placeholders for design purposes only and are not medical claims or advice.
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TrustBar />
      <Stats />
      <Features />
      <Results />
      <Reach />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
