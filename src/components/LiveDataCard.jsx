import React, { useEffect, useState } from 'react'
import { MdOutlineArrowForward } from "react-icons/md";

const LiveDataCard = ({heading, number, txt, numTxt, color, isButton=false, buttonTxt=""}) => {

  const [count, setCount] = useState(991921912320);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [100, 1]);

  return (
    <div  className="bg-black/50 w-full backdrop-blur-sm px-8 py-6 rounded text-[rgb(157,157,174)]">
      <h3 className='mt-3 text-white capitalize text-2xl flex font-bold'><span className={`w-px mr-3 ${color} block`}></span>{heading}</h3>
      <p className='text-lg mt-3'>{txt}</p>

      <p className='flex items-center gap-1 mt-5 text-white uppercase text-[28px]'><span className={`h-1 w-1 mb-4 ${color} rounded-full mt-1`}></span>{heading === "Scalable" ? count.toLocaleString(): number}</p>
      
      <p className='dsemi uppercase mt-2 text-xs'>{numTxt}</p>
      <button className={`${isButton ? "block":"hidden"} flex items-center gap-5 mt-1 text-white hover:text-gray-400`} >{buttonTxt} <span><MdOutlineArrowForward className='text-xl' /></span></button>
    </div>
  )
}

export default LiveDataCard