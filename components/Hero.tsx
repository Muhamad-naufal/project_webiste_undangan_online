import Countdown from "./Countdown";
import { weddingData as data } from "../data/wedding";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative text-center px-6 text-white max-w-4xl">
        <p className="uppercase tracking-[8px] text-sm text-[#d4b06a] mb-4">
          The Wedding Of
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-title text-6xl md:text-8xl leading-none"
        >
          {data.groom}
        </motion.h1>

        <div className="text-4xl my-2 text-[#d4b06a]">&</div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-title text-6xl md:text-8xl leading-none"
        >
          {data.bride}
        </motion.h1>

        <div className="w-24 h-px bg-[#d4b06a] mx-auto my-2" />

        <p className="text-xl md:text-2xl font-light">{data.akad.date}</p>

        <div className="mt-1">
          <Countdown />
        </div>

        <p className="mt-6 text-sm md:text-base text-neutral-200 italic max-w-2xl mx-auto leading-relaxed">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan hidup dari jenismu sendiri, supaya kamu mendapat ketenangan
          hati."
        </p>

        <p className="mt-2 text-[#d4b06a]">QS. Ar-Rum : 21</p>

        <div className="mt-2 animate-bounce">↓</div>
      </div>
    </section>
  );
}
