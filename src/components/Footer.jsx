import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

function Footer() {
    return (
        <div className="w-full bg-black">
            <div className="max-w-[1280px] mx-auto py-16 px-4 text-gray-300 w-full">
                <div className="">
                    <h1 className="w-full text-xl text-green-400 font-bold">REACT</h1>
                    <p className='w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, eos nihil minus sit voluptates voluptatum quia odio perspiciatis excepturi ratione veritatis nobis consequuntur eum officiis quasi beatae veniam error temporibus!</p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare size={30}></FaFacebookSquare>
                        <FaDribbbleSquare size={30}></FaDribbbleSquare>
                        <FaGithubSquare size={30}></FaGithubSquare>
                        <FaInstagram size={30}></FaInstagram>
                        <FaTwitterSquare size={30}></FaTwitterSquare>
                    </div>
                </div>
                <div className=" flex justify-between my-5 sm:flex-row flex-col">
                    <div className="my-2">
                        <h4 className="font-medium text-gray-300">Solutions</h4>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Insights</li>
                            <li className="py-2 text-sm">Commerce</li>
                        </ul>
                    </div>
                    <div className="my-2">
                        <h4 className="font-medium text-gray-300">Support</h4>
                        <ul>
                            <li className="py-2 text-sm">Pricing</li>
                            <li className="py-2 text-sm">Documentation</li>
                            <li className="py-2 text-sm">Guides</li>
                            <li className="py-2 text-sm">API Status</li>
                        </ul>
                    </div>
                    <div className="my-2">
                        <h4 className="font-medium text-gray-300">Company</h4>
                        <ul>
                            <li className="py-2 text-sm">About</li>
                            <li className="py-2 text-sm">Jobs</li>
                            <li className="py-2 text-sm">Careers</li>
                            <li className="py-2 text-sm">Press</li>
                        </ul>
                    </div>
                    <div className="my-2">
                        <h4 className="font-medium text-gray-300">Legal</h4>
                        <ul>
                            <li className="py-2 text-sm">Claim</li>
                            <li className="py-2 text-sm">Policy</li>
                            <li className="py-2 text-sm">Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer