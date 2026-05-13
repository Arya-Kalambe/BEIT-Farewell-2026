import { motion } from "framer-motion";
import { Balloons } from "./Balloons";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-hero grain-overlay">
      {/* Film tape borders */}
      <div className="absolute top-0 left-0 right-0 h-8 film-tape z-20 opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 h-8 film-tape z-20 opacity-90" />

      {/* Light leaks */}
      <div className="absolute inset-0 light-leak" />

      {/* Balloons */}
      <Balloons count={16} />

      {/* Sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-soft-gold animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: "var(--soft-gold)",
            boxShadow: "0 0 6px var(--soft-gold)",
          }}
        />
      ))}

      {/* Center text */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p className="font-script text-2xl md:text-3xl text-soft-gold mb-4">The batch we’ll never forget…</p>
          <h1 className="font-display font-black text-6xl md:text-9xl tracking-tight text-beige drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            Byeeee Seniors <span className="inline-block">😭</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="mt-8 font-display italic text-2xl md:text-4xl text-vintage-red"
          style={{ textShadow: "0 0 30px var(--vintage-red)" }}
        >
          We'll miss you forever.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="mt-4 font-body text-sm tracking-[0.3em] uppercase text-beige/70"
        >
          BE IT · The Final Goodbye
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3, duration: 2, repeat: Infinity }}
        className="absolute bottom-14 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <p className="font-script text-soft-gold text-xl">Scroll to relive memories ↓</p>
      </motion.div>
    </section>
  );
}