import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import calendly from '../assets/calendly.svg'
import { Squash as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MobileNav = ({ isOpen, setOpen }) => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // If the user has scrolled past a certain point, make the MobileNav sticky
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full z-20 ${isOpen ? 'flex' : 'hidden'} ${isSticky ? 'fixed' : 'absolute'} justify-between gap-3 flex-col min-h-screen px-4 py-6 bg-white left-0 top-0`}>
            <div className='w-full flex flex-col'>
                <Link className='flex justify-between h-16 w-full'>
                    <img src={calendly} alt="logo" className='h-10' />
                    <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
                </Link>
                <nav className='flex flex-col text-xl font-medium'>
                    <NavLink className='hover:text-[#2f6af5] py-6 border-b-2 border-[#f1f3f7]'>Individuals</NavLink>
                    <NavLink className='hover:text-[#2f6af5] py-6 border-b-2 border-[#f1f3f7]'>Teams</NavLink>
                    <NavLink className='hover:text-[#2f6af5] py-6 border-b-2 border-[#f1f3f7]'>Enterprise</NavLink>
                    <NavLink className='hover:text-[#2f6af5] py-6 border-b-2 border-[#f1f3f7] flex justify-between gap-2 items-center'>
                        <h3>Product</h3>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </NavLink>
                    <NavLink className='hover:text-[#2f6af5] py-6 border-b-2 border-[#f1f3f7]'>Pricing</NavLink>
                    <NavLink className='hover:text-[#2f6af5] py-6 border-b-2 border-[#f1f3f7] flex justify-between gap-2 items-center'>
                        <h3>Resources</h3>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </NavLink>
                </nav>
            </div>
            <div className='flex flex-col gap-3 items-center text-xl font-medium w-full py-4'>
                <Link className='hover:text-[#4b4b4b]'>Log In</Link>
                <button className='text-white w-full bg-[#2f6af5] p-2 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out'>Get started</button>
            </div>
        </div>
    )
}

export default MobileNav