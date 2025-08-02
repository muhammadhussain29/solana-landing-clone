import React, { useState } from 'react'
import GrowthBox from './GrowthBox';

const GrowthSection = () => {

    const data = [
        {
            title: "Payment",
            image: "images/growth1.jpg",
            logo: "images/brand-5.png",
            text: "Solana Pay is now available to millions of businesses as an approved app integration on Shopify. Solana Pay is built for immediate USDC transactions, fees that are fractions of a penny, and a net-zero environmental impact.",
            p: "Learn more about Payments on Solana",
            icons: ["images/brand-4.png", "images/brand-7.png", "images/brand-10.png", "images/brand-11.png"]
        },
        {
            title: "Gaming",
            image: "images/growth2.jpg",
            logo: "images/brand-14.png",
            text: "Play and own. Bladerite, a free-to-play melee battle royale game, uses Solana to power its in-game item ownership system.",
            p: "Learn more about Gaming on Solana",
            icons: ["images/brand-15.png", "images/brand-16.png", "images/brand-18.png", "images/brand-17.png", "images/brand-20.png", "images/brand-21.png", "images/brand-19.png"]
        },
        {
            title: "NFTs",
            image: "images/growth3.jpg",
            logo: "images/brand-26.png",
            text: "It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs.",
            p: "Learn more about NFTs on Solana",
            icons: ["images/brand-22.png", "images/brand-23.png", "images/brand-24.png", "images/brand-25.png"]
        },
        {
            title: "defi",
            image: "images/growth4.jpg",
            logo: "images/brand-27.png",
            text: "The Solana community came together to build an open-source order book which can power decentralized finance for everyone.",
            p: "Learn more about DEFI on Solana",
            icons: ["images/brand-29.png", "images/brand-28.png", "images/brand-30.png", "images/brand-31.png"]
        },
        {
            title: "daos",
            image: "images/growth5.jpg",
            logo: "images/brand-32.png",
            text: "The Solana community came together to build an open-source order book which can power decentralized finance for everyone.",
            p: "Learn more about DEFI on Solana",
            icons: ["images/brand-34.png", "images/brand-33.png", "images/brand-35.png"]
        },
    ]

    const [isActive, setIsActive] = useState("Payment")

    return (
        <div className='lg:mt-56 mt-32 lg:px-44 px-4'>
            <div className='flex lg:flex-row flex-col justify-between lg:items-end items-start my-10'>
                <h3 className='md:text-[56px] text-2xl font-bold mb-2'>Build for growth.</h3>

                <ul className='dsemi uppercase overflow-x-scroll scrollbar-none lg:w-max w-full flex gap-2 items-end'>
                    <li onClick={() => setIsActive("Payment")} className={`${isActive === "Payment" ? "border border-[rgb(153,69,255)]" : ""} cursor-pointer rounded-full px-5 py-3 bg-[rgb(27,22,34)] hover:bg-[rgb(31,25,39)]  text-xs`} >Payment</li>
                    <li onClick={() => setIsActive("Gaming")} className={`${isActive === "Gaming" ? "border border-[rgb(153,69,255)]" : ""} cursor-pointer rounded-full px-5 py-3 bg-[rgb(27,22,34)] hover:bg-[rgb(31,25,39)]  text-xs`} >Gaming</li>
                    <li onClick={() => setIsActive("NFTs")} className={`${isActive === "NFTs" ? "border border-[rgb(153,69,255)]" : ""} cursor-pointer rounded-full px-5 py-3 bg-[rgb(27,22,34)] hover:bg-[rgb(31,25,39)]  text-xs`} >NFTs</li>
                    <li onClick={() => setIsActive("defi")} className={`${isActive === "defi" ? "border border-[rgb(153,69,255)]" : ""} cursor-pointer rounded-full px-5 py-3 bg-[rgb(27,22,34)] hover:bg-[rgb(31,25,39)]  text-xs`} >defi</li>
                    <li onClick={() => setIsActive("daos")} className={`${isActive === "daos" ? "border border-[rgb(153,69,255)]" : ""} cursor-pointer rounded-full px-5 py-3 bg-[rgb(27,22,34)] hover:bg-[rgb(31,25,39)]  text-xs`} >daos</li>
                </ul>
            </div>
            {data
                .filter(elem => elem.title === isActive)
                .map((elem, index) => (
                    <GrowthBox key={index} data={elem} />
                ))}
        </div>
    )
}

export default GrowthSection