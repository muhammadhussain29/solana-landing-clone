import React, { forwardRef } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

const Slide = forwardRef(({ data }, ref) => {
    return (
        <div
            ref={ref}
            className="w-full h-full flex-shrink-0 flex lg:flex-row flex-col lg:justify-between justify-center items-center bg-[rgb(27,22,34)] p-10 rounded-2xl gap-8"
        >
            {/* Left: Image */}
            <div className="w-1/2 lg:block hidden rounded-xl overflow-hidden">
                <img src={data.image} alt="" className="w-full h-[320px] object-cover" />
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2 w-full h-full text-[rgb(154,154,171)] flex flex-col items-center justify-center gap-4">
                <span className="px-4 py-1.5 text-base uppercase rounded-full text-black bg-gradient-to-r from-[rgb(25,241,154)] via-[rgb(127,233,254)] to-[rgb(103,176,243)]">
                    {data.title}
                </span>
                <h2 className="text-[25px] font-medium">{data.heading}</h2>
                <p className="text-lg">{data.text}</p>
                <button className="cursor-pointer flex items-center gap-2 px-4 py-2 uppercase rounded-full border border-white text-white transition hover:bg-white hover:text-black">
                    {data.button} {data.icon? <MdOutlineArrowOutward /> : "" } 
                </button>
            </div>
        </div>
    );
});

export default Slide;
