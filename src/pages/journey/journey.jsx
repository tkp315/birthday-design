import React from "react";
import { motion } from "framer-motion";
// import didiOne from '../../assets/images/di-one.jpeg'
// import didiTwo from '../../assets/images/di-two.jpeg'
// import didiThree from '../../assets/images/di-three.jpeg'
// import didiFour from '../../assets/images/di-four.jpeg'
// import hallOfFame from '../../assets/music/main-song.mp3'
import { useRef,useEffect } from "react";
    const journeyData = [

{
 img:"/images/di-one.jpeg",
 text:"She carries the warmth of home with effortless love and strength…"
},

{
 img:"/images/di-two.jpeg",
 text:"Building her own path — learning, coding, and growing every single day 💻"
},

{
 img:"/images/di-three.jpeg",
 text:"Energetic, wise, and fearless… someone who rises stronger through every challenge ✨"
},

{
 img:"/images/di-four.jpeg",
 text:"Balancing dreams and responsibilities beautifully… with grace in everything she does 🌸"
},

];

function Journey() {
  const musicRef = useRef(new Audio("/music/main-song.mp3"));


  useEffect(() => {
    const music = musicRef.current;
    music.volume = 0;
    music.loop = true;
    music.play();

    // smooth fade-in
    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 0.05) {
        vol += 0.005;
        music.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 200);

    // fade-out on leave
    return () => {
      let v = music.volume;
      const fadeOut = setInterval(() => {
        if (v > 0.01) {
          v -= 0.01;
          music.volume = v;
        } else {
          music.pause();
          clearInterval(fadeOut);
           }
      }, 80);
    };
  }, []);



return (

<div className="
min-h-screen
bg-black
px-6
py-28
">

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



{/* JOURNEY BLOCKS */}
<div className="mt-32 max-w-6xl mx-auto space-y-32">

{journeyData.map((item,i)=>{

const reverse = i % 2 !== 0;

return(

<div
key={i}
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
initial={{opacity:0, scale:0.9}}
whileInView={{opacity:1, scale:1}}
transition={{duration:0.9}}
viewport={{once:true}}
className="relative"
>

{/* golden glow */}
<div className="
absolute
w-full
h-full
bg-yellow-500/10
blur-3xl
rounded-3xl
"/>

<img
src={item.img}
className="
relative
w-[280px]
md:w-[360px]
rounded-3xl
object-cover
shadow-[0_0_60px_rgba(212,175,55,0.25)]
"
/>

</motion.div>



{/* TEXT */}
<motion.p
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.9}}
viewport={{once:true}}
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
{item.text}
</motion.p>


</div>

);

})}

</div>



{/* END LINE */}
<motion.p
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
viewport={{once:true}}
className="
mt-40
text-center
text-2xl
md:text-3xl
font-light
tracking-[6px]
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

</div>

);
}

export default Journey;