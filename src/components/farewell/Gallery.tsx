import { motion } from "framer-motion";

import m1 from "@/assets/pic1.jpg";
import m2 from "@/assets/pic2.jpg";
import m3 from "@/assets/pic3.jpg";
import m4 from "@/assets/pic4.jpg";
import m5 from "@/assets/pic5.jpg";
import m6 from "@/assets/pic6.jpg";

const ROW_A = [
{ src: m1, caption: "IT DEPARTMENT" },
  { src: m2, caption: "Group Photo." },
  { src: m3, caption: "Events." },
  { src: m4, caption: "The IPL Squad." },
  { src: m5, caption: "Unforgettable moments." },
  { src: m6, caption: "The best memories." },
];

const ROW_B = [
  { src: m4, caption: "The bond." },
  { src: m6, caption: "Togetherness." },
  { src: m1, caption: "Our golden hour." },
  { src: m5, caption: "Memories." },
  { src: m2, caption: "Chasing sunsets." },
  { src: m3, caption: "Festival nights" },
];

function PhotoCard({
  src,
  caption,
}: {
  src: string;
  caption: string;
}) {
  return (
    <div className="group relative mx-4 w-[260px] flex-shrink-0 md:w-[340px]">
      <div className="relative overflow-hidden rounded-2xl border-4 border-[#E8DCCB] bg-[#E8DCCB] p-2 shadow-2xl transition-all duration-500 group-hover:scale-105">
        
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="h-[260px] w-full rounded-xl object-cover transition-all duration-700 group-hover:brightness-110 md:h-[340px]"
          style={{
            filter: "sepia(0.25) contrast(1.05)",
          }}
        />

        {/* Light Leak Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-yellow-200/20 via-transparent to-orange-300/20 mix-blend-screen" />

        <p className="mt-3 px-2 pb-2 text-center text-xl italic text-[#3b2a20]">
          {caption}
        </p>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a120f] via-[#241815] to-[#120d0b] py-24">
      
      {/* Grain Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      {/* Top Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mb-16 px-6 text-center"
      >
        <p className="text-3xl italic text-yellow-200 md:text-4xl">
          Chapter One
        </p>

        <h2 className="mt-3 text-5xl italic text-[#E8DCCB] md:text-7xl">
          A roll of memories
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-[#E8DCCB]/70">
          Every frame, every smile, every late night — will always be in our hearts.
        </p>
      </motion.div>

      {/* ROW A */}
      <div className="relative mb-12 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex w-max"
        >
          {[...ROW_A, ...ROW_A].map((p, i) => (
            <PhotoCard key={`a-${i}`} {...p} />
          ))}
        </motion.div>
      </div>

      {/* ROW B */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex w-max"
        >
          {[...ROW_B, ...ROW_B].map((p, i) => (
            <PhotoCard key={`b-${i}`} {...p} />
          ))}
        </motion.div>
      </div>

      {/* Edge Fade Left */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-[#120d0b] to-transparent" />

      {/* Edge Fade Right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-[#120d0b] to-transparent" />
    </section>
  );
}