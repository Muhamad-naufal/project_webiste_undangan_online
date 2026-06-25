import FadeUp from "./FadeUp";

export default function Footer() {
  return (
    <FadeUp>
      <footer className="bg-[#2f2f2f] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#c8a96a] text-4xl mb-6">❦</div>

          <h2 className="font-title text-5xl md:text-6xl mb-6">Thank You</h2>

          <p className="text-neutral-300 max-w-2xl mx-auto leading-8">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu untuk
            pernikahan kami.
          </p>

          <div className="mt-12">
            <h3 className="font-title text-4xl">Naufal & Eka</h3>

            <p className="text-[#c8a96a] mt-3">25 Oktober 2026</p>
          </div>

          <div className="w-32 h-px bg-[#c8a96a] mx-auto my-10" />

          <p className="text-sm text-neutral-400">
            Made with ❤️ for our special day
          </p>
        </div>
      </footer>
    </FadeUp>
  );
}
