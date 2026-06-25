import FadeUp from "./FadeUp";
import { weddingData as data } from "../data/wedding";
import { motion } from "framer-motion";

export default function Couple() {
  return (
    <FadeUp>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-neutral-500 text-sm">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>

          <div className="text-4xl text-[#000000] mb-4">❦</div>

          <h2 className="font-title text-5xl mt-4 mb-6">Groom & Bride</h2>

          <p className="max-w-2xl mx-auto text-neutral-600">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan acara pernikahan putra-putri kami.
          </p>

          <div className="relative mt-20">
            {/* Ornament Tengah */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full border border-[#d4b06a]/30 bg-white flex items-center justify-center shadow-lg">
                <span className="font-title text-4xl text-[#d4b06a]">&</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-24">
              {/* Groom */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[32px] p-8 shadow-xl border border-[#d4b06a]/10 text-center"
              >
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-[#d4b06a] scale-105" />

                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <img
                      src="/groom.jpeg"
                      alt="Groom"
                      className="w-full h-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                <p className="uppercase tracking-[4px] text-sm text-[#d4b06a] mb-2">
                  The Groom
                </p>

                <h3 className="font-title text-5xl text-neutral-800">
                  {data.groom}
                </h3>

                <div className="w-16 h-px bg-[#d4b06a] mx-auto my-5" />

                <p className="text-neutral-500 italic mb-4">Putra dari</p>

                <p className="font-semibold text-lg">{data.groomFather}</p>

                <p className="font-semibold text-lg">{data.groomMother}</p>
              </motion.div>

              {/* Bride */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[32px] p-8 shadow-xl border border-[#d4b06a]/10 text-center"
              >
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-[#d4b06a] scale-105" />

                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <img
                      src="/bride.jpeg"
                      alt="Bride"
                      className="w-full h-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                <p className="uppercase tracking-[4px] text-sm text-[#d4b06a] mb-2">
                  The Bride
                </p>

                <h3 className="font-title text-5xl text-neutral-800">
                  {data.bride}
                </h3>

                <div className="w-16 h-px bg-[#d4b06a] mx-auto my-5" />

                <p className="text-neutral-500 italic mb-4">Putri dari</p>

                <p className="font-semibold text-lg">{data.brideFather}</p>

                <p className="font-semibold text-lg">{data.brideMother}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
