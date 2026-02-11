import { motion } from "framer-motion";

function LastPage() {

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

      {/* Moving Glow */}
      <motion.div
        animate={{ x:[-40,40,-40], y:[-20,20,-20] }}
        transition={{ duration:8, repeat:Infinity, ease:"easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full"
      />

      <motion.div
        initial={{opacity:0, scale:0.9}}
        animate={{opacity:1, scale:1}}
        className="
        max-w-2xl
        bg-[#111]
        p-10
        rounded-3xl
        shadow-[0_0_60px_rgba(212,175,55,0.2)]
        text-gray-300
        leading-9
        tracking-wide
        text-lg
        text-center
        "
      >

       <motion.h1
initial={{opacity:0, y:20}}
animate={{opacity:1, y:0}}
transition={{delay:0.2}}
className="text-3xl font-semibold mb-6 bg-gradient-to-r from-[#D4AF37] via-[#FFE27A] to-[#D4AF37] text-transparent bg-clip-text"
>
Bas bas… ab aur nahi 😌
</motion.h1>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.6}}
className="mb-4"
>
Agar tu yaha tak pahunch gayi hai…  
toh 2 min ruk aur 😂

</motion.p>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1.2}}
className="mb-4"
>
Thanks didi 😄  
itni lambi website patiently handle karne ke liye.
Sach bolu toh mujhe laga tha beech mein hi bol degi —  
"band kar ye sab nautanki." 😂
</motion.p>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1.8}}
className="mb-4"
>
I know mai isse behtar website bana sakta tha
<b>Time kam hone ke kaaran 70% gpt hai Tujhe pata hai mujhe gpt se code likhwana pasand nhi hai </b>
</motion.p>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:3}}
className="mb-6"
>
Chal ab honestly bata —  
<b>website kaisi lagi?</b> 😄  
(mai pahle hi bata deta hoon code quality behad kharab hai 😂)
</motion.p>


<motion.h2
initial={{opacity:0, scale:0.9}}
animate={{opacity:1, scale:1}}
transition={{delay:3.6}}
className="text-2xl font-semibold bg-gradient-to-r from-[#D4AF37] via-[#FFE27A] to-[#D4AF37] text-transparent bg-clip-text"
>
Again Very 
Happy Birthday Meri Favourite Chudail ❤️🎂
</motion.h2>
<motion.h2
initial={{opacity:0, scale:0.9}}
animate={{opacity:1, scale:1}}
transition={{delay:3.6}}
className="text-2xl font-semibold bg-gradient-to-r from-[#D4AF37] via-[#FFE27A] to-[#D4AF37] text-transparent bg-clip-text"
>
Love you so much didaaa ❤️
</motion.h2>
      </motion.div>
    </div>
  );
}

export default LastPage;