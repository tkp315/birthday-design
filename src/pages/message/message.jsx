import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Message() {

const [open,setOpen] = useState(false);

return(

<div className="
min-h-screen
bg-black
flex
items-center
justify-center
px-6
relative
overflow-hidden
">

{/* glow */}
<div className="
absolute
w-[500px]
h-[500px]
bg-yellow-500/10
blur-[120px]
rounded-full
pointer-events-none
"/>


<AnimatePresence mode="wait">

{!open ? (

<motion.button
onClick={()=>setOpen(true)}
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
whileHover={{scale:1.06}}
whileTap={{scale:0.96}}
className="
px-10
py-4
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

Ek Chhoti Si Chitthi ❤️

</motion.button>

) : (

<motion.div
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:0.8}}
className="
max-w-3xl
bg-[#111]
p-10
rounded-3xl
shadow-[0_0_60px_rgba(212,175,55,0.2)]
text-gray-300
leading-9
tracking-wide
text-lg
font-light
"
>

<p>Didi,</p>

<br/>

<p>
Zindagi har kisi ko strong nahi banati…
par tumne har challenge ko jis himmat se face kiya hai,
woh mujhe hamesha inspire karta hai.
</p>

<br/>

<p>
Agar kabhi raaste mushkil lagen,
toh bas yaad rakhna —
tum un logon mein se ho jo rukte nahi…
balki aur zyada chamakte hain ✨
</p>

<br/>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:2}}
className="text-2xl text-center mt-10
bg-gradient-to-r
from-[#D4AF37]
via-[#FFE27A]
to-[#D4AF37]
text-transparent
bg-clip-text"
>
Mujhe tum par garv hai ❤️
</motion.p>

</motion.div>

)}

</AnimatePresence>

</div>
);
}

export default Message;