import { motion } from "framer-motion";
import { Balloons } from "./Balloons";

export function ThankYou() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero py-32 grain-overlay">
      <Balloons count={20} />
      <div className="absolute inset-0 light-leak opacity-80" />

      {/* Floating hearts */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute animate-float-up text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${20 + Math.random() * 15}s`,
            color: "var(--vintage-red)",
            filter: "drop-shadow(0 0 10px var(--vintage-red))",
          }}
        >
          ❤
        </div>
      ))}

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="font-display text-6xl md:text-8xl text-beige"
        >
          Thank You Seniors
          <span className="block text-vintage-red mt-4" style={{ textShadow: "0 0 40px var(--vintage-red)" }}>
            ❤️
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mt-12 space-y-6 font-script text-2xl md:text-3xl text-beige/90 leading-relaxed"
        >
          <p>No matter where life takes you…</p>
          <p>We are always proud of you guys.</p>
          <p className="text-soft-gold">Thank you for the memories, guidance, laughter, and chaos.</p>
          <p className="font-display italic">You'll always be a part of us.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.5 }}
          className="mt-24"
        >
          <div className="mx-auto h-px w-32 bg-soft-gold/50" />
          <p className="mt-6 font-script text-2xl text-soft-gold">With love,</p>
          <p className="font-display text-lg text-beige tracking-[0.3em] uppercase mt-2">
            from your juniors
          </p>
        </motion.div>
      </div>
    </section>
  );
}