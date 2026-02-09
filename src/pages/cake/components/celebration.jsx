import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Cake from "./cake";

function CelebrationScene({ setStage }) {

const [flash,setFlash] = useState(false);
const [confetti,setConfetti] = useState(false);
const [showCake,setShowCake] = useState(false);

useEffect(()=>{

 // golden flash
 setTimeout(()=> setFlash(true), 400);

 // confetti burst
 setTimeout(()=> setConfetti(true), 900);

 // cake entry
 setTimeout(()=> setShowCake(true), 1400);

 // move to cake cutting
 setTimeout(()=> setStage("cake-cut"), 5000);

},[]);


return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-black
relative
overflow-hidden
">


{/* ✨ GOLDEN FLASH */}
<AnimatePresence>
{flash && (

<motion.div
 initial={{opacity:0}}
 animate={{opacity:[0,0.85,0]}}
 transition={{duration:1}}
 className="
fixed
inset-0
bg-yellow-400
pointer-events-none
"
/>

)}
</AnimatePresence>



{/* 🎉 CONFETTI */}
{confetti && (
<Confetti
 numberOfPieces={220}
 recycle={false}
/>
)}



{/* 🎂 CAKE ENTRY */}
<AnimatePresence>

{showCake && (

<motion.div
 initial={{scale:0.5, opacity:0}}
 animate={{
   scale:1,
   opacity:1,
   y:[0,-12,0]
 }}
 transition={{
   type:"spring",
   stiffness:110,
   damping:10
 }}
>

<Cake url="src/assets/images/cake-3-nobg.png"/>

</motion.div>

)}

</AnimatePresence>


</div>

);
}

export default CelebrationScene;