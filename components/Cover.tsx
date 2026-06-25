"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/data/wedding";

type CoverProps = {
  onOpen: () => void;
  guestName?: string;
};

function Typewriter({
  text,
  onDone,
  typingRef,
}: {
  text: string;
  onDone: () => void;
  typingRef: React.RefObject<HTMLAudioElement | null>;
}) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          if (typingRef.current) {
            typingRef.current.currentTime = 0;
            typingRef.current.play().catch(() => {});
          }

          setDisplayed(text.slice(0, displayed.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 50);
      } else {
        onDone();
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, text, onDone, typingRef]);

  return (
    <div
      className="
        font-mono
        text-[#00ff41]
        text-3xl
        md:text-5xl
        whitespace-pre-line
        drop-shadow-[0_0_10px_#00ff41]
      "
    >
      <span className="opacity-70">{"> "}</span>
      {displayed}
      <span className="animate-pulse">█</span>
    </div>
  );
}

export default function Cover({ onOpen, guestName }: CoverProps) {
  const [step, setStep] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [decrypting, setDecrypting] = useState(false);
  const [opening, setOpening] = useState(false);

  const typingRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setDecrypting(true);

    setTimeout(() => {
      setOpening(true);

      setTimeout(() => {
        onOpen();
      }, 1200);
    }, 1800);
  };

  const messages = [
    "Accessing System...",
    "Guest Detected...",
    "Status: Authorized",
    `Hello,\n${guestName || "Guest"}`,
    "File Encrypted...",
  ];

  const handleInitialize = () => {
    setInitialized(true);

    typingRef.current?.play().catch(() => {});

    setTimeout(() => {
      typingRef.current?.pause();

      if (typingRef.current) {
        typingRef.current.currentTime = 0;
      }
    }, 100);
  };
  return (
    <>
      <audio ref={typingRef} src="/music/typing.mp3" preload="auto" />

      {!initialized ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="text-center font-mono text-[#00ff41] px-6"
          >
            <h1
              className="
                text-2xl
                md:text-4xl
                mb-8
                tracking-widest
                drop-shadow-[0_0_12px_#00ff41]
              "
            >
              ACCESS RESTRICTED
            </h1>

            <div className="space-y-2 text-left inline-block text-sm md:text-base mb-10">
              <p>{">"} Wedding Invitation System v1.0</p>
              <p>{">"} Status : Locked</p>
              <p>
                {">"} Guest : {guestName || "Unknown"}
              </p>
            </div>

            <button
              onClick={handleInitialize}
              className="
                border border-[#00ff41]
                px-8 py-4
                tracking-[4px]
                uppercase
                hover:bg-[#00ff41]
                hover:text-black
                transition
                shadow-[0_0_20px_#00ff41]
              "
            >
              Initialize
            </button>
          </motion.div>
        </div>
      ) : (
        <div
          className={`
            fixed inset-0 z-50
            bg-black
            flex items-center justify-center
            overflow-hidden
            transition-all duration-1000
            ${opening ? "opacity-0" : "opacity-100"}
          `}
        >
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,65,.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,65,.2) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          {step < messages.length ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="text-center px-6"
              >
                <Typewriter
                  key={step}
                  text={messages[step]}
                  typingRef={typingRef}
                  onDone={() => setStep((prev) => prev + 1)}
                />
              </motion.div>
            </AnimatePresence>
          ) : decrypting ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center font-mono text-[#00ff41]"
            >
              <p className="text-2xl mb-4">ACCESS GRANTED...</p>

              <p className="opacity-70">LOADING INVITATION...</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="text-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <div className="border border-[#00ff41] p-8 rounded-lg">
                  <div className="text-[#00ff41] text-sm mb-3 tracking-[4px]">
                    ENCRYPTED FILE
                  </div>

                  <div className="text-6xl">📁</div>
                </div>
              </motion.div>

              <button
                onClick={() => {
                  handleOpen();
                }}
                className="
    mt-8
    border
    border-[#00ff41]
    text-[#00ff41]
    px-10
    py-4
    rounded
    relative z-50
  "
              >
                Decrypt
              </button>
            </motion.div>
          )}
        </div>
      )}
    </>
  );
}
