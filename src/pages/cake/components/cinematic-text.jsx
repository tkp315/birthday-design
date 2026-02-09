import React from "react";
import { motion } from "framer-motion";

function CinematicText({ text,isBirthday }) {

 const words = text.split(" ");

 return (
   <div className="flex flex-wrap justify-center gap-3">

     {words.map((word, i) => (

       <motion.span
         key={i}
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           delay: i * 0.35, // 🔥 controls rhythm
           duration: 0.8
         }}
         className={`
${isBirthday 
 ? "text-5xl md:text-7xl font-semibold tracking-[6px]" 
 : "text-3xl md:text-5xl font-light tracking-[4px]"
}
bg-gradient-to-r
from-[#D4AF37]
via-[#FFE27A]
to-[#D4AF37]
text-transparent
bg-clip-text
`}
       >
         {word}
       </motion.span>

     ))}

   </div>
 );
}

export default CinematicText;