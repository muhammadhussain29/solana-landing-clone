import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { LuPackageSearch } from "react-icons/lu";
import { BsCopy } from "react-icons/bs";
import { FaVectorSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Search from './Search';

const navItems = [
  {
    icon: <CiGlobe />,
    title: 'learn',
    heading: "Start here",
    color: "green-300",
    dropdown: {
      heading: ['Explore all tutorials', 'What is Solana?', 'What is Wallet?', 'Intro to DeFi on Solana'],
      text: ['View the complete learning path', 'Fast, low cost network for digital assets', 'Your gateway to internet capital markets', 'Explore decentralized finance opportunities']
    },
    dropdown2: {
      heading: [],
      text: []
    },
  },
  {
    icon: <MdOutlineSettingsApplications />,
    title: 'developers',
    heading: "Start Building",
    color: "yellow-700",
    dropdown: {
      heading: ['Solana Documentation', 'RPC API', 'Cookbook', 'Developer Learning center'],
      text: ['Official documentation for the Solana blockchain.', 'Solana RPC API reference documentation.', 'Snippets and copyable example code for Solana applications.', 'Start learning how to build today.']
    },
    icon2: <RiStackFill />,
    heading2: "tutorials",
    dropdown2: {
      heading: ['hello world', 'installation', 'EVM to SVM'],
      text: []
    },
  },
  {
    icon: <MdOutlineSettingsApplications />,
    title: 'solutions',
    heading: "tools",
    color: "orange-700",
    dropdown: {
      heading: ['Token Extension', 'DePIN', 'Action and Blockchain Links', 'Wallets', 'permissioned Enviroment', 'games tooling', 'payment tooling', 'commerce tooling', 'financial infrastructure', 'digital assets', 'real world assets', 'mobile'],
      text: []
    },
    icon2: <RiStackFill />,
    heading2: "Use cases",
    dropdown2: {
      heading: ['enterprise', 'gaming and entertainment', 'artist and creators', 'financial institutions'],
      text: []
    },
  },
  {
    icon: <BsCopy />,
    title: 'network',
    heading: "Resources",
    color: "purple-600",
    dropdown: {
      heading: ['Become a validator', 'RPC providers', 'Network Status', 'on and off ramps'],
      text: ['Help run Solana network.', 'Build crypto apps that scales.', 'Network performance and status.', 'Bring your assets to Solana.']
    },
    icon2: <LuPackageSearch />,
    heading2: "Inspect",
    dropdown2: {
      heading: ['solscan', 'solana fm', 'solana explorer'],
      text: ['Explore Solana blockchain in real time', 'Solana bloackchain explorer and indexer', 'Block, account, transections, programs and tokens']
    },
  },
  {
    icon: <FaVectorSquare />,
    title: 'community',
    heading: "Get involved",
    color: "pink-400",
    dropdown: {
      heading: ['news', 'events', 'the collective', 'community resource hub'],
      text: ['The latest in the Solana ecosystem.', 'Experience the Solana community, in real life.', 'Help the greater ecosystem.', 'How to join in.']
    },
    heading2: "breakpoint",
    icon2: '',
    dropdown2: {
      heading: ['images/nav-link-image.png', 'Dec. 11-13, 2025 - ABU DHABI'],
      text: []
    },
  }
];

const borderColors = {
  learn: "border-b-[rgb(25,251,155)]",
  developers: "border-b-[rgb(254,214,18)]",
  solutions: "border-b-[rgb(240,83,33)]",
  network: "border-b-[rgb(153,69,255)]",
  community: "border-b-[rgb(240,135,255)]",
};

const textColors = {
  learn: "text-[rgb(25,251,155)]",
  developers: "text-[rgb(254,214,18)]",
  solutions: "text-[rgb(240,83,33)]",
  network: "text-[rgb(153,69,255)]",
  community: "text-[rgb(240,135,255)]",
};


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (title) => {
    setActiveDropdown(prev => (prev === title ? null : title));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const toggleMenu = () => {
    setIsActiveMenu(!isActiveMenu)
  }

  const [expandedSections, setExpandedSections] = useState({
    developers: true,
    tutorials: true,
    solutions: false,
    network: false,
    community: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const [isSearch, setIsSearch] = useState(false)

  const toggleSearch = () => {
    setIsSearch(true)
    setActiveDropdown(null)
  }

  return (
    <nav className="relative w-full flex flex-wrap justify-between items-center xl:px-44 sm:px-4 px-1 py-4 bg-[rgb(18,18,18)] text-[rgb(132,136,149)] capitalize z-30 diatype">

      <Search isSearch={isSearch} setIsSearch={setIsSearch} />

      {/* Logo */}
      <div className="flex flex-nowrap gap-1 justify-center items-center cursor-pointer min-w-0">
        <img
          src="favicon.svg"
          alt="logo"
          className="w-8 h-8 object-contain shrink-0"
        />
        <img
          src="solana-logo-name.png"
          alt="solana"
          className="w-28 h-6 object-contain shrink-0"
        />
      </div>

      {/* Nav Links desktop */}
      <ul ref={dropdownRef} className={`inline-flex gap-6 items-center text-lg relative `}>
        {navItems.map((item) => (
          <li key={item.title} className={`lg:flex hidden ${activeDropdown === item.title ? `text-white border-b-2 ${borderColors[item.title]}` : "text-gray-500 "} pb-1 pt-1 relative`}>
            <div
              className={`flex cursor-pointer items-center gap-px`}
              onClick={() => toggleDropdown(item.title)}
            >
              {item.title}
              <IoIosArrowDown className={`text-xl transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown */}
            {activeDropdown === item.title && (

              <div className={`lg:flex hidden absolute top-full ${activeDropdown === "community" ? "right-0" : `${activeDropdown === "network" ? "-right-48" : "left-1/2 -translate-x-1/2"}`}  cursor-default mt-3 w-max max-w-screen-md border overflow-hidden border-gray-800 text-[rgb(132,136,149)] rounded-lg shadow-xl z-50`}>

                <div className="flex gap-6 bg-black/85 backdrop-blur-md">
                  {/* First column */}
                  <div className="p-6">
                    <h4 className="text-base uppercase mb-4 flex gap-2 items-center"><span className={`${textColors[item.title]}`}>{item.icon}</span> {item.heading}</h4>
                    {item.dropdown.heading.map((headingItem, index) => (
                      <div key={index} className="cursor-pointer group transition hover:bg-[rgb(18,18,18,0.8)] border-transparent hover:border-gray-300 border-[0.5px] p-2 rounded-xl">
                        <h5 className="text-white text-base mb-1 font-semibold">{headingItem}</h5>
                        <p className="text-base normal-case group-hover:text-white">{item.dropdown.text[index]}</p>
                      </div>
                    ))}
                  </div>

                  {/* Second column */}
                  {item.dropdown2?.heading.length > 0 && (
                    <div className="cursor-default border-l border-[rgb(132,136,149,0.5)] p-6 ">
                      <h4 className="text-base uppercase  mb-4 flex gap-2 items-center">{item.icon2 && <span className={`${textColors[item.title]}`}>{item.icon2}</span>} {item.heading2}</h4>
                      {item.dropdown2.heading.map((headingItem, index) => (
                        <div key={index} className="cursor-pointer group transition hover:bg-[rgb(18,18,18,0.1)] border-transparent hover:border-gray-300 border-[0.5px] p-2 rounded-xl">
                          {/* Handle image or text */}
                          {headingItem.endsWith(".png") || headingItem.endsWith(".jpg") ? (
                            <img src={headingItem} alt="dropdown-img" className="w-[230px] h-auto rounded" />
                          ) : (
                            <h5 className="text-white text-base mb-1 font-semibold">{headingItem}</h5>
                          )}
                          {item.dropdown2.text[index] && (
                            <p className="text-base group-hover:text-white">{item.dropdown2.text[index]}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {activeDropdown === "solutions" &&
                  <div className='p-6 w-full bg-gray-900'>
                    <h4 className='flex items-center gap-2 my-2' ><span className='text-orange-600'><BsCopy /></span>Resources</h4>
                    <div className='flex flex-wrap text-white justify-between'>
                      <p className='w-1/3 py-2 hover:bg-gray-900 hover:border-white rounded-xl px-3 border-[0.5px] border-white/0 mr-10' >solutions Hub</p>
                      <p className='w-1/3 py-2 hover:bg-gray-900 hover:border-white rounded-xl px-3 border-[0.5px] border-white/0 mr-10' >DAOs</p>
                      <p className='w-1/3 py-2 hover:bg-gray-900 hover:border-white rounded-xl px-3 border-[0.5px] border-white/0 mr-10' >AI</p>
                    </div>
                  </div>}

              </div>

            )}
          </li>
        ))}

        {/* Small Screen */}
        <li onClick={toggleMenu} className="lg:hidden block text-white">
          {
            isActiveMenu ?
              <IoMdClose className="text-2xl" />
              :
              <GiHamburgerMenu className="text-2xl" />
          }
        </li>
        {/* Search */}
        <li onClick={toggleSearch} className="flex text-base items-center gap-0.5 rounded-lg border border-gray-700/50 px-2 py-1 cursor-pointer text-gray-400">
          <CiSearch className="text-xl" /> Search
        </li>
      </ul>

      {/* nav links mobile */}
      <div className={`${isActiveMenu ? "block" : "hidden"} lg:hidden absolute max-h-full min-h-screen top-16 inset-0 bg-black text-white z-40 pt-10 px-4 overflow-y-auto`}>

        {/* Subtler dark gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1a001e]/60 via-[#0d0019]/50 to-[#000]/40" />
        {/* Subtler blurred circles */}
        <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-purple-500/10 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-fuchsia-400/10 rounded-full blur-2xl z-0" />

        <ul className='space-y-5' >
          {navItems.map((item, index) => (
            <li key={item.title} className={`space-x-1 relative`}>
              <div
                className={`flex lg:hidden cursor-pointer items-center justify-between gap-px text-lg`}
                onClick={() => toggleDropdown(item.title)}
              >
                {item.title}
                <IoIosArrowDown className={`text-xl transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
              </div>
              <div className='h-[0.5px] mt-3 w-full z-50 bg-gray-500/30' />

              {/* Dropdown */}
              {activeDropdown === item.title && (

                <div className={`cursor-default mt-3 max-w-screen-md border overflow-hidden border-gray-800 text-[rgb(132,136,149)] rounded-lg shadow-xl z-50`}>

                  <div className="flex flex-col gap-6 bg-[rgb(18,18,18)] w-full backdrop-blur-md">
                    {/* First column */}
                    <div className="p-6">
                      <h4 className="text-base uppercase mb-4 flex gap-2 items-center"><span className={`${textColors[item.title]}`}>{item.icon}</span> {item.heading}</h4>
                      {item.dropdown.heading.map((headingItem, index) => (
                        <div key={index} className="cursor-pointer group transition hover:bg-[rgb(18,18,18,0.8)] border-transparent hover:border-gray-300 border-[0.5px] p-2 rounded-xl">
                          <h5 className="text-white text-base mb-1 font-semibold">{headingItem}</h5>
                          <p className="text-base normal-case group-hover:text-white">{item.dropdown.text[index]}</p>
                        </div>
                      ))}
                    </div>

                    {/* Second column */}
                    {item.dropdown2?.heading.length > 0 && (
                      <div className="cursor-default border-t border-[rgb(132,136,149,0.5)] p-6 ">
                        <h4 className="text-base uppercase  mb-4 flex gap-2 items-center">{item.icon2 && <span className={`${textColors[item.title]}`}>{item.icon2}</span>} {item.heading2}</h4>
                        {item.dropdown2.heading.map((headingItem, index) => (
                          <div key={index} className="cursor-pointer group transition hover:bg-[rgb(18,18,18,0.1)] border-transparent hover:border-gray-300 border-[0.5px] p-2 rounded-xl">
                            {/* Handle image or text */}
                            {headingItem.endsWith(".png") || headingItem.endsWith(".jpg") ? (
                              <img src={headingItem} alt="dropdown-img" className="w-[230px] h-auto rounded" />
                            ) : (
                              <h5 className="text-white text-base mb-1 font-semibold">{headingItem}</h5>
                            )}
                            {item.dropdown2.text[index] && (
                              <p className="text-base group-hover:text-white">{item.dropdown2.text[index]}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {activeDropdown === "solutions" &&
                    <div className='p-6 w-full bg-gray-900'>
                      <h4 className='flex items-center gap-2 my-2' ><span className='text-orange-600'><BsCopy /></span>Resources</h4>
                      <div className='flex flex-wrap text-white justify-between'>
                        <p className='w-1/3 py-2 hover:bg-gray-900 hover:border-white rounded-xl px-3 border-[0.5px] border-white/0 mr-10' >solutions Hub</p>
                        <p className='w-1/3 py-2 hover:bg-gray-900 hover:border-white rounded-xl px-3 border-[0.5px] border-white/0 mr-10' >DAOs</p>
                        <p className='w-1/3 py-2 hover:bg-gray-900 hover:border-white rounded-xl px-3 border-[0.5px] border-white/0 mr-10' >AI</p>
                      </div>
                    </div>}


                </div>

              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
