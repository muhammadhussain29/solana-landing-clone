import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";

const CaseBox = ({ image, title, heading, txt, isFirstOne = false, headingSize = "text-[42px]" }) => {
    return (
        <div className="group relative w-full rounded-2xl overflow-hidden text-left text-white h-full cursor-pointer">
            {/* Background Image */}
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="absolute inset-0 bg-cover bg-center z-0"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgb(18,18,18,0.1)] via-[rgb(18,18,18,0.5)] to-[rgb(18,18,18)] group-hover:from-black/5 group-hover:via-black/5 group-hover:to-black/5 transition-all duration-300 z-10" />

            {/* Content */}
            <div className="relative z-20 px-10 py-10">
                <span className="dsemi px-3 py-1 uppercase rounded-full bg-[rgb(153,69,255)] inline-block text-sm font-light">
                    {title}
                </span>

                <div className="flex justify-between items-center mt-3">
                    <h3 className={`${headingSize} capitalize font-bold`}>{heading}</h3>

                    {/* Button top-right */}
                    <button
                        className={`
                            p-1 rounded-full border border-white flex items-center justify-center 
                            hover:bg-white hover:text-black transition duration-300
                            ${isFirstOne ? "md:hidden block" : "block"}
                        `}
                    >
                        <MdOutlineArrowForward className="text-xl" />
                    </button>
                </div>

                <p className={`${isFirstOne ? "my-8" : "mt-4"} text-lg`}>{txt}</p>

                {/* Button bottom for first card on md+ screens */}
                {isFirstOne && (
                    <button
                        className="hidden md:flex p-1 rounded-full border border-white items-center justify-center hover:bg-white hover:text-black transition duration-300"
                    >
                        <MdOutlineArrowForward className="text-xl" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default CaseBox;
