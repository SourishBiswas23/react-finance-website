import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false)

    const handleNav = () => {
        setNavOpen((navOpen) => !navOpen)
    }

    return (
        <div className="text-white px-4 mx-auto flex items-center justify-between h-10">
            <h1 className="w-full text-xl text-green-400 font-bold">REACT</h1>
            <ul className='hidden md:flex'>
                <li className="px-4">Home</li>
                <li className="px-4">Company</li>
                <li className="px-4">Resources</li>
                <li className="px-4">About</li>
                <li className="px-4">Contact</li>
            </ul>
            <div className="text-xl md:hidden" onClick={handleNav}>
                {navOpen ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>}
            </div>
            <div className={navOpen ? "w-2/5 h-full fixed top-0 left-0 bg-gray-800 ease-in-out duration-500 md:hidden" : 'fixed left-[-100%]'}>
                <h1 className="w-full text-xl text-green-400 font-bold px-4 py-4">REACT</h1>
                <ul className='flex flex-col '>
                    <li className="px-4 py-2 border-b border-gray-700">Home</li>
                    <li className="px-4 py-2 border-b border-gray-700">Company</li>
                    <li className="px-4 py-2 border-b border-gray-700">Resources</li>
                    <li className="px-4 py-2 border-b border-gray-700">About</li>
                    <li className="px-4 py-2">Contact</li>
                </ul>
            </div>
        </div>
    )
}
