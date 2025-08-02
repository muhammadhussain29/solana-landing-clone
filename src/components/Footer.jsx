import React from 'react';
import {
    FaYoutube, FaDiscord, FaRedditAlien, FaGithub,
    FaTelegramPlane, FaGlobe
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';

const socialIcons = [
    { Icon: FaYoutube, label: "YouTube" },
    { Icon: FaXTwitter, label: "Twitter" },
    { Icon: FaDiscord, label: "Discord" },
    { Icon: FaRedditAlien, label: "Reddit" },
    { Icon: FaGithub, label: "GitHub" },
    { Icon: FaTelegramPlane, label: "Telegram" },
];

const Footer = () => {
    return (
        <footer className="bg-black text-white relative w-full overflow-hidden flex flex-col gap-10 xl:px-44 lg:px-20 px-4 py-20 capitalize z-20 diatype">

            {/* Subtler dark gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1a001e]/60 via-[#0d0019]/50 to-[#000]/40" />

            {/* Subtler blurred circles */}
            <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-purple-500/10 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-fuchsia-400/10 rounded-full blur-2xl z-0" />

            {/* Main Content */}
            <div className="z-10 w-full flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">

                {/* Left Section */}
                <div className="md:w-1/2 w-full flex flex-col md:justify-center md:items-start items-center">
                    <p className="dSemi">Managed by</p>
                    <img src="solanaFoundation.png" alt="Solana Foundation Logo" className="h-12 w-max" />

                    <ul className="flex flex-wrap gap-3 items-center mt-3">
                        {socialIcons.map(({ Icon, label }, index) => (
                            <li
                                key={index}
                                className="rounded-full cursor-pointer bg-gray-400 p-1 text-black hover:bg-white transition"
                                title={label}
                            >
                                <Icon className="text-lg" />
                            </li>
                        ))}
                    </ul>

                    <p className="md:block hidden mt-8 text-[rgb(132,136,149)]">
                        © 2025 Solana Foundation. All rights reserved.
                    </p>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 w-full flex flex-row flex-wrap justify-center md:justify-end gap-8 md:gap-20">

                    <ul className="flex flex-col gap-4 text-[rgb(132,136,149)]">
                        <li className="text-white text-nowrap uppercase">Solana</li>
                        {['Grants', 'Break Solana', 'Media kit', 'Careers', 'Disclaimer', 'Privacy Policy'].map((item, i) => (
                            <li key={i} className="hover:text-white cursor-pointer transition">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <ul className="flex flex-col gap-4 text-[rgb(132,136,149)]">
                        <li className="text-white text-nowrap uppercase">Get connected</li>
                        {['Blog', 'Newsletter'].map((item, i) => (
                            <li key={i} className="hover:text-white cursor-pointer transition">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button
                        className="cursor-pointer text-nowrap flex items-start gap-1 text-[rgb(132,136,149)] uppercase"
                        aria-label="Language Selector"
                    >
                        <FaGlobe className="text-xl" />
                        En
                        <IoIosArrowDown />
                    </button>
                </div>
                <div className='md:hidden block w-full h-[0.5px] bg-[rgb(132,136,149,0.5)]' />
                <p className="md:hidden block text-center w-full mt-4 text-[rgb(132,136,149)]">
                        © 2025 Solana Foundation. All rights reserved.
                    </p>
            </div>
        </footer>
    );
};

export default Footer;
