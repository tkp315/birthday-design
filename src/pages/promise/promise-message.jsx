import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
function PromiseMessage() {
    const navigate = useNavigate();
const promises = [
"Tu kabhi ye nahi bologi ki mai  tera bhai nahi hoon ya Tu meri behen nhi hai  ❤️",

"Tu hamesha mere saath rahegi…",

"Promise kar ki apan saath mein startup shuru karenge… 🚀",

"Jab tujhe meri baat ka bura lage sidha mujhe daantegi, pura gussa nikalegi lekin kabhi chup nhi hogi(dur hu n isliye paas rahti to jo chahe kar leti) 🤍"
];

const [index,setIndex] = useState(0);
const [showReward,setShowReward] = useState(false);

const acceptAudio = useRef(null);
const declineAudio = useRef(null);


// ✅ ACCEPT HANDLER
const handleAccept = ()=>{

// play success sound
if(acceptAudio.current){
  acceptAudio.current.currentTime = 0;
  acceptAudio.current.volume = 0.5;
  acceptAudio.current.play();
}

setShowReward(true);

// show image for dopamine 😄
setTimeout(()=>{
  setShowReward(false);
  setIndex(prev=>prev+1);
},1800);

};


// ✅ DECLINE HANDLER
const handleDecline = ()=>{

if(declineAudio.current){
  declineAudio.current.currentTime = 0;
  declineAudio.current.volume = 0.7;
  declineAudio.current.play();
}

};



return (

<div className="
min-h-screen
bg-black
flex
items-center
justify-center
relative
overflow-hidden
px-6
">

{/* 🌟 Ambient Glow */}
<div className="
absolute
w-[650px]
h-[650px]
bg-yellow-500/10
blur-[160px]
rounded-full
pointer-events-none
"/>


{/* AUDIO */}
<audio ref={acceptAudio} src="/music/accept.mp3"/>
<audio ref={declineAudio} src="/music/decline-meme.mp3"/>


<AnimatePresence mode="wait">

{/* 🎁 REWARD IMAGE */}
{showReward ? (

<motion.img
key="reward"
src="/images/accept-img.jpeg"
initial={{opacity:0,scale:0.6}}
animate={{
  opacity:1,
  scale:[0.8,1.1,1]
}}
exit={{opacity:0}}
transition={{duration:0.6}}
className="
w-[260px]
md:w-[360px]
rounded-3xl
shadow-[0_0_70px_rgba(212,175,55,0.45)]
"
/>

) : index < promises.length ? (

<motion.div
key={index}
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-50}}
transition={{duration:0.6}}
className="
bg-[#151515]
border border-yellow-500/20
p-10
rounded-3xl
max-w-xl
text-center
shadow-[0_0_60px_rgba(212,175,55,0.18)]
"
>

<p className="
text-gray-300
text-xl
leading-relaxed
tracking-wide
">
{promises[index]}
</p>


{/* BUTTONS */}
<div className="flex gap-6 justify-center mt-12">

<motion.button
whileHover={{scale:1.08}}
whileTap={{scale:0.92}}
onClick={handleAccept}
className="
px-8
py-3
rounded-full
bg-gradient-to-r
from-[#D4AF37]
to-[#FFE27A]
text-black
font-semibold
shadow-[0_0_30px_rgba(212,175,55,0.5)]
"
>
Accept ❤️
</motion.button>



<motion.button
whileHover={{x:-6}}   // playful movement 😄
whileTap={{scale:0.9}}
onClick={handleDecline}
className="
px-8
py-3
rounded-full
border
border-gray-500
text-gray-300
"
>
Decline 😏
</motion.button>

</div>

</motion.div>

) : (

/* ⭐ FINAL LOCK SCREEN */
<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
className="text-center"
>

<motion.h1
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="
text-4xl
md:text-5xl
tracking-[6px]
bg-gradient-to-r
from-[#D4AF37]
via-[#FFE27A]
to-[#D4AF37]
text-transparent
bg-clip-text
"
>
Promise Locked Forever 🤝❤️
</motion.h1>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1}}
className="text-gray-400 mt-6 text-lg"
>
Aaj tu phir se mere se 5 saal badi ho gai 😒😂
</motion.p>
<motion.button

initial={{opacity:0, y:20}}
animate={{opacity:1, y:0}}
transition={{delay:1.6}}
whileHover={{scale:1.08}}
whileTap={{scale:0.95}}
onClick={()=>navigate('/last-page')} // 👈 route change kar lena
className="
mt-10
px-10
py-4
rounded-full
bg-gradient-to-r
from-[#D4AF37]
via-[#FFE27A]
to-[#D4AF37]
text-black
font-semibold
tracking-wide
shadow-[0_0_40px_rgba(212,175,55,0.45)]
"
>
Chal ye last hi hai 😄✨
</motion.button>
</motion.div>

)}

</AnimatePresence>
{/* ⭐ NAVIGATION BUTTON */}


</div>
);
}

export default PromiseMessage;