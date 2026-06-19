import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shubhanshAsset from "@/assets/shubhansh.jpg.asset.json";
import { ThemeToggle } from "./ThemeToggle";
import {
  Terminal, Cpu, GitBranch, Github, Mail, MapPin, GraduationCap,
  Code2, BookOpen, Boxes, ChevronRight, Activity, Layers, Wrench, Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ACADEMICS = [
  { year: "2024 – 2028", title: "B.Tech, Computer Science & Engineering", org: "LNCT Bhopal", note: "First-year · Systems & AI focus" },
  { year: "2024", title: "Higher Secondary (Class XII)", org: "Aadarsh Gyan Jyoti School, Lolri", note: "Score · 83.6%" },
  { year: "2022", title: "High School (Class X)", org: "Carmel School, Kareli", note: "83.6% · Medal of Merit (Grades 5–8)" },
  { year: "2024 — Zonals", title: "IIT Bombay Techfest", org: "Gripper Bot · Meshmerize line follower", note: "Robotics competitive trials" },
  { year: "2025", title: "Jal Shakti Hackathon", org: "National-level", note: "Tech for water conservation" },
];

const SKILL_GROUPS = [
  { icon: Terminal, label: "Linux & Kernel", items: ["LFS — built from source", "Arch (daily driver)", "RHEL · Fedora · Debian · Kali", "Kernel compilation", "systemd · udev · modules"] },
  { icon: Code2, label: "Languages", items: ["C", "C++", "Rust", "Python", "Kotlin", "Java", "Bash"] },
  { icon: Cpu, label: "Systems & Low-level", items: ["AOSP modding", "Android NDK · HID protocol", "TCP/IP sockets", "Bluetooth HID", "adb / fastboot"] },
  { icon: Sparkles, label: "AI / ML (learning)", items: ["PyTorch", "NumPy · Matplotlib", "LLM & agentic frameworks", "Local-first inference"] },
  { icon: Wrench, label: "Tooling", items: ["Git / GitHub", "Wine · Proton", "Spotify API", "Shell automation"] },
  { icon: BookOpen, label: "Hobbies & Reading", items: ["Apostol · Rudin · Axler · Halliday", "Dostoevsky · Kafka", "Atomic Habits", "Rubik's: 3×3 in 12s, 2×2 in 3s", "Chess · Robotics"] },
];

const PROJECTS = [
  {
    tag: "ONGOING",
    title: "Autonomous AI Agent",
    desc: "Serverless, local-first OS-management agent with full system permissions, self-correction logic, and multi-agent collaboration.",
    stack: ["Python", "Agentic LLMs", "Linux APIs"],
  },
  {
    tag: "SHIPPED",
    title: "Woolly Wink — Unified Device Bridge",
    desc: "Personal ecosystem integrating Android and Debian over Wi-Fi/USB: two-way clipboard, remote input, notification & call sync, audio sink, remote shell.",
    stack: ["Kotlin", "Python", "C", "TCP/IP"],
  },
  {
    tag: "IN PROGRESS",
    title: "Android HID Emulator",
    desc: "Emulates a Human Interface Device on Android using Kotlin glued to low-level C structs for sub-millisecond input fidelity.",
    stack: ["Kotlin", "C", "NDK", "BT HID"],
  },
  {
    tag: "OPEN SOURCE",
    title: "Minecraft Optimisation Mods (Java)",
    desc: "TNT entity optimisation and custom in-game command panels — reducing tick cost on heavy redstone contraptions.",
    stack: ["Java", "Forge"],
  },
  {
    tag: "OPEN SOURCE",
    title: "Antique Record Player",
    desc: "Stylised Spotify-integrated music player with a tactile, vinyl-era interface built in Python.",
    stack: ["Python", "Spotify API"],
  },
  {
    tag: "OPEN SOURCE",
    title: "System Utilities",
    desc: "Collection of Rust and C CLI tools for Linux workflow optimisation — file watchers, batch renamers, kernel log filters.",
    stack: ["Rust", "C"],
  },
];

export function Portfolio() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from(".hero-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.08,
        delay: 0.1,
      });
      gsap.from(".hero-meta", { opacity: 0, y: 20, duration: 0.9, ease: "power3.out", delay: 0.8, stagger: 0.06 });

      // Marquee bar
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      // Reveal headings
      gsap.utils.toArray<HTMLElement>(".reveal-h").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Cards stagger
      gsap.utils.toArray<HTMLElement>(".reveal-card").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Academics timeline draw
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      // Photo parallax + reveal
      gsap.from(".photo-wrap", {
        scale: 1.15,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: { trigger: ".photo-wrap", start: "top 80%" },
      });
      gsap.to(".photo-inner", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: ".photo-wrap", start: "top bottom", end: "bottom top", scrub: true },
      });

      // Section counter
      gsap.utils.toArray<HTMLElement>("section[data-section]").forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) {
              const label = sec.dataset.section || "";
              const el = document.getElementById("hud-section");
              if (el) el.textContent = label;
            }
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative">
      {/* Fixed HUD */}
      <header className="fixed inset-x-0 top-0 z-40 mix-blend-normal">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="font-mono text-xs tracking-widest opacity-80">
            <span className="opacity-60">~/</span>shubhansh<span className="opacity-60">.os</span>
          </div>
          <nav className="hidden gap-7 font-mono text-xs uppercase tracking-[0.18em] md:flex">
            {[
              ["00", "intro", "#intro"],
              ["01", "academics", "#academics"],
              ["02", "skills", "#skills"],
              ["03", "projects", "#projects"],
              ["04", "contact", "#contact"],
            ].map(([n, l, h]) => (
              <a key={h} href={h} className="group flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100">
                <span style={{ color: "var(--primary)" }}>{n}</span>
                <span className="relative">
                  {l}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" style={{ background: "var(--primary)" }} />
                </span>
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* HUD bottom status */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
        <span>uptime · since 2017 · arch linux</span>
        <span id="hud-section" style={{ color: "var(--primary)" }}>intro</span>
        <span>v1.0 — kernel 6.9</span>
      </div>

      {/* HERO */}
      <section id="intro" data-section="intro" className="relative flex min-h-screen items-center px-6 pt-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="hero-meta mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] opacity-70">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
            <span>portfolio · 00 — introduction</span>
          </div>

          <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.88] tracking-tight">
            <div className="overflow-hidden"><div className="hero-line">Shubhansh</div></div>
            <div className="overflow-hidden"><div className="hero-line" style={{ color: "var(--primary)" }}>Patel.</div></div>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <p className="hero-meta col-span-12 max-w-2xl text-base leading-relaxed opacity-80 md:col-span-7 md:text-lg">
              Kernel-level tinkerer, Linux-from-scratch builder, and first-year CSE student writing software that lives
              close to the metal — from Android HID stacks and Wi-Fi device bridges to autonomous local-first AI agents.
            </p>
            <div className="hero-meta col-span-12 grid grid-cols-3 gap-4 md:col-span-5">
              {[
                ["07+", "years on linux"],
                ["6+", "languages"],
                ["12s", "3×3 cube PB"],
              ].map(([k, v]) => (
                <div key={v} className="panel rounded-lg p-4">
                  <div className="font-display text-3xl" style={{ color: "var(--primary)" }}>{k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest opacity-60">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-meta mt-14 flex flex-wrap items-center gap-4 font-mono text-xs">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-primary-foreground" style={{ background: "var(--primary)" }}>
              view the catalogue <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://github.com/WoollyBonsai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 opacity-80 hover:opacity-100">
              <Github className="h-4 w-4" /> github.com/WoollyBonsai
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative overflow-hidden border-y py-5 surface-terminal">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-[0.25em]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {["// kernel space", "01001000", "linux from scratch", "Arch btw", "kotlin · c · rust", "// userspace builder", "android NDK", "01010011", "agentic AI", "bluetooth HID", "// shubhansh.os"].map((s, i) => (
                <span key={i} className="opacity-90">{s}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ACADEMICS */}
      <section id="academics" data-section="academics" className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.3em] opacity-60">01 — catalogue</div>
              <h2 className="reveal-h mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">
                Academics &<br/><span style={{ color: "var(--primary)" }}>milestones.</span>
              </h2>
            </div>
            <p className="md:col-span-5 max-w-md text-sm leading-relaxed opacity-70">
              The paper trail — formal education, robotics trials, hackathons, and the side-quest of compiling Linux From Scratch.
            </p>
          </div>

          <div className="timeline relative pl-6 md:pl-10">
            <div className="timeline-line absolute left-2 top-2 h-[calc(100%-1rem)] w-px md:left-4" style={{ background: "var(--border)" }} />
            <div className="space-y-10">
              {ACADEMICS.map((a, i) => (
                <div key={i} className="reveal-card group relative grid gap-2 md:grid-cols-12">
                  <div className="absolute -left-[18px] top-2 h-3 w-3 rounded-full ring-4 ring-background md:-left-[34px]" style={{ background: "var(--primary)" }} />
                  <div className="md:col-span-3">
                    <div className="font-mono text-xs uppercase tracking-widest opacity-60">{a.year}</div>
                  </div>
                  <div className="md:col-span-9">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-1 h-5 w-5 shrink-0" style={{ color: "var(--accent)" }} />
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-tight">{a.title}</h3>
                        <div className="mt-1 text-sm opacity-80">{a.org}</div>
                        <div className="mt-2 font-mono text-xs opacity-60">› {a.note}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & HOBBIES */}
      <section id="skills" data-section="skills" className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.3em] opacity-60">02 — catalogue</div>
              <h2 className="reveal-h mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">
                Skills &<br/><span style={{ color: "var(--primary)" }}>hobbies.</span>
              </h2>
            </div>
            <p className="md:col-span-5 max-w-md text-sm leading-relaxed opacity-70">
              The toolbox. Mostly C, Rust, and the Linux kernel — with the occasional detour into PyTorch, a Rubik's cube, or a Dostoevsky paperback.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((g, i) => {
              const Icon = g.icon;
              return (
                <div key={g.label} className="reveal-card panel glow-ring group relative overflow-hidden rounded-xl p-6 transition-transform hover:-translate-y-1">
                  <div className="mb-5 flex items-center justify-between">
                    <Icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{g.label}</h3>
                  <ul className="mt-4 space-y-1.5 font-mono text-xs opacity-85">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span style={{ color: "var(--accent)" }}>›</span>{it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Photo block */}
          <div className="mt-24 grid items-center gap-10 md:grid-cols-12">
            <div className="photo-wrap relative md:col-span-7">
              <div className="photo-inner relative aspect-[16/10] overflow-hidden rounded-xl glow-ring">
                <img src={shubhanshAsset.url} alt="Shubhansh Patel" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--background) 70%, transparent))" }} />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/90">
                  <span>./shubhansh.jpg</span>
                  <span>NARSINGHPUR · MP</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="font-mono text-xs uppercase tracking-[0.3em] opacity-60">offline mode</div>
              <h3 className="reveal-h mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Behind the prompt — a kid from Madhya Pradesh who got hooked on Linux at 10.
              </h3>
              <p className="mt-5 text-sm leading-relaxed opacity-75">
                When I'm not compiling kernels or chasing a faster Rubik's solve, you'll find me reading Apostol on a bench by the lake or building strange little tools nobody asked for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" data-section="projects" className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.3em] opacity-60">03 — catalogue</div>
              <h2 className="reveal-h mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">
                Projects &<br/><span style={{ color: "var(--primary)" }}>experiments.</span>
              </h2>
            </div>
            <p className="md:col-span-5 max-w-md text-sm leading-relaxed opacity-70">
              Things I've shipped, am shipping, or am still arguing with at 2 a.m. — agents, device bridges, low-level HID, and a stubborn pile of CLI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl md:grid-cols-2" style={{ background: "var(--border)" }}>
            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className="reveal-card group relative overflow-hidden bg-card p-8 transition-colors md:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
                  >
                    {p.tag}
                  </span>
                  <span className="font-display text-5xl opacity-15 transition-opacity group-hover:opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded border px-2 py-1 opacity-80">{s}</span>
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: "var(--primary)" }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" data-section="contact" className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] opacity-60">04 — end of file</div>
          <h2 className="reveal-h mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            let's build<br/><span style={{ color: "var(--primary)" }}>something low-level.</span>
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Mail, k: "email", v: "patelkanha202@gmail.com", href: "mailto:patelkanha202@gmail.com" },
              { icon: Github, k: "github", v: "WoollyBonsai", href: "https://github.com/WoollyBonsai" },
              { icon: MapPin, k: "location", v: "Narsinghpur · MP · India", href: "#" },
            ].map(({ icon: Icon, k, v, href }) => (
              <a key={k} href={href} className="panel reveal-card group rounded-xl p-6 transition-transform hover:-translate-y-1">
                <Icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                <div className="mt-4 font-mono text-[10px] uppercase tracking-widest opacity-60">{k}</div>
                <div className="mt-1 font-display text-lg">{v}</div>
              </a>
            ))}
          </div>

          <div className="mt-20 border-t pt-8 flex flex-col gap-3 font-mono text-xs opacity-60 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} shubhansh patel — compiled with love &amp; gcc</span>
            <span>exit 0</span>
          </div>
        </div>
      </section>
    </div>
  );
}
