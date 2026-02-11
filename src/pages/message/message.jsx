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
par tune har situation ko  himmat se face kiya hai,
mere se jyada ladka to tu hai chudail😂😂.
Tu bahot strong hai dii 
</p>

<br/>

<p>
Agar kabhi raaste mushkil lagen,
toh bas yaad rakhna —
tum un logon mein se ho jo rukte nahi…
balki aur zyada chamakte hain ✨
</p>

<br/>
<p>
Didi sachhi, Tu bahot bahot bahot achhi hai, dil se bol raha hoon.
Tune mujhe hamesha galat raasto par jaane se bachaya hai.
Hn manta hoon mein bahot ziddi hu, nhi hai mujhe samajh kisi chiz ki 
nhi hai mujhe bolne ka dhang, utpatang kuchh bhi bol deta hoon (mummy papa bhi meri isi problem se pareshan hai, mai jinse pyaar karta hoon insecure ho jata hoon.)
lekin tune meri har galtiyon ko maaf kiya hai aur aage bhi kar dena please 
🥰. 
didi chahe hamare bich 959 km ka hi distance rahe but dil se kabhi dur nhi honge please 🧿
</p>
<br/>
<br/>
<p>
Mummy Papa ke baad sirf tujh pe hi vishwas karta hoon didi tu gussa kar, maar, gali de, 
daant, lekin kabhi bhi chup mat hona maanta hoon galtiya karta hoon nhi hoon achha, na hi perfect par jo bhi hoon 
mummy papa ka beta aur tera bhai hoon.  
</p>
<br />
<p>
Dii end mein ye hi bolunga tu 
Hamesha khush reh… aur zindagi mein har din  aage badhti reh ✨
tujhe duniya ki sari khushiyan mile 

</p>
<br/>
<p>
    LOVE YOU SO MUCHH DIDAAAAAAAAAAAA 💞
</p>


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
Pagal si  ❤️
</motion.p>

</motion.div>

)}

</AnimatePresence>

</div>
);
}

export default Message;