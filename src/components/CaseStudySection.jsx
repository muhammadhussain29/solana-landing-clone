import React from 'react'
import CaseBox from '../components/CaseBox';
import { MdOutlineArrowForward } from "react-icons/md";

const CaseStudySection = () => {
    return (
        <div className='relative lg:mt-56 mt-32 z-10 lg:px-44 px-4'>
            {/* Header Section */}
            <div className='flex lg:flex-row flex-col lg:justify-between gap-5 lg:items-center items-start my-10'>
                <h3 className='lg:text-[42px] text-3xl font-bold text-left'>Designed for real world use.</h3>
                <button className='dsemi text-nowrap cursor-pointer flex gap-1 items-center px-3 py-1 uppercase rounded-full border border-white text-white transition hover:bg-white hover:text-black'>
                    Go to case studies <MdOutlineArrowForward />
                </button>
            </div>

            {/* Full-width first CaseBox */}
            <div>
                <CaseBox
                    image={"images/case1.jpg"}
                    title={"case study"}
                    heading={"XP"}
                    txt={"XP aims to save consumers from high event ticket fees using Solana."}
                    isFirstOne={true}
                />
            </div>

            {/* Responsive Flex Container */}
            <div className='flex flex-wrap mt-7 -mx-3'>
                {/* Box 1 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                    <CaseBox
                        image={"images/case2.jpg"}
                        title={"case study"}
                        heading={"boba guys"}
                        txt={"Boba Guys used a Solana-powered loyalty program to increase monthly sales by 67%."}
                        headingSize={"text-[30px]"}
                    />
                </div>

                {/* Box 2 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                    <CaseBox
                        image={"images/case3.jpg"}
                        title={"case study"}
                        heading={"homebase"}
                        txt={"Homebase used the Solana blockchain to successfully tokenized a single-family rental property."}
                        headingSize={"text-[30px]"}
                    />
                </div>

                {/* Box 3 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                    <CaseBox
                        image={"images/case4.jpg"}
                        title={"Video"}
                        heading={"hivemapper"}
                        txt={"Hivemapper decentralizes mapping with better real-time data and community incentives"}
                        headingSize={"text-[30px]"}
                    />
                </div>
            </div>
        </div>
    )
}

export default CaseStudySection
