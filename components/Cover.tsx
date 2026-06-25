"use client";

import { useState } from "react";

type CoverProps = {
  onOpen: () => void;
  guestName?: string;
};

export default function Cover({ onOpen, guestName }: CoverProps) {
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setClosing(true);

    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-700 ${
        closing ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div
        className={`relative h-full flex flex-col items-center justify-center text-center px-6 text-white transition-all duration-1000 ${
          closing ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="mb-4 text-4xl text-[#c8a96a]">❦</div>

        <p className="uppercase tracking-[6px] text-sm mb-4">The Wedding Of</p>

        <h1 className="font-title text-5xl md:text-7xl leading-tight">
          Naufal
          <br />
          &
          <br />
          Eka
        </h1>

        <p className="mt-4 text-lg text-neutral-200">25 Oktober 2026</p>

        <div className="w-24 h-px bg-[#c8a96a] my-8" />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-[4px] text-neutral-300">
            Kepada Yth.
          </p>

          <h3 className="text-2xl font-medium mt-2">
            {guestName || "Tamu Undangan"}
          </h3>
        </div>

        <button
          onClick={handleOpen}
          className="bg-[#c8a96a] hover:opacity-90 transition px-8 py-3 rounded-full text-white font-medium shadow-lg"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
