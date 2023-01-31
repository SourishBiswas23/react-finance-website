import React from 'react'

function Newsletter() {
    return (
        <div className="w-full py-16 text-white bg-gray-800">
            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-3">
                <div className='md:col-span-2 mx-2'>
                    <h1 className="font-bold text-xl md:text-4xl sm:text-3xl py-5 ">Want tips and tricks to optimize your flow?</h1>
                    <p>Sign up to our Newsletter and stay up to date</p>
                </div>
                <div className=" lg:mx-4">
                    <div className='my-auto py-4 w-full'>
                        <input type="email" name="email" id="email" placeholder='Enter Email' className='mx-2 rounded px-1 py-2 text-black outline-none w-full' />
                        <button className="text-black font-medium bg-green-400 rounded-lg px-4 py-1 my-4 mx-2 ">Get Started</button>
                    </div>
                    <p className='mx-2'>We care about the protection of your data. Read our <span className="text-green-400">privacy policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter