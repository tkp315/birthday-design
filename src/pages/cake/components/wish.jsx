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
"Meri har kahani mein ab tu bhi  h…",

"Kabhi dost ban kar…",
"Kabhi teacher ban kar…",
"Sari tension dur kar deti hai..",

"Tu h toh sab kuch aasaan lagta hai…",

"Hamesha Khush rehna…",

];
const birthdayMessages = [

"Today is not just another day…",

"It’s the day someone truly special was born…",

"And without even realizing it…",
"My life became a little more beautiful ❤️",

"My wish for you is simple…",

"May your life always be filled with happiness…",

"May you never stop smiling…",

"Happy ",
"Birthday…",

"Meri pyari pyari  Didu ❤️🎂"

];

const [index,setIndex] = useState(0);

const [phase,setPhase] = useState("normal");
// auto text change
useEffect(()=>{

 if(phase === "normal"){

   if(index === messages.length-1){

     setTimeout(()=>{
       setPhase("birthday");
       setIndex(0);
     },2500);

     return;
   }

   const timer = setTimeout(()=>{
     setIndex(prev => prev + 1);
   },3000);

   return ()=> clearTimeout(timer);
 }


 if(phase === "birthday"){

   if(index === birthdayMessages.length-1){

     setTimeout(()=>{
       setStage("cake-cut");
     },5000);

     return;
   }

   const timer = setTimeout(()=>{
     setIndex(prev => prev + 1);
   },4200); // 🔥 slower for emotion

   return ()=> clearTimeout(timer);
 }

},[index,phase]);

return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-[radial-gradient(circle_at_center,_#121212_0%,_#050505_60%,_#000_100%)]
relative
overflow-hidden
">

{/* Golden glow */}
<div className="
absolute
w-[600px]
h-[600px]
bg-yellow-500/7
blur-[140px]
rounded-full
"/>


<AnimatePresence mode="wait">

<motion.div
 key={phase === "normal"
 ? messages[index]
 : birthdayMessages[index]}
 initial={{opacity:0,y:40}}
 animate={{opacity:1,y:0}}
 exit={{opacity:0,y:-40}}
 transition={{duration:1}}
 className="text-center px-6"
>

<CinematicText 
 text={phase === "normal"
  ? messages[index]
  : birthdayMessages[index]
 }
 isBirthday={phase === "birthday"}
/>
</motion.div>

</AnimatePresence>

</div>

);

}

export default Wish;