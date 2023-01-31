import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Hero() {

    return (
        <div className="text-white h-screen">
            <div className="max-w-[800px] w-full flex flex-col mx-auto h-screen text-center justify-center">
                <h3 className="text-green-400 font-bold p-2">GROWING WITH DATA ANALYTICS</h3>
                <h1 className="md:text-7xl py-6 sm:text-6xl text-4xl font-bold ">Grow with data.</h1>
                <TypeAnimation
                    sequence={['Fast, flexible financing for BTB', 1000, 'Fast, flexible financing for BTC', 1000, 'Fast, flexible financing for SAAS', 1000]}
                    speed={10}
                    style={{ fontSize: '2 rem' }}
                    wrapper='span'
                    repeat={Infinity}
                />
                <div className="md:text-2xl text-xl font-bold text-gray-400 py-6">Monitor your data analytics to increase revenue for BTC, BTC and SAAS platforms.</div>
                <button className="text-black font-bold bg-green-400 rounded mx-auto px-6 py-2">Get Started</button>
            </div>
        </div>
    )
}

export default Hero