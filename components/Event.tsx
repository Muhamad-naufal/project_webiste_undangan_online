import { CalendarDays, MapPin, Clock } from "lucide-react";
import FadeUp from "./FadeUp";
import { weddingData as data } from "../data/wedding";

export default function Event() {
  return (
    <FadeUp>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-4xl text-[#c8a96a] mb-4">❦</div>

            <h2 className="font-title text-5xl mb-4">Wedding Event</h2>

            <p className="text-neutral-600">
              Dengan segala kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i
              untuk hadir dalam acara pernikahan kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Akad */}
            <div className="bg-[#faf7f2] rounded-3xl p-8 shadow-sm">
              <h3 className="font-title text-4xl mb-6">Akad Nikah</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CalendarDays size={20} />
                  <span>{data.akad.date}</span>
                </div>

                <div className="flex gap-3">
                  <Clock size={20} />
                  <span>{data.akad.time}</span>
                </div>

                <div className="flex gap-3">
                  <MapPin size={20} />
                  <span>
                    {data.venue.name}
                    <br />
                    {data.venue.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Resepsi */}
            <div className="bg-[#faf7f2] rounded-3xl p-8 shadow-sm">
              <h3 className="font-title text-4xl mb-6">Resepsi</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CalendarDays size={20} />
                  <span>{data.reception.date}</span>
                </div>

                <div className="flex gap-3">
                  <Clock size={20} />
                  <span>{data.reception.time}</span>
                </div>

                <div className="flex gap-3">
                  <MapPin size={20} />
                  <span>
                    {data.venue.name}
                    <br />
                    {data.venue.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Maps */}
          <div className="mt-12">
            <div className="rounded-3xl overflow-hidden shadow">
              {data.venue.frameUrl && (
                <div
                  className="w-full h-96"
                  dangerouslySetInnerHTML={{ __html: data.venue.frameUrl }}
                />
              )}
            </div>

            <div className="text-center mt-8">
              <a
                href={data.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c8a96a] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
              >
                Buka Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
