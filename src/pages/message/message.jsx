import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function AnimatedParagraph({ children, delay = 0 }) {
  const words = children.split(" ");

  return (
    <motion.p className="mb-6">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.35,
            delay: delay + index * 0.1,
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

function Message() {

const [open, setOpen] = useState(false);
const musicRef = useRef(null);
const navigate = useNavigate();


// ⭐ START EXPERIENCE (USER GESTURE FIX)
const startExperience = async () => {

  const audio = new Audio("/music/message-song.mp3");
  audio.volume = 0;
  audio.loop = false;

  try {
    await audio.play(); // allowed because inside click
  } catch(err){
    console.log("Playback blocked:", err);
  }

  // smooth fade
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.12) { // perfect background level
      vol += 0.01;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 120);

  musicRef.current = audio;
  setOpen(true);
};


// ⭐ STOP MUSIC BEFORE NAVIGATION
const handleOnClick = () => {

  if(musicRef.current){

    let v = musicRef.current.volume;

    const fadeOut = setInterval(() => {
      if(v > 0.02){
        v -= 0.02;
        musicRef.current.volume = v;
      }else{
        musicRef.current.pause();
        clearInterval(fadeOut);
        navigate('/promise-message');
      }
    },60);

  }else{
    navigate('/promise-message');
  }

};


return(

<div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

{/* Moving Glow */}
<motion.div
animate={{ x:[-40,40,-40], y:[-20,20,-20] }}
transition={{ duration:8, repeat:Infinity, ease:"easeInOut" }}
className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none"
/>

<AnimatePresence mode="wait">

{!open ? (

<motion.button
onClick={startExperience}
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
whileHover={{scale:1.06}}
whileTap={{scale:0.96}}
className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFE27A] to-[#D4AF37] text-black tracking-[4px] font-semibold"
>
Ek Chhoti Si Chitthi ❤️
</motion.button>

) : (

<motion.div
initial={{opacity:0, scale:0.96}}
animate={{opacity:1, scale:1}}
className="max-w-3xl bg-[#111] p-10 rounded-3xl shadow-[0_0_60px_rgba(212,175,55,0.2)] text-gray-300 leading-9 tracking-wide text-lg font-light"
>

<AnimatedParagraph delay={0}>Didi,</AnimatedParagraph>

<AnimatedParagraph delay={1}>
Sach kahu… tu wo insaan hai jo har situation ko quietly handle kar leti hai.
Strong bhi hai, caring bhi hai… mere se jyada ladka to tu hai 😂
</AnimatedParagraph>

<AnimatedParagraph delay={5}>
Itni responsibilities, itna kaam, aur phir bhi sabka dhyaan —
ye talent har kisi ke paas nahi hota.
Kabhi kabhi sochta hoon energy aati kahan se hai tere andar?
</AnimatedParagraph>

<AnimatedParagraph delay={10}>
Tu life ko jis confidence se handle karti hai na,
usse dekh kar automatically trust aa jata hai
ki "haan… didi hai na, sab theek ho jayega."
</AnimatedParagraph>

<AnimatedParagraph delay={15}>
Aur haan… thodi si pagal toh tu hai 😄
</AnimatedParagraph>

<AnimatedParagraph delay={18}>
Bas ek wish hai —
tu jitni sabko strength deti hai,
utni hi happiness life tujhe har roz de.
</AnimatedParagraph>

<AnimatedParagraph delay={23}>
Exactly waise hi rehna jaise hai —
confident, unstoppable, thodi si pagal… aur meri favourite chudail ❤️
</AnimatedParagraph>

<AnimatedParagraph delay={28}>
Happy Birthday Didi 🎂✨  
Proud of you. Always.
</AnimatedParagraph>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:31}}
className="text-3xl text-center mt-12 font-semibold bg-gradient-to-r from-[#D4AF37] via-[#FFE27A] to-[#D4AF37] text-transparent bg-clip-text mb-6"
>
Meri favourite chudail ❤️
</motion.p>


<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:33}}
className="flex justify-center mt-10"
>
<motion.button
onClick={handleOnClick}
whileHover={{scale:1.08}}
whileTap={{scale:0.95}}
className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFE27A] to-[#D4AF37] text-black font-semibold tracking-wide shadow-lg"
>
Chal Promise Kar 🤝
</motion.button>
</motion.div>

</motion.div>

)}

</AnimatePresence>

</div>
);
}

export default Message;