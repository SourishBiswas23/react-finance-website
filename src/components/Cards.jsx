import React from 'react'
import Card from './Card'

function Cards() {

    const cardDetail = [
        {
            path: './src/assets/single.png',
            userCount: 'Single User',
            price: '$149',
            storageLimit: '500 GB Storage',
            userLimit: '1 Granted User',
            dataLimit: 'Send up to 2 GB',
        },
        {
            path: './src/assets/double.png',
            userCount: 'Two Users',
            price: '$149',
            storageLimit: '500 GB Storage',
            userLimit: '1 Granted User',
            dataLimit: 'Send up to 2 GB',
        },
        {
            path: './src/assets/triple.png',
            userCount: 'Three Users',
            price: '$149',
            storageLimit: '500 GB Storage',
            userLimit: '1 Granted User',
            dataLimit: 'Send up to 2 GB',
        }
    ]

    return (
        <div className="w-full bg-white px-4 py-32">
            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-3 gap-8">
                {...cardDetail.map(detail => <Card detail={detail} ></Card>)}
            </div>
        </div>
    )
}

export default Cards 