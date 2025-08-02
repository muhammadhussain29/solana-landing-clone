import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GallerySlider = () => {
    const containerRef = useRef();
    const wrapperRef = useRef();
    const animationRef = useRef();

    const data = [
        {
            image: "/images/gallery-1.jpg",
            orientation: "tall",
            heading: "Seoul Hacker House",
            text: "Let's build! Local devs came to the Solana Foundation's Seoul Hacker House ahead of Korea Blockchain Week 2022."
        },
        {
            image: null,
            color:"text-[rgb(231,241,126)]",
            orientation: "small",
            heading: "9300",
            text: "Total Solana Breakpoint attendees"
        },
        {
            image: "/images/gallery-2.jpg",
            orientation: "small",
            heading: "London Hacker House",
            text: "Builders joined London Hacker House, a five-day offline event in June 2022, with advice and support from core Solana Lab engineers."
        },
        {
            image: "/images/gallery-3.jpg",
            orientation: "large",
            heading: "Seoul Hacker House",
            text: "Let's build! Local devs came to the Solana Foundation's Seoul Hacker House ahead of Korea Blockchain Week 2022."
        },
        {
            image: "/images/gallery-4.jpg",
            orientation: "small",
            heading: "New Delhi Hacker House",
            text: "Vibe. Mint. Build. Thousands of developers came to build together at the Sept. 2022 New Delhi Solana Hacker House."
        },
        {
            image: null,
            color:"text-[rgb(100,169,242)]",
            orientation: "small",
            heading: "2,082",
            text: "Monthly active programs"
        },
        {
            image: "/images/gallery-5.jpg",
            orientation: "tall",
            heading: "Solana Miami",
            text: "New and native users came to Solana Miami in April 2022 to build, learn, and see real world Solana use cases."
        },
        {
            image: null,
            color:"text-[rgb(235,84,187)]",
            orientation: "small",
            heading: "20,000",
            text: "Solana Hacker House participants"
        },
        {
            image: "/images/gallery-6.jpg",
            orientation: "small",
            heading: "Solana Mobile Announcement",
            text: "Users, developers, and reporters were on the scene when Solana Labs announced the Solana Mobile Stack and Saga device in June 2022."
        },
        {
            image: "/images/gallery-7.jpg",
            orientation: "large",
            heading: "Solana Breakpoint 2022",
            text: "3,800 builders. 3 days. 1 community. Teams from around the world gathered in Lisbon in Nov. 2022 to learn, build, and celebrate at the annual conference from the Solana Foundation."
        },
        {
            image: "/images/gallery-8.jpg",
            orientation: "small",
            heading: "New York Hacker House",
            text: "Start spreading the news. Lines were out the door at the Solana Foundation's New York Hacker House in March 2022."
        },
        {
            image: null,
            color: "text-[rgb(20,241,149)]",
            orientation: "small",
            heading: "48,000",
            text: "Developers building during Solana Hackathons"
        },
    ];

    // Group consecutive small items into columns
    const groupedData = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].orientation === "small" &&
            i + 1 < data.length &&
            data[i + 1].orientation === "small") {
            // Create a column group
            groupedData.push({
                type: "column",
                items: [data[i], data[i + 1]],
                orientation: "small-column"
            });
            i++; // Skip next item as we've grouped it
        } else {
            groupedData.push(data[i]);
        }
    }

    const getSizeClass = (orientation) => {
        switch (orientation) {
            case 'small':
                return 'w-[304px] h-[263px]';
            case 'small-column':
                return 'w-[304px] h-[542px]';
            case 'tall':
                return 'w-[304px] h-[542px]';
            case 'large':
                return 'w-[722px] h-[542px]';
            default:
                return 'w-[304px] h-[263px]';
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            const boxes = container.querySelectorAll(".gallery-item");

            // Calculate total width including gaps
            const totalWidth = Array.from(boxes).reduce(
                (acc, box, index) => acc + box.offsetWidth + (index < boxes.length - 1 ? 24 : 0),
                0
            );

            // The width of one set of items (without duplication)
            const singleLoopWidth = totalWidth / 2;

            // Set container width to accommodate the duplicated items
            container.style.width = `${totalWidth}px`;

            // Create seamless infinite loop
            animationRef.current = gsap.to(container, {
                x: -singleLoopWidth,
                duration: 40, // Adjusted duration for smoother loop
                ease: "none",
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % singleLoopWidth)
                },
                repeat: -1
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => {
        if (animationRef.current) {
            animationRef.current.pause();
        }
    };

    const handleMouseLeave = () => {
        if (animationRef.current) {
            animationRef.current.play();
        }
    };

    const renderItem = (item, index) => {
        if (item.type === "column") {
            return (
                <div
                    key={index}
                    className={`gallery-item flex flex-col gap-6 ${getSizeClass(item.orientation)} rounded-lg flex-shrink-0`}
                >
                    {item.items.map((subItem, subIndex) => (
                        <div
                            key={subIndex}
                            className={`group w-full h-[263px] bg-[rgb(29,26,35)] relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat`}
                            style={{ backgroundImage: subItem.image ? `url(${subItem.image})` : 'none' }}
                        >
                            <ItemContent item={subItem} isCentered={!subItem.image} color={subItem.color? subItem.color :"text-white"} />
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div
                key={index}
                className={`gallery-item bg-[rgb(29,26,35)] group relative overflow-hidden ${getSizeClass(item.orientation)} bg-cover bg-center bg-no-repeat rounded-lg flex-shrink-0`}
                style={{ backgroundImage: item.image ? `url(${item.image})` : 'none' }}
            >
                <ItemContent item={item} isCentered={!item.image} />
            </div>
        );
    };

    const ItemContent = ({ item, isCentered, color }) => {
        const contentClasses = `absolute inset-0 ${isCentered ? 'bg-[rgb(29,26,35)] flex flex-col items-center justify-center text-center' : 'bg-black/70 opacity-0 group-hover:opacity-100'} transition-opacity duration-300 p-8 flex flex-col ${isCentered ? 'justify-center' : 'justify-end text-left'} text-white`;

        return (
            <div className={contentClasses}>
                <h3 className={`font-bold mb-2 whitespace-normal break-words ${color} ${isCentered ? 'text-5xl' : 'text-xl'}`}>
                    {item.heading}
                </h3>
                <p className={`${isCentered ? 'text-sm' : 'text-base'} whitespace-normal break-words`}>
                    {item.text}
                </p>
            </div>
        );
    };

    return (
        <div className='mt-40 mb-30 relative'>
            <div className='flex justify-between items-end lg:px-44 px-4 md:px-8'>
                <h3 className='text-[32px] md:text-[42px] font-bold'>Join a thriving community.</h3>
            </div>

            <div
                className="relative w-full py-10"
                ref={wrapperRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    ref={containerRef}
                    className="flex gap-6 whitespace-nowrap"
                >
                    {[...groupedData, ...groupedData].map((item, index) => renderItem(item, index))}
                </div>
            </div>
        </div>
    );
};

export default GallerySlider;