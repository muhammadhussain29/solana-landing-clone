import React from 'react'
import LiveDataCard from '../components/LiveDataCard';

const LiveDataSection = () => {
    return (
        <div className='relative flex flex-wrap w-full min-h-screen xl:px-44 lg:px-20 px-4 py-16 overflow-hidden'>

            {/* bg image */}
            <img src="images/bg-2.png" alt="" className='absolute md:block hidden left-0 w-full z-0' />

            <div className="lg:w-1/3 w-full mt-20">
                <h4 className='md:text-[42px] text-2xl text-left leading-tight'>Made for mass adoption.</h4>
                <p className='dsemi flex gap-1 mt-3 text-[rgb(157,157,174)] uppercase text-xs'><span className='h-1 w-1 bg-cyan-400 rounded-full mt-1'></span> Live data</p>
            </div>

            <div className="lg:w-2/3 w-full flex md:flex-row flex-col gap-5 text-left mt-10" >

                <div className="md:w-1/2 w-full flex flex-col gap-5 md:mt-48 mt-0">
                    <LiveDataCard heading={"Fast"} number={"4,096"} txt={"Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network."} numTxt={"Transactions per Second"} color={"bg-[rgb(34,204,238)]"} />

                    <LiveDataCard heading={"Scalable"} number={"999999"} txt={"Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.0025."} numTxt={"Total Transactions"} color={"bg-[rgb(153,69,255)]"} />
                </div>
                <div className="md:w-1/2 w-full md:mt-20 mt-0 flex flex-col gap-5">
                    <LiveDataCard heading={"Decentralized"} number={"1,052"} txt={"The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant."} numTxt={"Validator Nodes"} color={"bg-[rgb(255,116,74)]"} />

                    <LiveDataCard heading={"Energy Efficient"} number={"0%"} txt={"Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches."} numTxt={"Net Carbon Impact"} color={"bg-[rgb(137,248,202)]"} isButton={true} buttonTxt={"Learn more"} />
                </div>

            </div>
        </div>
    )
}

export default LiveDataSection