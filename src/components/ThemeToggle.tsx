import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="panel relative flex h-10 w-[72px] items-center rounded-full px-1 transition-colors"
    >
      <span
        className="absolute top-1 h-8 w-8 rounded-full transition-all duration-500 ease-[cubic-bezier(.7,.0,.2,1)]"
        style={{
          left: dark ? "calc(100% - 36px)" : "4px",
          background: "var(--primary)",
          boxShadow: "0 0 24px -4px var(--glow)",
        }}
      />
      <Sun className="z-10 ml-1.5 h-4 w-4" style={{ color: dark ? "var(--muted-foreground)" : "var(--primary-foreground)" }} />
      <Moon className="z-10 ml-auto mr-1.5 h-4 w-4" style={{ color: dark ? "var(--primary-foreground)" : "var(--muted-foreground)" }} />
    </button>
  );
}
