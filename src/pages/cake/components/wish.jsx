import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicText from "./cinematic-text";

function Wish({ setStage }) {

const messages = [
  "Kabhi Sweet hai .. ",
  "To hai kabhi salty 😁",
  "Kabhi meri harkaton par chillati h…",
  "To Kabhi pyaar se deal karti hai",
  "Kabhi dost ban kar…",
  "To kabi teacher ban kar…",
  "Sari tension dur kar deti hai..",
];

const birthdayMessages = [
  "Meri Pyari Didu..🥰",
  "Bhagwan kare tu jo chahe… ",
  " sab tujhe mil jaaye 🌸",
  "Tu jo soche…" ,
  "wo sab tu achieve kare ✨",
  "Har din tere liye nayi umeed aur nayi roshni lekar aaye 🌈",
  "Yaad rakh Didu… tu kisi se kam nhi", 
  "Bahut special hai ❤️",
  "Tu jahan jaaye ",
  "wahan khushiyan apne aap aa jaaye 💫",
  "Wishing you 🌠",
  "A very very ",
  "Happy Birthday 🎂🎉",
  "Diduu"
];

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("normal");

  useEffect(() => {
    if (phase === "normal") {
      if (index === messages.length - 1) {
        setTimeout(() => {
          setPhase("birthday");
          setIndex(0);
        }, 2500);
        return;
      }

      const t = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 3000);

      return () => clearTimeout(t);
    }

    if (phase === "birthday") {
      if (index === birthdayMessages.length - 1) {
        setTimeout(() => {
          setStage("cake-cut");
        }, 5000);
        return;
      }

      const t = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 4200);

      return () => clearTimeout(t);
    }

  }, [index, phase, setStage]);

  const currentText =
    phase === "normal" ? messages[index] : birthdayMessages[index];

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        bg-[radial-gradient(circle_at_center,_#121212_0%,_#050505_60%,_#000_100%)]
        relative
        overflow-hidden
        py-8
      "
    >
      {/* ✨ Golden Glow */}
      <div
        className="
          absolute
          w-[600px]
          h-[600px]
          bg-yellow-500/10
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      {/* 📝 Text (Top) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1.5 }}
          className="text-center px-6 z-10 mt-8"
        >
          <CinematicText
            text={currentText}
            isBirthday={phase === "birthday"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Spacer */}
      <div className="flex-1" />

      {/* 🎂 Cake (Bottom) */}
      <motion.img
        src="/images/cake-3-nobg.png"
        alt="Cake"
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: phase === "birthday" ? 1.05 : 1,
        }}
        transition={{ duration: 1 }}
        className="
          w-[260px]
          md:w-[320px]
          opacity-70
          pointer-events-none
          z-10
          mb-8
        "
      />
    </div>
  );
}

export default Wish;