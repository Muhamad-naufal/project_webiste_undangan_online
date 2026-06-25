"use client";

import { useEffect, useState } from "react";
import { weddingData as data } from "@/data/wedding";

export default function Countdown() {
  const weddingDate = new Date(data.akad.date).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3 mt-8 max-w-lg mx-auto">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="bg-white/70 backdrop-blur-md rounded-xl p-4 shadow"
        >
          <div className="text-2xl font-bold">{value}</div>

          <div className="text-xs uppercase tracking-widest">{label}</div>
        </div>
      ))}
    </div>
  );
}
