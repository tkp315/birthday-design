import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cake from "./cake";

// import blowSound from "../../../assets/music/blow.mp3";
// import happyBirthday from "../../../assets/music/happy-birthday.mp3";
// import ambientMusic from '../../../assets/music/cake-bg.mp3'
import CinematicText from "./cinematic-text";
import Wish from "./wish";
import CelebrationScene from "./celebration";
import Button from "./button";
import { useNavigate } from "react-router-dom";
function CandleScene() {

  const blowRef = useRef(new Audio("/music/blow.mp3"));
  const musicRef = useRef(new Audio("/music/happy-birthday.mp3"));
  const [stage,setStage] = useState("candle")
  const [showWish, setShowWish] = useState(false);

  const [celebration,setCelebration] = useState(false);

   const navigate = useNavigate();
    const onClick = ()=>{
        navigate("/journey");
    }
const ambientRef = useRef(new Audio("music/cake-bg.mp3"));


  const url =  "/images/cake-1-nobg.png"
    // stage === "candle"
     
    



  // 🎯 HANDLE BLOW
  const handleBlow = () => {

    if (stage !== "candle") return;

    const blow = blowRef.current;

    blow.currentTime = 0;
    blow.volume = 0.25;
    blow.play();
    fadeOutAmbient();
    setStage("blown");
  };

useEffect(()=>{

 const amb = ambientRef.current;

 amb.volume = 0;
 amb.loop = true;
 amb.play();

 // 🔥 smooth fade in
 let vol = 0;

 const fade = setInterval(()=>{

   if(vol < 0.07){
     vol += 0.01;
     amb.volume = vol;
   }
   else clearInterval(fade);

 },200);

 return ()=> clearInterval(fade);

},[])

  // 🎵 MUSIC + WISH FLOW
  useEffect(() => {

    if (stage !== "blown") return;

    const audio = musicRef.current;

    // 🔥 cinematic silence before music
    const musicTimer = setTimeout(() => {

      audio.currentTime = 0;
      audio.volume = 0;
      audio.play();

      let vol = 0;

      const fade = setInterval(() => {

        if (vol < 0.18) {
          vol += 0.02;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }

      }, 200);

      // show wish after music starts
      setTimeout(() => {
        setShowWish(true);
      }, 1200);

    }, 900);


    return () => clearTimeout(musicTimer);

  }, [stage]);



  // 🎬 AUTO MOVE TO CAKE CUT
  useEffect(() => {

    if (!showWish) return;

    const nextScene = setTimeout(() => {
      setStage("celebration");
    }, 80020); // perfect emotional timing

    return () => clearTimeout(nextScene);

  }, [showWish, setStage]);


const fadeOutAmbient = () => {

 let vol = ambientRef.current.volume;

 const fade = setInterval(()=>{

   if(vol > 0.01){
     vol -= 0.01;
     ambientRef.current.volume = vol;
   }
   else{
     clearInterval(fade);
     ambientRef.current.pause();
   }

 },80);
};
  return (
    <motion.div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      flex-col
      bg-[radial-gradient(circle_at_center,_#121212_0%,_#050505_55%,_#000_100%)]
      relative
      overflow-hidden
      "
      animate={{
        filter: stage !== "candle"
          ? "brightness(0.75)"
          : "brightness(1)"
      }}
      transition={{ duration: 0.6 }}
    >

      {/* Ambient Glow */}
      <div
        className="
        absolute
        w-[520px]
        h-[520px]
        bg-yellow-500/7
        blur-[120px]
        rounded-full
        pointer-events-none
        "
      />



      {/* 🎂 CAKE */}
      <div className="relative z-10">

        <AnimatePresence mode="wait">
          <motion.div
            key={url}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.6 }}
          >
         {stage==='candle' &&    <Cake url={url} />}
          </motion.div>
        </AnimatePresence>

      </div>



      {/* 💨 SMOKE */}
      {stage === "blown" && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.6 }}
          animate={{
            opacity: [0.7, 0.4, 0],
            y: -80,
            x: [0, 6, -3, 2], // realism drift
            scale: 1.4
          }}
          transition={{
            duration: 2.2,
            ease: "easeOut"
          }}
          className="
          absolute
          top-[8%]
          left-1/2
          -translate-x-1/2
          w-[18px]
          h-[60px]
          bg-gray-300
          blur-md
          rounded-full
          "
        />
      )}



      {/* 🕯️ BLOW BUTTON */}
      {stage === "candle" && (
        <motion.button
          onClick={handleBlow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
          cursor-pointer
          mt-16
          px-8
          py-3
          rounded-full
          bg-[#D4AF37]
          text-black
          font-semibold
          tracking-wide
          shadow-lg
          "
        >
          Blow the Candle 🕯️
        </motion.button>
      )}



      {/* ✨ WISH TEXT */}
      <AnimatePresence>
        {showWish && (

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
            className="
            absolute
            top-[14%]
            text-center
            pointer-events-none
            "
          >
{/* 
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="
              text-3xl md:text-5xl
              tracking-[6px]
              font-light
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#FFE27A]
              to-[#D4AF37]
              text-transparent
              bg-clip-text
              "
            >
              To A Very Special One ✨
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1.5 }}
              className="
              mt-6
              text-gray-300
              tracking-[4px]
              text-lg
              "
            >
              On Her Happiest Birthday ❤️
            </motion.p> */}
        <Wish/>
          </motion.div>

        )}
      </AnimatePresence>
      
      {
        stage ==='celebration' && (
          <Button onClick={onClick}/>
        )
      }
    </motion.div>
  );
}

export default CandleScene;