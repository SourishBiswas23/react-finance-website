import React from 'react'

function Card(props) {

    const detail = props.detail
    console.log(detail.path);

    return (
        <div className="px-4 py-4 rounded-md mx-auto shadow-xl hover:scale-105 duration-300 hover:shadow-2xl">
            <div className="w-48 mx-auto bg-white flex flex-col">
                <img src={detail.path} alt="No image" />
                <h2 className='text-2xl font-bold text-center py-8'>{detail.userCount}</h2>
                <p className='text-center font-bold text-4xl'>{detail.price}</p>
                <div className=" text-center font-medium">
                    <p className='py-2 border-b mx-2 mt-8'>{detail.storageLimit}</p>
                    <p className='py-2 border-b mx-2 '>{detail.userLimit}</p>
                    <p className='py-2 border-b mx-2 '>{detail.dataLimit}</p>
                </div>
                <button className="text-black font-medium bg-green-400 rounded-lg px-4 py-1 my-4 mx-auto hover:bg-green-300">Start Trial</button>
            </div>
        </div>
    )
}

export default Card