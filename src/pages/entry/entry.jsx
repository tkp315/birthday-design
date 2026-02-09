import React from "react";
import { motion } from "framer-motion";

function BirthdayEntry({ onEnter }) {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">

      {/* Golden Ambient Glow */}
      <div className="
        absolute
        w-[500px]
        h-[500px]
        bg-yellow-500/10
        blur-[140px]
        rounded-full
      "/>

      {/* Cinematic Button */}
      <motion.button
        onClick={onEnter}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="
          relative
          px-12
          py-5
          rounded-full
          bg-gradient-to-r
          from-[#D4AF37]
          via-[#FFE27A]
          to-[#D4AF37]
          text-black
          font-semibold
          tracking-[3px]
          text-lg
          shadow-[0_0_40px_rgba(212,175,55,0.35)]
        "
      >
        ✨ Enter The Celebration
      </motion.button>

    </div>
  );
}

export default BirthdayEntry;