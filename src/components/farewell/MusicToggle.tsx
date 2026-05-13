import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

import backgroundMusic from "@/assets/Woh Din Chhichhore 128 Kbps.mp3";

// Soft ambient piano loop (royalty-free, hosted on archive.org / pixabay-style CDN).
// const TRACK_URL = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1718e0f2cd.mp3?filename=cinematic-emotional-piano-110226.mp3";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(backgroundMusic);
    a.loop = true;
    a.volume = 0.35;
    ref.current = a;
    return () => {
      a.pause();
    };
  }, []);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-soft-gold bg-film-black/80 text-soft-gold backdrop-blur-md shadow-glow transition hover:scale-110"
      style={{ color: "var(--soft-gold)", borderColor: "var(--soft-gold)" }}
    >
      {playing ? <Music className="h-5 w-5 animate-pulse" /> : <VolumeX className="h-5 w-5" />}
    </button>
  );
}