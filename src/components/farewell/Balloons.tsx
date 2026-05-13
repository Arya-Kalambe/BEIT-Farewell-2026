import { useMemo } from "react";

const COLORS = ["var(--vintage-red)", "var(--soft-gold)", "var(--beige)", "var(--vintage-red-deep)"];

export function Balloons({ count = 14 }: { count?: number }) {
  const balloons = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 22,
        size: 28 + Math.random() * 36,
        color: COLORS[i % COLORS.length],
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((b, i) => (
        <div
          key={i}
          className="absolute animate-float-up"
          style={{
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        >
          <div
            className="rounded-full shadow-vintage"
            style={{
              width: b.size,
              height: b.size * 1.2,
              background: `radial-gradient(circle at 30% 30%, oklch(0.95 0.04 80 / 0.4), ${b.color})`,
              boxShadow: `0 0 20px ${b.color}`,
            }}
          />
          <div
            className="mx-auto"
            style={{
              width: 1,
              height: b.size * 1.4,
              background: "linear-gradient(to bottom, oklch(0.78 0.13 80 / 0.6), transparent)",
            }}
          />
        </div>
      ))}
    </div>
  );
}