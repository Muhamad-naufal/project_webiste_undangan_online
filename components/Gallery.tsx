"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages as images } from "@/data/gallery";
import FadeUp from "./FadeUp";

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <FadeUp>
        <section className="py-24 px-6 bg-[#ceebfd]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-4xl text-[#c8a96a] mb-4">❦</div>

              <h2 className="font-title text-5xl mb-4">Gallery</h2>

              <p className="text-neutral-600">
                Beberapa momen yang menjadi bagian dari perjalanan kami.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {images.map((image) => (
                <button
                  key={image}
                  onClick={() => setSelected(image)}
                  className="group overflow-hidden rounded-3xl"
                >
                  <div className="relative w-full h-72">
                    <Image
                      src={image}
                      alt="Gallery"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </FadeUp>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
        >
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selected}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
