import React from 'react'

const Pricing = () => {
    return (
        <div className='w-full flex lg:flex-row flex-col gap-2 py-10'>
            <div className='p-4 flex flex-col justify-between h-[300px] bg-[#f8f8f8] border border-[#f1f3f7] rounded-lg lg:w-[20%] w-[100%]'>
                <div className='w-full flex flex-col gap-1'>
                    <h6 className='text-sm text-[#072e51]'>BASIC</h6>
                    <p className='text-lg text-[#072e51] font-medium mt-3'>Always Free</p>
                    <p className='text-xs text-[#072e51] font-thin'>When you just want the basics</p>
                </div>
                <button className='w-full p-2 border-[1.5px] border-[#2f6af5] text-[#2f6af5] text-xs font-medium rounded-lg'>Get Started</button>
            </div>
            <div className='p-4 flex flex-col justify-between h-[300px] bg-[#f8f8f8] border border-[#f1f3f7] rounded-lg lg:w-[20%] w-[100%]'>
                <div className='w-full flex flex-col gap-1'>
                    <h6 className='text-sm text-[#072e51]'>ESSENTIALS</h6>
                    <p className='text-[#072e51] mt-3 text-xs font-light'><span className='text-lg font-medium'>$8</span>/seat/mo</p>
                    <p className='text-xs text-[#072e51] font-thin'>When you need powerful scheduling automation</p>
                </div>
                <button className='w-full p-2 border-[1.5px] border-[#2f6af5] text-[#2f6af5] text-xs font-medium rounded-lg'>Start Essentials</button>
            </div>
            <div className='p-4 flex flex-col justify-between h-[300px] border border-[#f1f3f7] rounded-lg lg:w-[20%] w-[100%]'>
                <div className='w-full flex flex-col gap-2'>
                    <div className='p-2 text-[8px] w-[72px] flex justify-between font-medium text-[#072e51] bg-[#f7faff] rounded-lg'>Most Popular</div>
                    <h6 className='text-sm text-[#072e51] mt-1'>PROFESSIONAL</h6>
                    <p className='text-[#072e51] mt-3 text-xs font-light'><span className='text-lg font-medium'>$12</span>/seat/mo</p>
                    <p className='text-xs text-[#072e51] font-thin'>When you need customization, integrations and basic team features.</p>
                </div>
                <button className='w-full p-2 bg-[#2f6af5] text-white text-xs font-medium rounded-lg'>Start Professional</button>
            </div>
            <div className='p-4 flex flex-col justify-between h-[300px] bg-[#f7faff] border border-[#f1f3f7] rounded-lg lg:w-[20%] w-[100%]'>
                <div className='w-full flex flex-col gap-1'>
                    <h6 className='text-sm text-[#072e51]'>TEAMS</h6>
                    <p className='text-[#072e51] mt-3 text-xs font-light'><span className='text-lg font-medium'>$16</span>/seat/mo</p>
                    <p className='text-xs text-[#072e51] font-thin'>When your team needs to align on a scheduling process and collaborate</p>
                </div>
                <button className='w-full p-2 border-[1.5px] border-[#2f6af5] text-[#2f6af5] text-xs font-medium rounded-lg'>Try for Free</button>
            </div>
            <div className='p-4 flex flex-col justify-between h-[300px] bg-[#11253e] text-white border border-[#f1f3f7] rounded-lg lg:w-[20%] w-[100%]'>
                <div className='w-full flex flex-col gap-1'>
                    <h6 className='text-sm'>ENTERPRISE</h6>
                    <p className='mt-3 text-xl font-medium'>Contact Us</p>
                    <p className='text-xs font-thin'>When your 30+ member team needs advanced security, control and support</p>
                </div>
                <button className='w-full p-2 border-[1.5px] border-white text-xs font-medium rounded-lg'>Contact Us</button>
            </div>
        </div>
    )
}

export default Pricing