import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const GrowthBox = ({ data }) => {
    return (
        <>
            <div className='flex lg:flex-row flex-col-reverse text-left bg-[rgb(27,22,34)] rounded-xl overflow-hidden shadow-[rgb(37,26,51)] shadow-[0_25px_40px_rgba(0,0,0,0.25)] '>
                <div className="lg:w-1/2 w-full">
                    <img src={data.image} alt="" className='w-full h-full lg:h-[440px] object-cover' />
                </div>
                <div className="lg:w-1/2 w-full px-8 py-4 flex flex-col justify-center text-white ">
                    <img src={data.logo} alt="" className='w-48' />
                    <p className='text-lg py-4 text-gray-300'>{data.text}</p>
                    <p className='dsemi cursor-pointer flex items-center gap-2 uppercase hover:text-cyan-200'>{data.p} <MdOutlineArrowOutward className='text-lg' /></p>
                </div>
            </div>
            <div className='flex flex-nowrap overflow-x-scroll scrollbar-none w-full lg:justify-between justify-start items-center gap-8 mt-10'>
                {data.icons.map((elem, index)=>(
                    <img src={elem} key={index} alt="" className='h-8 object-contain invert brightness-0' />
                ))}
            </div>
        </>
    )
}

export default GrowthBox