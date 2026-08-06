"use client";

import {
  Scissors,
  Stethoscope,
  Plane,
  Languages,
  HeartPulse,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { AuroraText } from "@/components/ui/aurora-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { Globe } from "@/components/ui/globe";
import { ProcessBeams } from "@/components/site/process-beams";

function Btn({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700"
      : "border border-neutral-300 text-neutral-800 hover:bg-neutral-50";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-neutral-900">
          <span className="grid size-7 place-items-center rounded-lg bg-emerald-600 text-white">H</span>
          Hair Center<span className="text-emerald-600">·</span>Turkey
        </a>
        <nav className="hidden items-center gap-7 text-sm text-neutral-600 md:flex">
          <a href="#why" className="transition hover:text-neutral-900">Why us</a>
          <a href="#results" className="transition hover:text-neutral-900">Results</a>
          <a href="#reach" className="transition hover:text-neutral-900">Global</a>
          <a href="#process" className="transition hover:text-neutral-900">Process</a>
        </nav>
        <a href="#cta" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
          Free hair analysis
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-20 pb-16 text-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-emerald-50/70 to-transparent" />
      <BlurFade delay={0.05} inView>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm text-emerald-800">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Since 2014 · 8,000+ transplants · 50+ countries
        </div>
      </BlurFade>

      <BlurFade delay={0.12} inView>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 text-balance sm:text-7xl">
          Your hair, <AuroraText colors={["#059669", "#10b981", "#0ea5e9", "#34d399"]}>restored</AuroraText>.
          <br className="hidden sm:block" /> Your confidence, back.
        </h1>
      </BlurFade>

      <BlurFade delay={0.24} inView>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
          Surgeon-led FUE &amp; DHI in Istanbul — all-inclusive, with lifetime aftercare and a natural, undetectable result.
        </p>
      </BlurFade>

      <BlurFade delay={0.34} inView>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Btn href="#cta">Get my free analysis <ArrowRight className="size-4" /></Btn>
          <Btn href="#results" variant="ghost">See real results</Btn>
        </div>
      </BlurFade>

      <BlurFade delay={0.46} inView>
        <div className="relative mx-auto mt-14 w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-[0_20px_60px_-30px_rgba(16,185,129,0.35)]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Graft estimate", "3,200"],
              ["Technique", "DHI"],
              ["Duration", "6–8 h"],
              ["Aftercare", "Lifetime"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-neutral-50 p-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-700">{k}</div>
                <div className="mt-1 text-lg font-bold text-neutral-900">{v}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-neutral-500">
            → Personalised plan, sent to your WhatsApp in minutes.
          </p>
          <BorderBeam size={200} duration={10} colorFrom="#a7f3d0" colorTo="#059669" />
        </div>
      </BlurFade>
    </section>
  );
}

/* ---------------- Trust marquee ---------------- */
const TRUST = ["Licensed clinic", "Partner hospitals", "JCI-standard OR", "Health Tourism Authorised", "12-year track record", "Surgeon-led", "50+ countries", "Lifetime aftercare"];
function TrustBar() {
  return (
    <div className="relative border-y border-neutral-200 bg-neutral-50 py-5">
      <Marquee pauseOnHover className="[--duration:32s]">
        {TRUST.map((t) => (
          <span key={t} className="mx-6 flex items-center gap-2 text-sm font-medium text-neutral-500">
            <ShieldCheck className="size-4 text-emerald-600" /> {t}
          </span>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent" />
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
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {items.map(([n, suf, label], i) => (
          <BlurFade key={label} delay={0.08 * i} inView>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
              <div className="font-display text-4xl font-extrabold text-neutral-900 sm:text-5xl">
                <NumberTicker value={n} className="text-neutral-900" />
                <span className="text-emerald-600">{suf}</span>
              </div>
              <div className="mt-2 text-sm text-neutral-500">{label}</div>
            </div>
          </BlurFade>
        ))}
      </div>
      <p className="mt-4 text-center font-mono text-[11px] text-neutral-400">*Illustrative figures for this concept design.</p>
    </section>
  );
}

/* ---------------- Features (bento) ---------------- */
function Features() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-16">
      <BlurFade inView>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 text-balance">
          Everything handled. <span className="text-emerald-600">You just arrive.</span>
        </h2>
        <p className="mt-3 max-w-xl text-neutral-500">From your first message to a full year of aftercare — one team, one price, zero guesswork.</p>
      </BlurFade>

      <BentoGrid className="mt-10 grid-cols-1 auto-rows-[15rem] md:grid-cols-3">
        <BentoCard
          name="Surgeon-led, always"
          className="md:col-span-2"
          Icon={Stethoscope}
          description="Every operation planned and led by a specialist — not a rotating technician line."
          href="#cta"
          cta="Meet the approach"
          background={<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_55%)]" />}
        />
        <BentoCard
          name="FUE & DHI"
          className="md:col-span-1"
          Icon={Scissors}
          description="The right technique for your pattern — not a one-size-fits-all package."
          href="#cta"
          cta="Which suits me?"
          background={<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(16,185,129,0.12),transparent_55%)]" />}
        />
        <BentoCard
          name="All-inclusive"
          className="md:col-span-1"
          Icon={Plane}
          description="5-star hotel, VIP transfers, interpreter — booked for you."
          href="#cta"
          cta="What's included"
          background={<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.10),transparent_55%)]" />}
        />
        <BentoCard
          name="Your language"
          className="md:col-span-1"
          Icon={Languages}
          description="Dedicated interpreter across 20+ languages, start to finish."
          href="#cta"
          cta="Talk to us"
          background={<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.12),transparent_55%)]" />}
        />
        <BentoCard
          name="Lifetime aftercare"
          className="md:col-span-1"
          Icon={HeartPulse}
          description="A full year of remote follow-up — and we don't disappear after."
          href="#cta"
          cta="How it works"
          background={<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.14),transparent_55%)]" />}
        />
      </BentoGrid>
    </section>
  );
}

