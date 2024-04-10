import React from 'react'

const EarlyAccess = () => {
    return (
        <div className='w-full items-center flex gap-6 py-10 px-4 bg-[#11253e] justify-center flex-col'>
            <h3 className='text-4xl font-bold text-white text-center'>Easy access for easy bookings</h3>
            <p className='text-base font-extralight text-white max-w-[600px] text-center'>Share your Calendly link right from your browser, so you can schedule meetings withour the back-and-forth</p>
            <div className='flex gap-2 text-sm text-white'>
                <button className='bg-[#2f6af5] p-2 border-[1.5px] border-[#2f6af5] rounded-lg'>Start for free</button>
                <button className='border-[1.5px] p-2 rounded-lg'>Talk with sales</button>
            </div>
        </div>
    )
}

export default EarlyAccess