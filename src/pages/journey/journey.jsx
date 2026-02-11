import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const journeyData = [
{
 img:"/images/di-one.jpeg",
 text:"A beautiful person at heart — strong, kind, and someone who quietly makes life better for everyone around her ❤️"
},
{
 img:"/images/di-two.jpeg",
 text:"Building her career as a software developer while being the emotional backbone of the family… she does both effortlessly."
},
{
 img:"/images/di-three.jpeg",
 text:"No matter how busy her days get, she never forgets to care, to listen, and to stand beside the people she loves 💻✨"
},
{
 img:"/images/di-four.jpeg",
 text:"Independent in her dreams, selfless in her love — a rare balance that makes her truly special 🌸"
},
{
 img:"/images/di-one.jpeg",
 text:"The one who carries responsibilities with a smile, even when no one notices the weight she holds."
},
{
 img:"/images/di-two.jpeg",
 text:"Turning challenges into growth and hard work into success… she inspires more than she realizes."
},
{
 img:"/images/di-three.jpeg",
 text:"For friends she is dependable, for family she is strength, and for me… she is irreplaceable ❤️"
},
{
 img:"/images/di-four.jpeg",
 text:"More than just my sister — she is my safe place, my guide, and one of the greatest blessings in my life."
},
];

// ✨ Writing Animation Component
function WritingText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // typing speed (adjust karo)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="
        text-gray-300
        text-xl
        md:text-2xl
        font-light
        tracking-wide
        max-w-xl
        text-center md:text-left
      "
    >
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </motion.p>
  );
}

function Journey() {

const [index,setIndex] = useState(0);
const musicRef = useRef(null);
const hasStarted = useRef(false);
const navigate = useNavigate()
const handleNext = ()=>{
navigate("/message")
}

useEffect(()=>{

 if(hasStarted.current) return;

 const audio = new Audio("/music/main-song.mp3");

 audio.volume = 0;
 audio.loop = true;

 const playAudio = () =>{
   audio.play().catch(()=>{});
   hasStarted.current = true;
 };

 playAudio();

 let vol = 0;

 const fade = setInterval(()=>{
   if(vol < 0.05){
     vol += 0.005;
     audio.volume = vol;
   }else{
     clearInterval(fade);
   }
 },200);

 musicRef.current = audio;

 return ()=>{
   if(!musicRef.current) return;

   let v = musicRef.current.volume;

   const fadeOut = setInterval(()=>{
     if(v > 0.01){
       v -= 0.01;
       musicRef.current.volume = v;
     }else{
       musicRef.current.pause();
       clearInterval(fadeOut);
     }
   },80);
 };

},[]);


const current = journeyData[index];
const reverse = index % 2 !== 0;

return (

<div className="
min-h-screen
bg-black
px-6
py-28
overflow-hidden
relative
">

{/* Glow */}
<div className="
absolute
w-[600px]
h-[600px]
bg-yellow-500/10
blur-[140px]
rounded-full
top-1/3
left-1/2
-translate-x-1/2
pointer-events-none
"/>


{/* Heading */}
<h1 className="
text-center
text-5xl
md:text-6xl
font-light
tracking-[8px]
bg-gradient-to-r
from-[#D4AF37]
via-[#FFE27A]
to-[#D4AF37]
text-transparent
bg-clip-text
">
Her Journey ✨
</h1>

<div className="flex justify-center gap-3 mt-10">

{journeyData.map((_,i)=>(
  <motion.div
    key={i}
    animate={{
      width: i === index ? 26 : 10,
      backgroundColor: i === index ? "#D4AF37" : "#444"
    }}
    className="h-[6px] rounded-full transition-all"
  />
))}

</div>
<p className="
text-center
mt-6
text-gray-400
tracking-[4px]
font-light
max-w-3xl
mx-auto
">
A story written with courage, grace, and a beautiful heart
</p>



{/* MEMORY BLOCK */}
<div className="mt-32 max-w-6xl mx-auto">

<AnimatePresence mode="wait">

<motion.div
key={index}
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-60}}
transition={{duration:0.8}}
className={`
flex
flex-col md:flex-row
items-center
gap-16
${reverse ? "md:flex-row-reverse":""}
`}
>

{/* PHOTO */}
<motion.div
initial={{scale:0.85,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:0.8}}
className="relative"
>

<div className="
absolute
w-full
h-full
bg-yellow-500/10
blur-3xl
rounded-3xl
pointer-events-none
"/>

<img
src={current.img}
className="
relative
w-[280px]
md:w-[380px]
rounded-3xl
object-cover
shadow-[0_0_60px_rgba(212,175,55,0.25)]
"
/>

</motion.div>



{/* TEXT with Writing Animation */}
<WritingText text={current.text} delay={0.7} />

</motion.div>

</AnimatePresence>

</div>



{/* BUTTON */}
<div className="flex justify-center mt-24">

{index < journeyData.length-1 ? (

<motion.button
onClick={()=>setIndex(prev=>prev+1)}
whileHover={{scale:1.06}}
whileTap={{scale:0.96}}
className="
px-12
py-5
rounded-full
bg-gradient-to-r
from-[#D4AF37]
via-[#FFE27A]
to-[#D4AF37]
text-black
tracking-[4px]
font-semibold
"
>
→
</motion.button>

) : (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="text-center"
>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="
mb-10
text-2xl
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
And the best chapters are yet to come… ✨
</motion.p>


<motion.button
onClick={handleNext}
whileHover={{scale:1.06}}
whileTap={{scale:0.96}}
className="
px-12
py-5
rounded-full
border
border-yellow-500/40
text-yellow-400
tracking-[4px]
"
>
Continue →
</motion.button>

</motion.div>

)}

</div>

</div>
);
}

export default Journey;