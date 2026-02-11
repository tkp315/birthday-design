import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BirthdayEntry({ onEnter }) {

const [popup, setPopup] = useState(false);
const [noClicks, setNoClicks] = useState(0);

const handleNoClick = () => {
  if(noClicks < 2){
    setNoClicks(prev => prev + 1);
  }else{
    setPopup(true);
  }
};

return (
<div className="min-h-screen flex items-center justify-center overflow-hidden relative bg-black">

  {/* ⭐ Moving Golden Glow */}
  <motion.div
    animate={{
      x:[-40,40,-40],
      y:[-20,20,-20]
    }}
    transition={{
      duration:8,
      repeat:Infinity,
      ease:"easeInOut"
    }}
    className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full"
  />



  {/* ⭐ Dialog Card */}
  <motion.div
    initial={{opacity:0, scale:0.9}}
    animate={{opacity:1, scale:1}}
    transition={{duration:0.7}}
    className="
      relative
      max-w-xl
      bg-[#111]/80
      backdrop-blur-md
      border
      border-yellow-500/20
      p-10
      rounded-3xl
      shadow-[0_0_70px_rgba(212,175,55,0.25)]
      text-center
      text-gray-300
    "
  >

    <motion.p
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.3}}
      className="text-xl leading-8 mb-10"
    >
      O meri bholi didi 😌  
      tujhe sachhi lagta hai mai tere liye kuch special karunga? 😂  
      Soch le… andar jaane ke baad emotional bhi ho sakti hai 🤭
    </motion.p>


    {/* ⭐ Buttons */}
    <div className="flex gap-6 justify-center">

      {/* NO BUTTON 😈 */}
      <motion.button
        animate={{
          x: noClicks === 1 ? -50 : noClicks === 2 ? 50 : 0
        }}
        transition={{type:"spring", stiffness:250}}
        whileHover={{scale:1.08}}
        whileTap={{scale:0.95}}
        onClick={handleNoClick}
        className="
          px-7
          py-3
          rounded-full
          border
          border-yellow-400/40
          text-yellow-300
        "
      >
        Thappad khayega 😒
      </motion.button>



      {/* YES BUTTON 🔥 */}
      <motion.button
        onClick={onEnter}
        animate={{
          scale: 1 + (noClicks * 0.08)
        }}
        transition={{type:"spring"}}
        whileHover={{scale:1.12}}
        whileTap={{scale:0.95}}
        className="
          px-7
          py-3
          rounded-full
          bg-gradient-to-r
          from-[#D4AF37]
          via-[#FFE27A]
          to-[#D4AF37]
          text-black
          font-semibold
          shadow-lg
        "
      >
        Tu hai hi pagal 🤦‍♀️
      </motion.button>

    </div>

  </motion.div>



  {/* ⭐ POPUP */}
  <AnimatePresence>
    {popup && (

      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/70
          backdrop-blur-sm
        "
      >

        <motion.div
          initial={{scale:0.6, rotate:-8}}
          animate={{scale:1, rotate:0}}
          exit={{scale:0.6}}
          transition={{type:"spring", stiffness:180}}
          className="
            bg-[#161616]
            p-8
            rounded-2xl
            border
            border-yellow-500/20
            text-center
            shadow-2xl
            max-w-md
          "
        >

          <p className="text-lg mb-6 text-gray-300">
            Acha ji… NO choose kar rahi ho? 😏  
            Tu bhi kya yaad rakhegi…  
            chal thik hai 😂  
            itna bana hi diya hai toh dekh le andar kya hai.
          </p>

          <motion.button
            onClick={onEnter}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            className="
              px-6
              py-2
              rounded-full
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#FFE27A]
              to-[#D4AF37]
              text-black
              font-semibold
            "
          >
            Thik hai, dekh leti hoon 👀
          </motion.button>

        </motion.div>

      </motion.div>

    )}
  </AnimatePresence>

</div>
);
}

export default BirthdayEntry;