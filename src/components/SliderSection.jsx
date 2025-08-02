import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slide from './Slide';
import gsap from 'gsap';

const SliderSection = () => {

    const slidesData = [
        {
            icon: false,
            image: "images/slider1.jpg",
            title: "News",
            heading: "Solana Accelerate brings together 3000+ founders, devs, and policymakers in NYC",
            text: "Watch any talk you missed on YouTube covering the latest in crypto product and policy in America.",
            button: "Watch",
        },
        {
            icon: true,
            image: "images/slider2.jpg",
            title: "Developer",
            heading: "Solana Attestation Service is now live",
            text: "Learn how to privately verify off-chain data associated with any wallet using the new open source, permissionless protocol to attest to anything in this blog from the Solana Foundation and Solana Identity Group.",
            button: "Read more",
        },
        {
            icon: true,
            image: "images/slider3.jpg",
            title: "Institution",
            heading: "The Block: Franklin Templeton Extends Franklin Onchain U.S. Government Money Fund to Solana",
            text: "Users can access the fund using Franklin Templeton's BENJI platform.",
            button: "Read",
        },
        {
            icon: true,
            image: "images/slider4.jpg",
            title: "Developer",
            heading: "Electric Capital: Solana Fastest Growing Ecosystem for New Builders",
            text: "The report states that 81% of all DEX transactions come from the Solana ecosystem.",
            button: "Read",
        },
        {
            icon: true,
            image: "images/slider5.jpg",
            title: "Payments",
            heading: "Solana Ecosystem Announces 'Onchain Holiday'",
            text: "Introducing Onchain Holiday: an online Solana-powered shopping event running from that allows users to spend their stablecoins and memecoins on merchandise from over a dozen brands and retailers.",
            button: "Learn More",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);


    const containerRef = useRef(null);
    const intervalRef = useRef(null); // for autoplay

    useEffect(() => {
        const slides = containerRef.current.children;
        Array.from(slides).forEach((slide, index) => {
            gsap.set(slide, {
                xPercent: index * 100,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            });
        });

        startAutoplay(); // start autoplay when component mounts

        return () => {
            stopAutoplay(); // clear interval on unmount
        };
    }, []);

    const slideNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        stopAutoplay();
        const container = containerRef.current;
        const slides = container.children;
        gsap.to(container, {
            xPercent: -100,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
                container.appendChild(slides[0]);
                gsap.set(container, { xPercent: 0 });
                resetSlidePositions();
                setIsAnimating(false);
            },
        });
        setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);

        startAutoplay();
    };

    const slidePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        stopAutoplay();
        const container = containerRef.current;
        const slides = container.children;
        container.insertBefore(slides[slides.length - 1], slides[0]);
        resetSlidePositions();
        gsap.set(container, { xPercent: -100 });

        gsap.to(container, {
            xPercent: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
                setIsAnimating(false);
            },
        });
        setActiveIndex((prevIndex) =>
            (prevIndex - 1 + slidesData.length) % slidesData.length
        );

        startAutoplay();
    };

    const goToSlide = (targetIndex) => {
        if (isAnimating || targetIndex === activeIndex) return;

        // 🔒 Prevent forward beyond last slide
        if (targetIndex > activeIndex && activeIndex === slidesData.length - 1) return;

        // 🔒 Prevent backward beyond first slide
        if (targetIndex < activeIndex && activeIndex === 0) return;

        const container = containerRef.current;
        const totalSlides = slidesData.length;
        const slides = container.children;

        let steps = Math.abs(targetIndex - activeIndex);
        const direction = targetIndex > activeIndex ? 'forward' : 'backward';

        setIsAnimating(true);
        stopAutoplay();

        if (direction === 'backward') {
            for (let i = 0; i < steps; i++) {
                container.insertBefore(slides[slides.length - 1], slides[0]);
            }
        }

        resetSlidePositions();
        gsap.set(container, { xPercent: direction === 'forward' ? 0 : -100 * steps });

        gsap.to(container, {
            xPercent: direction === 'forward' ? -100 * steps : 0,
            duration: 0.5 * steps,
            ease: 'power2.inOut',
            onComplete: () => {
                if (direction === 'forward') {
                    for (let i = 0; i < steps; i++) {
                        container.appendChild(container.firstElementChild);
                    }
                }
                gsap.set(container, { xPercent: 0 });
                resetSlidePositions();
                setActiveIndex(targetIndex);
                setIsAnimating(false);
                startAutoplay();
            }
        });
    };

    const resetSlidePositions = () => {
        const slides = containerRef.current.children;
        Array.from(slides).forEach((slide, index) => {
            gsap.set(slide, {
                xPercent: index * 100,
            });
        });
    };

    // --- AUTOPLAY FUNCTIONS ---
    const startAutoplay = () => {
        stopAutoplay(); // prevent duplicates
        intervalRef.current = setInterval(slideNext, 4000); // change every 4 seconds
    };

    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (
        <>
            <div className='flex mt-16 items-center lg:px-44 px-4'>
                {/* Left Arrow */}
                <button onClick={slidePrev} className="md:static absolute left-2 cursor-pointer z-10 p-2 rounded-full text-[rgb(132,136,149)] hover:text-white">
                    <IoIosArrowBack className="text-3xl" />
                </button>
                <div
                    className="relative w-full max-w-6xl lg:h-[400px] h-[500px] overflow-hidden rounded-2xl bg-[rgb(27,22,34)]"
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                >
                    {/* Slide container */}
                    <div ref={containerRef} className="relative flex items-center justify-center w-full h-full">
                        {slidesData.map((slide, index) => (
                            <Slide key={index} data={slide} />
                        ))}
                    </div>
                </div>
                {/* Right Arrow */}
                <button onClick={slideNext} className="md:static absolute right-2 cursor-pointer z-10 p-2 rounded-full text-[rgb(132,136,149)] hover:text-white">
                    <IoIosArrowForward className="text-3xl" />
                </button>
            </div>

            {/* Slider Dots */}
            <ul className='flex justify-center items-center gap-6 mt-3'>
                {slidesData.map((_, index) => (
                    <li
                        onClick={() => goToSlide(index)}
                        key={index}
                        className={`cursor-pointer p-[3px] rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white' : 'bg-[rgb(132,136,149)]'}`}
                    ></li>
                ))}
            </ul>

        </>
    );
};

export default SliderSection;
