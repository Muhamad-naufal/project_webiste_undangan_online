import FadeUp from "./FadeUp";
import { weddingData as data } from "@/data/wedding";

export default function LoveStory() {
  return (
    <FadeUp>
      <section className="py-24 px-6 bg-[#ceebfd]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-4xl text-[#c8a96a] mb-4">❦</div>

            <h2 className="font-title text-5xl mb-4">Our Love Story</h2>

            <p className="text-neutral-600">
              Setiap perjalanan memiliki cerita, dan inilah sebagian kisah kami.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#c8a96a]" />

            {data.story.map((story, index) => (
              <div key={index} className="relative pl-16 pb-12">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-[#c8a96a] border-4 border-white" />

                <div className="bg-white rounded-2xl shadow-md p-6">
                  <span className="text-[#c8a96a] font-semibold">
                    {story.tahun}
                  </span>

                  <h3 className="text-2xl font-semibold mt-2 mb-2">
                    {story.title}
                  </h3>

                  <p className="text-neutral-600">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
