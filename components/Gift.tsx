"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { weddingData as data } from "@/data/wedding";

export default function Gift() {
  const copyRekening = async () => {
    await navigator.clipboard.writeText("1234567890");
    alert("Nomor rekening berhasil disalin");
  };

  return (
    <FadeUp>
      <section className="py-24 px-6 bg-[#ceebfd]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-4xl text-[#c8a96a] mb-4">❦</div>

            <h2 className="font-title text-5xl mb-4">Wedding Gift</h2>

            <p className="text-neutral-600 max-w-2xl mx-auto">
              Doa restu Anda merupakan hadiah terindah bagi kami. Namun apabila
              ingin memberikan tanda kasih, dapat melalui informasi berikut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rekening */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <h3 className="font-title text-3xl mb-6">{data.gift.bank}</h3>

              <p className="text-3xl font-bold tracking-wider">
                {data.gift.accountNumber}
              </p>

              <p className="mt-2 text-neutral-500">
                a.n. {data.gift.accountName}
              </p>

              <button
                onClick={copyRekening}
                className="mt-6 w-full bg-[#c8a96a] text-white py-3 rounded-2xl"
              >
                Salin Nomor Rekening
              </button>
            </div>

            {/* QRIS */}
            <div className="bg-white rounded-3xl shadow-sm p-8 text-center">
              <h3 className="font-title text-3xl mb-6">QRIS</h3>

              <div className="relative w-56 h-56 mx-auto">
                <Image
                  src={data.gift.qr}
                  alt="QRIS"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-neutral-500">Scan QR untuk transfer</p>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
