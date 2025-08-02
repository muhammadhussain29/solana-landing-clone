import React, { useState, useEffect, useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { AiOutlineEnter } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

const Search = ({ isSearch, setIsSearch }) => {

    const [isActiveSearch, setIsActiveSearch] = useState(true)
    const toggleIsActiveSearch = () => {
        setIsActiveSearch(!isActiveSearch)
    }

    const searchRef = useRef(null);
    // Close search if click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSearch && searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearch(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isSearch]);

    useEffect(() => {
        if (isSearch) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = ''; // Re-enable scroll
        }

        return () => {
            document.body.style.overflow = ''; // Cleanup on unmount
        };
    }, [isSearch]);

    const toggleClose = () => {
        setIsSearch(false)
    }

    return (
        <div className={`${isSearch ? "flex" : "hidden"} fixed top-0 left-0 w-screen h-screen bg-white/20 backdrop-blur-xs z-50  justify-center items-start md:pt-9 pt-0 px-4"`}>
            {/* Search Box */}
            <div ref={searchRef} className={`${isActiveSearch ? "" : "justify-between"} bg-[rgb(18,18,18)] flex flex-col text-white w-full md:max-w-[45rem] md:h-max h-full px-4 py-3 rounded-lg space-y-2`}>
                {/* top row --> search, ask-ai/search-button, info, close-button */}
                <div className="flex justify-between items-center gap-2">
                    <div className={`${isActiveSearch ? "block" : "hidden"} flex items-center gap-2 max-w-2xl w-full`}>
                        <CiSearch className="text-xl text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-grow bg-transparent focus:outline-none text-white px-2 py-1"
                        />
                    </div>
                    <p className={`${isActiveSearch ? "hidden" : "block"} flex items-center gap-1 text-[rgb(100,100,100)]`}>Ask Ai <IoInformationCircleOutline /></p>
                    <div className='flex justify-end items-center gap-2'>
                        {/* buttons ai/search */}
                        <div className="text-sm border cursor-pointer border-[rgb(49,49,49)] rounded flex items-center gap-2 p-0.5">
                            <span onClick={toggleIsActiveSearch} className={`${isActiveSearch ? "bg-[rgb(49,49,49)] " : "bg-none text-[rgb(100,100,100)]"} flex items-center justify-center w-full text-nowrap text-xs px-2 py-1 gap-1 font-semibold rounded`}><CiSearch /> Search </span>
                            <span onClick={toggleIsActiveSearch} className={`${isActiveSearch ? "bg-none text-[rgb(100,100,100)]" : "bg-[rgb(49,49,49)] "} flex items-center justify-center w-full text-nowrap text-xs px-2 py-1 gap-1 font-semibold rounded`}><BsStars /> Ask AI </span>
                        </div>
                        <button onClick={toggleClose} className={`md:hidden block text-[rgb(100,100,100)]`} ><IoMdClose /></button>
                    </div>

                </div>

                {/* Ask AI Button */}
                <div className={`${isActiveSearch ? "block" : "hidden"}`}>
                    <button onClick={toggleIsActiveSearch} className="cursor-pointer group flex justify-between items-center w-full px-3 py-3 rounded-lg hover:bg-[rgb(49,49,49)] hover:border-purple-500 border-purple-500/0 border transition text-sm">
                        <span className="flex items-center gap-2">
                            <img src="favicon.svg" alt="" className='w-5' /> Ask AI
                        </span>
                        <AiOutlineEnter className="text-base opacity-0 group-hover:opacity-100 transition" />
                    </button>
                </div>

                {/* AI Active */}
                <div className={`${isActiveSearch ? "hidden" : "inline-flex"} flex-col py-0`} >
                    <div className='flex px-6 py-8 gap-10'>
                        <div className='pt-1'>
                            <img src="favicon.svg" alt="" className='w-9' />
                        </div>
                        <div className='text-sm'>
                            <p>I'm an AI assistant trained on documentation, github repos, and other content. Ask me anything about
                                <span className='bg-[rgb(153,69,255)] p-0.5 rounded ml-0.5'>Solana</span>.</p>
                            {/* info hover div */}
                            <div className="relative w-full inline-block text-right my-6">
                                {/* Icon */}
                                <div className="inline-flex group items-end justify-end text-white cursor-pointer">
                                    <IoInformationCircleOutline className="text-xs inline-block" />
                                    {/* Tooltip Box */}
                                    <div className="absolute text-left -right-3 bottom-7 hidden group-hover:block w-[400px] bg-[rgb(49,49,49)] text-white p-3 rounded z-10">
                                        Information provided by this AI assistant is not guaranteed to be accurate or comprehensive.
                                    </div>
                                </div>
                            </div>
                            {/* Suggestions */}
                            <p className='text-[10px] font-bold uppercase text-[rgb(100,100,100)]'>Example questions</p>
                            <div className='py-1 flex flex-wrap gap-2'>
                                <p className='text-sm cursor-pointer border-[1px] inline-block p-3 hover:bg-[rgb(49,49,49)] transition rounded-lg border-[rgb(49,49,49)]'>How to quickly install Solana dependencies for local development?</p>
                                <p className='text-sm cursor-pointer border-[1px] inline-block p-3 hover:bg-[rgb(49,49,49)] transition rounded-lg border-[rgb(49,49,49)]'>What is the Solana Account Model?</p>
                                <p className='text-sm cursor-pointer border-[1px] inline-block p-3 hover:bg-[rgb(49,49,49)] transition rounded-lg border-[rgb(49,49,49)]'>What is a Solana Token?</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 rounded-md w-full max-w-2xl mx-auto space-y-4 text-[rgb(100,100,100)]">
                        {/* <!-- Input Field --> */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="How do I get started?"
                                className="w-full bg-[rgb(49,49,49)] text-white text-sm px-4 py-4 pr-10 rounded-md outline-none"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-[rgb(49,49,49)]">
                                {/* <!-- Paper plane icon --> */}
                                <PiPaperPlaneTiltFill />
                            </button>
                        </div>
                        {/* <!-- Footer --> */}
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center space-x-1">
                                <span>Powered by</span>
                                <span className="font-semibold cursor-pointer">inkeep</span>
                            </div>
                            <button className="border cursor-pointer border-gray-500 text-xs px-3 py-1 rounded-md hover:bg-[rgb(49,49,49)] transition">
                                Stack Exchange
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search