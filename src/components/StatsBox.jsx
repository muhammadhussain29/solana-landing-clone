import React from 'react'

const Stats = ({color, txt, number}) => {
    return (
        <div>
            <h3 className={`lg:text-8xl text-6xl font-light bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{number}</h3>
            <p className='dsemi text-[rgb(157,157,174)] uppercase text-xl'>{txt}</p>
        </div>
    )
}

export default Stats