/* ---------------- Results (before/after) ---------------- */
function Results() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-5 py-16">
      <BlurFade inView>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 text-balance">Real results, front and centre</h2>
          <span className="hidden font-mono text-xs text-neutral-400 sm:block">Sample layout — clinic&rsquo;s own consented photos go here</span>
        </div>
      </BlurFade>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[["1,500 grafts", "Hairline"], ["3,200 grafts", "Hairline + crown"], ["4,600 grafts", "Advanced"]].map(([g, area], i) => (
          <BlurFade key={g} delay={0.1 * i} inView>
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3">
              <div className="grid grid-cols-2 gap-3">
                <Placeholder label="Before" />
                <Placeholder label="After · 12 mo" tone />
              </div>
              <div className="flex items-center justify-between px-1 pt-3">
                <span className="text-sm font-semibold text-neutral-900">{g}</span>
                <span className="text-xs text-neutral-500">{area}</span>
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
    <div className={`relative flex aspect-[3/4] items-end overflow-hidden rounded-xl ${tone ? "bg-gradient-to-b from-emerald-100 to-emerald-50" : "bg-gradient-to-b from-neutral-100 to-neutral-50"}`}>
      <span className="m-2 rounded-md bg-white/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-600 shadow-sm">{label}</span>
    </div>
  );
}

/* ---------------- Global reach (globe) ---------------- */
function Reach() {
  return (
    <section id="reach" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-20 md:grid-cols-2">
      <BlurFade inView>
        <div>
          <div className="mb-3 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-xs text-emerald-700">Global patients</div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 text-balance">
            Flown in from <span className="text-emerald-600">50+ countries</span>
          </h2>
          <p className="mt-4 max-w-md text-neutral-500">
            The UK, Germany, the Gulf, the US — patients cross the world for Istanbul-grade restoration. We make the trip effortless from the first message to the flight home.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["🇬🇧 UK", "🇩🇪 DE", "🇫🇷 FR", "🇸🇦 SA", "🇺🇸 US", "🇳🇱 NL", "🇮🇹 IT", "🇦🇪 AE"].map((c) => (
              <span key={c} className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700">{c}</span>
            ))}
          </div>
        </div>
      </BlurFade>
      <div className="relative flex h-[24rem] items-center justify-center overflow-hidden">
        <Globe className="!max-w-[24rem]" />
      </div>
    </section>
  );
}

/* ---------------- Process (animated beams) ---------------- */
function Process() {
  return (
    <section id="process" className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <BlurFade inView>
          <h2 className="text-center font-display text-4xl font-extrabold tracking-tight text-neutral-900 text-balance">
            From click to consultation, <span className="text-emerald-600">in minutes</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-neutral-500">
            A 30-second analysis qualifies you and reaches a real coordinator instantly — no forms lost, no waiting.
          </p>
        </BlurFade>
        <ProcessBeams labels={{ ad: "You", quiz: "Free analysis", hub: "Instant routing", wa: "WhatsApp", crm: "Care team" }} />
      </div>
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
        <span className="font-mono text-xs text-neutral-400">Sample layout — replace with verified reviews</span>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 text-balance">Patients, in their words</h2>
      </div>
      <Marquee pauseOnHover className="[--duration:44s]">
        {REVIEWS.map(([who, quote]) => (
          <figure key={who} className="mx-3 w-80 rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="mb-2 flex gap-0.5 text-emerald-500">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-emerald-500" />)}
            </div>
            <blockquote className="text-sm text-neutral-700">“{quote}”</blockquote>
            <figcaption className="mt-3 font-mono text-xs text-neutral-400">{who}</figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="cta" className="mx-5 my-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-16 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight text-neutral-900 text-balance sm:text-5xl">
          Find out what&rsquo;s possible — <span className="text-emerald-600">free</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-neutral-600">
          A 30-second hair analysis: your graft estimate, the right technique, and a realistic 12-month plan. No obligation.
        </p>
        <div className="mt-8 flex justify-center">
          <Btn href="#top">Start my free analysis <ArrowRight className="size-4" /></Btn>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="font-display text-lg font-extrabold text-neutral-900">Hair Center · Turkey</span>
          <span className="font-mono text-xs text-neutral-400">Concept redesign · Istanbul</span>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-neutral-400">
          Unofficial concept redesign by <span className="text-neutral-600">Alperen Muti</span> — a permissionless-apprenticeship demonstration. Not affiliated with, or endorsed by, Hair Center of Turkey. Statistics, results, and reviews shown are illustrative placeholders for design purposes only and are not medical claims or advice.
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="relative bg-white">
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
