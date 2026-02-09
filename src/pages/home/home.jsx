import React, { useRef } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./components/countdown";
import ThreeDCake from "../cake/components/candleScene";
function Home() {
  const text = ["Oye", "Pagal", "🥰🥰"];
  const text2 = ["Surprise", "is", "waiting...", "❤️"];
  const hasPlayed = useRef(false);
  const audioRef = useRef(null);
  const startMusic = () => {
    if (!hasPlayed.current) {
      let volume = 0;
      audioRef.current.volume = volume;
      audioRef.current.play();

      const fade = setInterval(() => {
        if (volume < 0.1) {
          volume += 0.01;
          audioRef.current.volume = volume;
        } else {
          clearInterval(fade);
        }
      }, 200);

      hasPlayed.current = true;
    }
  };
  return (
    <div
      onClick={startMusic}
      className="min-h-screen 
flex 
flex-col 
items-center 
justify-center
bg-[length:200%_200%]
animate-[gradientMove_12s_ease_infinite]
bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#0A0A0A_40%,_#000000_100%)]
text-center "
    >
      {/* Heading -: Laddu sun jara*/}
      {/* Countdown */}
      {/* Tere liye ek chhota sa surprise wait kar raha hai… ❤️  */}
      <audio ref={audioRef} loop hidden>
        <source src="/music/home-page-music.mp3" type="audio/mp3" />
      </audio>
      <div className="relative flex gap-4">
        <div
          className="
    absolute 
    w-[400px] 
    h-[200px] 
    bg-yellow-500 
    opacity-10 
    blur-3xl
  "
        ></div>
        {text.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.4 }}
            className="text-[#D4AF37] text-5xl font-serif space-x-3 max-w-150 tracking-wide mr-3 drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]
bg-clip-text
            "
          >
            {word}
          </motion.span>
        ))}
      </div>
      <div
        className="
w-52 
h-[1px] 
bg-gradient-to-r 
from-transparent 
via-[#D4AF37] 
to-transparent 
my-12
"
      />
      <CountdownTimer />

      <div className="relative flex gap-4 my-12 ">
        <div
          className="
    absolute 
    w-[400px] 
    h-[200px] 
    bg-yellow-500 
    opacity-10 
    blur-3xl
  "
        ></div>
        {text2.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.4 }}
            className="
      text-gray-400
      text-xl md:text-2xl
      font-light
      tracking-[3px]
    "
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Home;
