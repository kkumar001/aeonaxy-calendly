import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing';
import FeaturesCard from '../components/FeaturesCard';
import FAQ from '../components/FAQ';
import EarlyAccess from '../components/EarlyAccess';
import Footer from '../components/Footer';

const Home = () => {
    const [isToggled, setIsToggled] = useState(true);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    console.log(isToggled);

    return (
        <div className='w-full min-h-screen flex flex-col'>
            <Navbar />
            <div className='w-full flex flex-col md:px-16 px-4 py-2'>
                <div className='w-full h-[300px] flex items-center justify-center flex-col font-medium sm:text-5xl text-2xl'>
                    <h3 className='text-[#072e51]'>Scheduling should be easy.</h3>
                    <h3 className='text-[#2f6af5]'>Start free.</h3>
                </div>
                <div className='w-full flex  items-center justify-center gap-3'>
                    <p className={`text-xs font-medium ${isToggled ? 'text-[#7f8287]' : 'text-[#2f6af5]'}`}>Billed monthly</p>
                    <label className="switch flex items-center justify-center cursor-pointer">
                        <input type="checkbox" onChange={handleToggle} checked={isToggled} className='cursor-pointer'/>
                            <span className="slider"></span>
                    </label>
                    <p className={`text-xs font-medium ${!isToggled ? 'text-[#7f8287]' : 'text-[#2f6af5]'} `}>Billed annually</p>
                    <div className='p-2 text-xs font-medium text-[#072e51] bg-[#f7faff] rounded-lg'>
                        <p>Save 20% with annual plans</p>
                    </div>
                </div>
                <Pricing />
                <FeaturesCard />
            </div>
            <FAQ />
            <EarlyAccess />
            <Footer />
        </div>
    )
}

export default Home