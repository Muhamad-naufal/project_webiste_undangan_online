"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";
import { supabase } from "@/lib/supabase";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "hadir",
    guests: 1,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("rsvp").insert([
      {
        name: form.name,
        attendance: form.attendance,
        guests: form.guests,
        message: form.message,
      },
    ]);

    if (error) {
      alert("Terjadi kesalahan");
      console.error(error);
      return;
    }

    alert("Terima kasih ❤️");

    setForm({
      name: "",
      attendance: "hadir",
      guests: 1,
      message: "",
    });
  };

  return (
    <FadeUp>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-4xl text-[#c8a96a] mb-4">❦</div>

            <h2 className="font-title text-5xl mb-4">RSVP</h2>

            <p className="text-neutral-600">Mohon konfirmasi kehadiran Anda.</p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-[#faf7f2] p-5 rounded-2xl text-center">
                <h3 className="text-2xl font-bold">128</h3>
                <p>Hadir</p>
              </div>

              <div className="bg-[#faf7f2] p-5 rounded-2xl text-center">
                <h3 className="text-2xl font-bold">25</h3>
                <p>Tidak Hadir</p>
              </div>

              <div className="bg-[#faf7f2] p-5 rounded-2xl text-center">
                <h3 className="text-2xl font-bold">153</h3>
                <p>Total Tamu</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Nama Lengkap"
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full p-4 rounded-2xl border"
            />

            <select
              value={form.attendance}
              onChange={(e) =>
                setForm({
                  ...form,
                  attendance: e.target.value,
                })
              }
              className="w-full p-4 rounded-2xl border"
            >
              <option value="hadir">Hadir</option>

              <option value="tidak_hadir">Tidak Hadir</option>
            </select>

            <input
              type="number"
              min={1}
              value={form.guests}
              onChange={(e) =>
                setForm({
                  ...form,
                  guests: Number(e.target.value),
                })
              }
              className="w-full p-4 rounded-2xl border"
            />

            <textarea
              rows={4}
              placeholder="Ucapan dan Doa"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="w-full p-4 rounded-2xl border resize-none"
            />

            <button
              type="submit"
              className="w-full bg-[#c8a96a] text-white py-4 rounded-2xl font-medium"
            >
              Kirim RSVP
            </button>
          </form>
        </div>
      </section>
    </FadeUp>
  );
}
