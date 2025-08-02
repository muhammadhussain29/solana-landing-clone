import React from 'react'
import StatsBox from './StatsBox'

const Community = () => {
  return (
    <div className="flex lg:flex-row flex-col text-left pt-40 pb-20 lg:px-44 px-4">
      <div className="lg:w-1/2 w-full mb-16">
        <h3 className='lg:text-[42px] text-2xl font-bold leading-tight'>Join a community <br className='lg:block hidden' /> of millions.</h3>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col lg:pl-9 p-0 lg:gap-24 gap-16">
        <StatsBox color={"from-red-300 via-purple-500 to-purple-700"} txt={"Fee Paying Accounts, All Time"} number={"29.7M"} />
        <StatsBox color={"from-cyan-300 via-blue-600 to-blue-700"} txt={"NFTs Minted"} number={"340M+"} />
        <StatsBox color={"from-green-400 via-blue-400 to-blue-700"} txt={"Median Fee per Transaction"} number={"$0.00064"} />
      </div>
    </div>
  )
}

export default Community