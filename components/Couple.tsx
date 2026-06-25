import FadeUp from "./FadeUp";
import { weddingData as data } from "../data/wedding";

export default function Couple() {
  return (
    <FadeUp>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-neutral-500 text-sm">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>

          <div className="text-4xl text-[#000000] mb-4">❦</div>

          <h2 className="font-title text-5xl mt-4 mb-6">Bride & Groom</h2>

          <p className="max-w-2xl mx-auto text-neutral-600">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan acara pernikahan putra-putri kami.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Pria */}
            <div>
              <div className="w-56 h-56 rounded-full overflow-hidden mx-auto mb-6">
                <img
                  src="/groom.jpeg"
                  alt="Groom"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-title text-4xl">{data.groom}</h3>

              <p className="mt-3 text-neutral-600">Putra dari</p>

              <p className="font-medium">{data.groomFather}</p>

              <p className="font-medium">{data.groomMother}</p>
            </div>

            {/* Wanita */}
            <div>
              <div className="w-56 h-56 rounded-full overflow-hidden mx-auto mb-6">
                <img
                  src="/bride.jpeg"
                  alt="Bride"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-title text-4xl">{data.bride}</h3>

              <p className="mt-3 text-neutral-600">Putri dari</p>

              <p className="font-medium">{data.brideFather}</p>

              <p className="font-medium">{data.brideMother}</p>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
