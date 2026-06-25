"use client";

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center animate-in fade-in zoom-in duration-300">
        <div className="text-6xl mb-4">❤️</div>

        <h2 className="font-title text-3xl mb-3">Terima Kasih</h2>

        <p className="text-neutral-600 mb-8">
          RSVP dan ucapan Anda berhasil kami terima.
        </p>

        <button
          onClick={onClose}
          className="bg-[#c8a96a] text-white px-6 py-3 rounded-full"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
