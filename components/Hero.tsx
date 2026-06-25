import Countdown from "./Countdown";
import { weddingData as data } from "../data/wedding";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#ceebfd]" />

      <div className="relative text-center px-6">
        <p className="uppercase tracking-[6px] text-sm text-neutral-500">
          The Wedding Of
        </p>

        <h1 className="font-title text-6xl md:text-8xl mt-4">{data.groom}</h1>

        <div className="text-3xl my-4 text-[#c8a96a]">&</div>

        <h1 className="font-title text-6xl md:text-8xl">{data.bride}</h1>

        <p className="mt-8 text-lg text-neutral-600">{data.akad.date}</p>

        <Countdown />
      </div>
    </section>
  );
}
