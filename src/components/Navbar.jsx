import React, { useState } from 'react'
import calendly from '../assets/calendly.svg'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isProductHovered, setIsProductHovered] = useState(false);
    const [isResourcesHovered, setIsResourcesHovered] = useState(false);

    return (
        <div className='w-full md:px-16 px-4 flex justify-between items-center h-[64px]'>
            <Link to='/' className='h-full flex justify-center items-center'>
                <img src={calendly} alt="logo" className='h-10' />
            </Link>
            <nav className='h-full lg:flex hidden items-center gap-8 text-base font-medium'>
                <NavLink className='hover:text-[#2f6af5]'>Individuals</NavLink>
                <NavLink className='hover:text-[#2f6af5]'>Teams</NavLink>
                <NavLink className='hover:text-[#2f6af5]'>Enterprise</NavLink>
                <NavLink
                    className='flex items-center hover:text-[#2f6af5] flex-col h-full relative justify-center'
                    onMouseEnter={() => setIsProductHovered(true)}
                    onMouseLeave={() => setIsProductHovered(false)}
                >
                    <div className='flex items-center w-full gap-1'>
                        <p>Product</p>
                        <FontAwesomeIcon icon={isProductHovered ? faChevronUp : faChevronDown} className='h-3' />
                    </div>
                    {isProductHovered ? (
                        <div className='w-full h-1 bg-[#2f6af5] absolute bottom-0'></div>
                    ) : ''}
                </NavLink>
                <NavLink className='hover:text-[#2f6af5]'>Pricing</NavLink>
                <NavLink
                    className='flex items-center hover:text-[#2f6af5] flex-col h-full relative justify-center'
                    onMouseEnter={() => setIsResourcesHovered(true)}
                    onMouseLeave={() => setIsResourcesHovered(false)}
                >
                    <div className='flex items-center w-full gap-1'>
                        <p>Resources</p>
                        <FontAwesomeIcon icon={isResourcesHovered ? faChevronUp : faChevronDown} className='h-3' />
                    </div>
                    {isResourcesHovered ? (
                        <div className='w-full h-1 bg-[#2f6af5] absolute bottom-0'></div>
                    ) : ''}
                </NavLink>
            </nav>
            <div className='h-full flex sm:gap-6 items-center text-sm font-medium gap-2'>
                <Link className='hover:text-[#4b4b4b]'>Log In</Link>
                <button className='text-white bg-[#2f6af5] p-2 rounded-lg text-xs hover:bg-blue-700 transition-all duration-300 ease-in-out'>Get started</button>
            </div>
        </div>
    )
}

export default Navbar