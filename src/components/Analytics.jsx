import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className="w-full bg-white px-16 py-4">
            <div className="max-w-[1240] w-full grid lg:grid-cols-2 mx-auto">
                <img src={Laptop} alt="Laptop image" />
                <div className="flex flex-col justify-center">
                    <p className="text-green-400 font-bold py-2">DATA ANALYTICS DASHBOARD</p>
                    <h3 className="font-bold text-black text-xl py-1">Manage Data Analytics Centrally</h3>
                    <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem odio, voluptatum accusamus debitis ducimus autem commodi voluptate nemo, laborum fugit incidunt esse molestias dolor, optio rem corporis repellat unde? Enim, praesentium. Repudiandae itaque illum aperiam laboriosam numquam necessitatibus iste.</p>
                    <button className="text-green-400 font-bold bg-black rounded mx-auto px-6 py-2 my-5 ">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics