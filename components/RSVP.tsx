"use client";

import { useState, useEffect } from "react";
import FadeUp from "./FadeUp";
import { supabase } from "@/lib/supabase";
import SuccessModal from "./SuccessModal";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "hadir",
    guests: 1,
    message: "",
  });

  const [stats, setStats] = useState({
    hadir: 0,
    tidakHadir: 0,
    totalTamu: 0,
  });

  const [successOpen, setSuccessOpen] = useState(false);

  const fetchStats = async () => {
    const { data, error } = await supabase
      .from("rsvp")
      .select("attendance, guests");

    if (error) {
      console.error(error);
      return;
    }

    const hadir = data.filter((item) => item.attendance === "hadir").length;

    const tidakHadir = data.filter(
      (item) => item.attendance === "tidak_hadir",
    ).length;

    const totalTamu = data.reduce((sum, item) => sum + (item.guests || 0), 0);

    setStats({
      hadir,
      tidakHadir,
      totalTamu,
    });
  };

  useEffect(() => {
    fetchStats();
  }, []);

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

    await fetchStats();

    setSuccessOpen(true);

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
                <h3 className="text-2xl font-bold">{stats.hadir}</h3>
                <p>Hadir</p>
              </div>

              <div className="bg-[#faf7f2] p-5 rounded-2xl text-center">
                <h3 className="text-2xl font-bold">{stats.tidakHadir}</h3>
                <p>Tidak Hadir</p>
              </div>

              <div className="bg-[#faf7f2] p-5 rounded-2xl text-center">
                <h3 className="text-2xl font-bold">{stats.totalTamu}</h3>
                <p>Total Tamu</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
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
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </FadeUp>
  );
}
