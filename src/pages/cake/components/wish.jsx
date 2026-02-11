import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicText from "./cinematic-text";

function Wish({ setStage }) {

const messages = [

"Kabhi gussa karti h…",
"Kabhi daant deti h…",
"To khabi mujhse ruth jaati h…",
"Kabhi meri harkaton par chillati h…",
"To Kabhi pyaar karti hai",


"Bachpan se to nhi par jab se hum mile hai",
"Par jab se hum mile hai",
"Meri har kahani mein ab tu bhi  h…",
"Diiiiiiiiiiiiiiiii",
"Kabhi dost ban kar…",
"Kabhi teacher ban kar…",
"Sari tension dur kar deti hai..",

"Tu h toh sab kuch aasaan lagta hai…",
];
const birthdayMessages = [

"Bhagwan kare tu jo chahe… ",
" sab tujhe mil jaaye 🌸",


"Tu jo soche…" ,
"wo sab tu achieve kare ✨",

"Har din tere liye nayi umeed aur nayi roshni lekar aaye 🌈",

"Yaad rakh Didu… tu kisi se kam nhi", 
 "Bahut special hai ❤️",

"Tu jahan jaaye ",
"wahan khushiyan apne aap aa jaaye 💫",

"Wishing you a very very",

"Happy Birthday 🎂🎉",
"Meri Pyari Didu..🥰"

];
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("normal");

  // ⏱️ text flow
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
        items-center
        justify-center
        bg-[radial-gradient(circle_at_center,_#121212_0%,_#050505_60%,_#000_100%)]
        relative
        overflow-hidden
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

      {/* 🎂 Cake (Background Anchor) */}
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
          absolute
          
          w-[260px]
          md:w-[320px]
          opacity-70
          pointer-events-none
        "
      />

      {/* 📝 Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
          className="text-center px-6 z-10"
        >
          <CinematicText
            text={currentText}
            isBirthday={phase === "birthday"}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Wish;