import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

/*
  GOOGLE DRIVE VIDEO LINKS

  Replace these with your direct video links.
  
  IMPORTANT:
  Use direct preview links like:
  https://drive.google.com/file/d/FILE_ID/preview

  Example:
  https://drive.google.com/file/d/1abcXYZ123/preview
*/

const REELS = [
  {
    id: 1,
    video:
      "https://drive.google.com/file/d/13dfxe7WuA2plK6lrMFwlBaOA9Hy1JxWz/preview",
    title: "Memories",
    caption: "The memories which will last forever.",
  },
  {
    id: 2,
    video:
      "https://drive.google.com/file/d/1f2ltJqetJ0AlX5Kw0aOYWIrDzK4SB6Ag/preview",
    title: "Fun Times",
    caption: "Noise, laughter, chaos… us.",
  },
  {
    id: 3,
    video:
      "https://drive.google.com/file/d/1yf_yuRo1bl5GLeDshkXaqajc_g25ZxW3/preview",
    title: "The Goodbyes",
    caption: "Goodbyes hurt because it mattered.",
  },
];

export default function Reels() {
  const [active, setActive] = useState<number | null>(null);

  const activeReel = REELS.find((r) => r.id === active);

  return (
    <section className="relative overflow-hidden bg-black py-24">

      {/* GOLDEN GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/10 blur-3xl" />

      {/* FILM GRAIN */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light">
        <div className="h-full w-full bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[size:18px_18px]" />
      </div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-16 px-6 text-center"
      >
        <p className="text-3xl italic tracking-wide text-yellow-200">
          Chapter Two
        </p>

        <h2 className="mt-3 text-5xl italic text-[#E8DCCB] md:text-7xl">
          Moving Memories
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[#E8DCCB]/70">
          Some moments were too alive to stay still.
        </p>
      </motion.div>

      {/* VIDEO GRID */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3">

        {REELS.map((r, i) => (
          <motion.button
            key={r.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              rotate: 1,
              scale: 1.03,
            }}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            onClick={() => setActive(r.id)}
            className="group relative aspect-[9/16] overflow-hidden rounded-3xl border border-yellow-200/20 shadow-[0_0_50px_rgba(255,230,150,0.08)]"
          >

            {/* VIDEO PREVIEW */}
            <iframe
              src={r.video}
              allow="autoplay"
              className="h-full w-full scale-[1.01] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/50 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                <Play className="h-10 w-10 fill-yellow-200 text-yellow-200" />
              </div>
            </div>

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
              <p className="text-2xl text-[#E8DCCB]">
                {r.title}
              </p>

              <p className="mt-1 italic text-yellow-200">
                {r.caption}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* FULLSCREEN VIDEO */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 backdrop-blur-lg"
            onClick={() => setActive(null)}
          >

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 40,
              }}
              transition={{
                type: "spring",
                damping: 22,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[9/16] h-[85vh] overflow-hidden rounded-3xl border border-yellow-200/30 shadow-2xl"
            >

              {/* FULL VIDEO */}
              <iframe
                src={activeReel.video}
                allow="autoplay; fullscreen"
                className="h-full w-full"
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}