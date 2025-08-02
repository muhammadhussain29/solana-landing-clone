import React from 'react'

const HeroSection = () => {
    return (
        <>
            {/* Hero */}
            <div className='flex flex-col justify-center items-center text-center z-20 relative mt-10 py-14 gap-6 px-4'>
                <h2 className="text-[32px] sm:text-[30px] md:text-[40px] lg:text-[70px] leading-tight font-bold mb-2 text-balance text-center">
                    Powerful for developers.
                    <br className="lg:block sm:hidden block" />
                     Fast for everyone.
                </h2>


                <p className='lg:text-xl md:text-lg text-base text-[rgb(208,208,220)] mb-2'>Bring blockchain to the people. Solana supports experiences
                    <br className='sm:block hidden' /> for power users, new consumers, and everyone in between.</p>

                <div className='dsemi flex sm:flex-row flex-col sm:w-min w-full gap-2 mt-4'>
                    <button className="cursor-pointer text-nowrap px-[18px] py-3 uppercase rounded-full text-white transition bg-gradient-to-r from-[rgb(197,100,238)] via-[rgb(124,42,211)] to-[rgb(45,13,86)] hover:bg-white hover:from-white hover:via-white hover:to-white hover:text-black">Start Building</button>
                    <button className='cursor-pointer text-nowrap px-[18px] py-3 uppercase rounded-full border transition hover:bg-white hover:text-black' >Resources</button>
                </div>
            </div>

            {/* below hero */}
            <div className='text-white diatype overflow-hidden relative py-5 flex flex-col gap-6 mt-7 px-2'>
                <p className='dsemi text-sm text-[rgb(100,169,242)] mb-2 uppercase'>Powering tools and integrations from companies all around the world</p>
                <div className='flex flex-wrap justify-center items-center gap-8'>
                    <img src="images/brand-8.png" alt="" className='w-auto h-6 object-contain' />
                    <img src="images/brand-6.png" alt="" className='w-auto h-6 object-contain' />
                    <img src="images/brand-1.png" alt="" className='w-auto h-6 object-contain' />
                    <img src="images/brand-9.png" alt="" className='w-auto h-6 object-contain' />
                    <img src="images/brand-2.png" alt="" className='w-auto h-6 object-contain' />
                    <img src="images/brand-3.png" alt="" className='w-auto h-6 object-contain' />
                    <img src="images/brand-5.png" alt="" className='w-auto h-6 object-contain' />
                    <img src="images/brand-13.png" alt="" className='w-auto h-6 object-contain' />
                </div>
            </div>
        </>
    )
}

export default HeroSection