import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LINES = [
  "[    0.000000] Linux version 6.9.0-shubhansh-arch (gcc 14.1.0) #1 SMP",
  "[    0.000412] Command line: BOOT_IMAGE=/vmlinuz-linux root=UUID=portfolio rw quiet splash",
  "[    0.001204] CPU0: AMD Ryzen — 16 cores online",
  "[    0.018734] Memory: 32768MB available",
  "[    0.042118] ACPI: Core revision 20240321",
  "[    0.118902] PCI: Using configuration type 1 for base access",
  "[    0.244311] systemd[1]: Detected architecture x86-64.",
  "[    0.301842] systemd[1]: Set hostname to <shubhansh-portfolio>.",
  "[    0.408120] [  OK  ] Reached target Local File Systems.",
  "[    0.512004] [  OK  ] Started Network Manager.",
  "[    0.609871] [  OK  ] Mounted /home/shubhansh.",
  "[    0.712041] systemd-udevd: loading kernel modules (kvm_amd, nvme, i915)",
  "[    0.840312] [  OK  ] Started Bluetooth HID Service.",
  "[    0.901244] [  OK  ] Reached target Graphical Interface.",
  "[    1.012998] login: shubhansh@arch ~ $ ./portfolio --launch",
  "[    1.108812] >>> initializing creative shell ...",
];

const PROMPT = "shubhansh@arch:~$ ";
const CMD = "startx portfolio.ui --premium";

export function BootLoader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [printed, setPrinted] = useState<string[]>([]);
  const [typed, setTyped] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = window.setInterval(() => {
      if (i < LINES.length) {
        setPrinted((p) => [...p, LINES[i]]);
        i++;
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      } else {
        window.clearInterval(interval);
        // type the command
        let j = 0;
        const typer = window.setInterval(() => {
          j++;
          setTyped(CMD.slice(0, j));
          if (j >= CMD.length) {
            window.clearInterval(typer);
            window.setTimeout(() => {
              gsap.to(wrapRef.current, {
                opacity: 0,
                duration: 0.7,
                ease: "power2.inOut",
                onComplete: () => {
                  setVisible(false);
                  onDone();
                },
              });
            }, 700);
          }
        }, 55);
      }
    }, 95);
    return () => window.clearInterval(interval);
  }, [onDone]);

  if (!visible) return null;

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[100] flex items-center justify-center surface-terminal"
    >
      <div className="absolute inset-0 scanlines" />
      <div className="relative w-full max-w-3xl px-6">
        <div className="mb-6 flex items-center gap-3 text-xs opacity-70">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--terminal-foreground)" }} />
          <span>tty1 — booting shubhansh.os</span>
        </div>
        <div
          ref={scrollRef}
          className="h-[60vh] overflow-hidden text-[13px] leading-relaxed"
        >
          {printed.map((l, i) => (
            <div key={i} className="whitespace-pre-wrap opacity-90">{l}</div>
          ))}
          {printed.length === LINES.length && (
            <div className="mt-3">
              <span className="opacity-80">{PROMPT}</span>
              <span>{typed}</span>
              <span className="ml-0.5 inline-block h-4 w-2 animate-pulse" style={{ background: "var(--terminal-foreground)" }} />
            </div>
          )}
        </div>
        <div className="mt-8 font-display text-4xl tracking-tight text-glow">
          SHUBHANSH PATEL
        </div>
        <div className="mt-1 text-xs opacity-60">kernel-space dreamer · userspace builder</div>
      </div>
    </div>
  );
}
