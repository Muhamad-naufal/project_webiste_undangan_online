"use client";

import { useState } from "react";
import Cover from "@/components/Cover";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import LoveStory from "@/components/LoveStory";
import Event from "@/components/Event";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import Gift from "@/components/Gift";
import MusicPlayer from "@/components/MusicPlayer";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <Cover
          onOpen={() => {
            setOpened(true);

            setTimeout(() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }, 100);
          }}
        />
      )}
      <MusicPlayer />
      <main>
        <Hero />
        <Couple />
        <LoveStory />
        <Event />
        <Gallery />
        <RSVP />
        <Gift />
      </main>
      <Footer />
    </>
  );
}

function WeddingPage() {
  const searchParams = useSearchParams();

  const guestName = searchParams.get("to") || "";

  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <Cover guestName={guestName} onOpen={() => setOpened(true)} />
      )}

      <MusicPlayer />

      <main>...</main>
    </>
  );
}
