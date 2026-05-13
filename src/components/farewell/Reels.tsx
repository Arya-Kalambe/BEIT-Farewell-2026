import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

import video1 from "@/assets/reel1.mp4";
import video2 from "@/assets/reel2.mov";
import video3 from "@/assets/reel3.mp4";
const REELS = [
  {
    id: 1,
    video: video1,
    title: "Fest Nights",
    caption: "When the lights came on.",
  },
  {
    id: 2,
    video: video2,
    title: "Classroom Chaos",
    caption: "Front bench, back bench, one heart.",
  },
  {
    id: 3,
    video: video3,
    title: "The Last Hug",
    caption: "Until we meet again.",
  },
];

export default function Reels() {
  const [active, setActive] = useState<number | null>(null);

  const activeReel = REELS.find((r) => r.id === active);

  return (
    <section className="relative overflow-hidden bg-black py-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-16 px-6 text-center"
      >
        <p className="text-3xl italic text-yellow-200">
          Chapter Two
        </p>

        <h2 className="mt-3 text-5xl italic text-[#E8DCCB] md:text-7xl">
          Moving memories
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
            transition={{
              duration: 0.8,
              delay: i * 0.15,
            }}
            onClick={() => setActive(r.id)}
            className="group relative aspect-[9/16] overflow-hidden rounded-3xl border border-yellow-200/30 shadow-2xl"
          >

            {/* VIDEO PREVIEW */}
            <video
              src={r.video}
              muted
              loop
              autoPlay
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/50 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                <Play className="h-10 w-10 fill-yellow-200 text-yellow-200" />
              </div>
            </div>

            {/* Text */}
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
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 22,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl border border-yellow-200"
            >

              {/* FULL VIDEO */}
              <video
                src={activeReel.video}
                controls
                autoPlay
                className="h-full w-full object-cover"
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
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