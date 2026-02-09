import { motion } from "framer-motion";


function Button({onClick}) {
   
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">

      {/* Glow */}
      <div className="
        absolute
        w-[300px]
        h-[300px]
        bg-yellow-500/10
        blur-[100px]
        rounded-full
      "/>

      <motion.button
        onClick={onClick}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          boxShadow:[
            "0 0 20px rgba(212,175,55,0.2)",
            "0 0 60px rgba(212,175,55,0.45)",
            "0 0 20px rgba(212,175,55,0.2)"
          ]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="
          relative
          px-12
          py-5
          rounded-full
          text-xl
          tracking-[4px]
          font-light
          bg-gradient-to-r
          from-[#D4AF37]
          via-[#FFE27A]
          to-[#D4AF37]
          text-black
        "
      >
        Meri Didi →
      </motion.button>

    </div>
  );
}

export default Button;