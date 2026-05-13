import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/farewell/Hero";
import { Gallery } from "@/components/farewell/Gallery";
import Reels from "@/components/farewell/Reels";
import { ThankYou } from "@/components/farewell/ThankYou";
import { MusicToggle } from "@/components/farewell/MusicToggle";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Byeeee Seniors — A BE IT Farewell" },
      { name: "description", content: "A cinematic farewell to our BE IT seniors — memories, reels, and gratitude from your juniors." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Hero />
      <Gallery />
      <Reels />
      <ThankYou />
      <MusicToggle />
    </main>
  );
}
