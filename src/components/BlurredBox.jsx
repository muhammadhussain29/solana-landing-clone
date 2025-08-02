import React from 'react'

const BlurredBox = () => {
    return (
        <div className="relative my-20 xl:px-44 lg:px-20 px-4">
            <div className="relative z-10 md:p-[72px] md:bg-white/5 bg-transparent backdrop-blur-xl flex flex-col justify-center items-center rounded-xl">
                <h2 className="xl:mx-[136px] lg:mx-[30px] md:leading-[60px] md:text-[56px] text-4xl text-white text-center font-black">
                    It's time to join the thousands of creators, artists, and developers using Solana.
                </h2>
                <button className="cursor-pointer mt-10 px-[18px] py-3 uppercase rounded-full text-white transition bg-gradient-to-r from-[rgb(197,100,238)] via-[rgb(124,42,211)] to-[rgb(45,13,86)] hover:bg-white hover:from-white hover:via-white hover:to-white hover:text-black">Start Building</button>
            </div>
        </div>
    )
}

export default BlurredBox