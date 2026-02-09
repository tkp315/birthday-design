import React from 'react'
import {motion} from 'framer-motion'
function Cake({url}) {
  return (
    <motion.div  
    animate={{ y:[0,-8,0] }}
transition={{
 duration:4,
 repeat:Infinity,
 ease:"easeInOut"
}}
    className="relative flex items-center justify-center">
      <div className="
absolute
top-[18%]
w-[380px]
h-[200px]
bg-white/5
blur-[120px]
rounded-full
"/>

<motion.div
 initial={{opacity:0, scale:0.8}}
 animate={{opacity:1, scale:1}}
 transition={{duration:1.4}}
>
    <div className="
absolute
top-[6%]
left-1/2
-translate-x-1/2
w-[35px]
h-[35px]
bg-yellow-300
rounded-full
blur-md
opacity-90
"/>
<div className="
absolute
top-[5%]
left-1/2
-translate-x-1/2
w-[90px]
h-[90px]
bg-orange-400
rounded-full
blur-2xl
opacity-40
"/>
<motion.div
 animate={{
   scale:[1,1.1,0.95,1],
   opacity:[0.9,1,0.85,1]
 }}
 transition={{
   duration:1.6,
   repeat:Infinity,
   ease:"easeInOut"
 }}
/>

          <motion.img
      
 src={url}
 className="
 w-[340px] md:w-[420px]
 drop-shadow-[0_60px_80px_rgba(0,0,0,0.9)]
 "
/>

</motion.div>

<div className="
absolute
bottom-[-30px]
w-[260px]
h-[40px]
bg-black/70
blur-2xl
rounded-full
"/>
<div className="
absolute
w-[500px]
h-[500px]
bg-yellow-500/5
blur-[120px]
rounded-full
"/>
    </motion.div>
    
  )
}

export default Cake
