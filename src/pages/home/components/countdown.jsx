import React from 'react'
import Countdown from 'react-countdown'
import {motion} from 'framer-motion'
import BirthdayEntry from '../../entry/entry'
import { useNavigate } from 'react-router-dom'
function CountdownTimer() {
  const navigate = useNavigate()
  const onClick = ()=>{
   navigate("/cake")
  }
    const Box = ({time,label})=>(
     <motion.div
     whileHover={{scale:1.05}}
      initial={{opacity:0, y:30}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.6}}
     className="
      flex flex-col items-center
      bg-white/5 backdrop-blur-lg
      border border-[#D4AF37]/20
      px-6 py-4
      rounded-2xl
   
      font-mono
      shadow-[0_0_40px_rgba(0,0,0,0.6)]
    "
     >
        <span className='text-4xl md:text-5xl font-bold text-[#D4AF37]/80'>
            {time}
        </span>
         <span className="text-sm text-gray-400 tracking-widest">
      {label}
    </span>
     </motion.div>
    )

    const renderer = ({days,hours,minutes,seconds,completed}) =>{

  if(completed){
     // later redirect to cake page
    //  return <span>Loading surprise...</span>
    return (<BirthdayEntry onEnter={onClick}/>)
  }
   return (
     <div className="flex gap-6 mt-10">
      <Box time={days} label="DAYS"/>
      <Box time={hours} label="HOURS"/>
      <Box time={minutes} label="MINUTES"/>
      <Box time={seconds} label="SECONDS"/>
    </div>
   )
    }
  return (
    <Countdown
    date={new Date("Feb 8 2026 11:59:49")}
    renderer={renderer}
    ></Countdown>
  )
}

export default CountdownTimer
