import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import calendly from '../assets/calendly.svg'
import { Squash as Hamburger } from 'hamburger-react'

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
        <div className={`w-full z-20 ${isOpen ? 'flex' : 'hidden'} ${isSticky ? 'fixed' : 'absolute'} justify-between flex-col min-h-screen px-4 py-6 bg-white left-0 top-0`}>
            <Link className='flex justify-between h-16 w-full'>
                <img src={calendly} alt="logo" className='h-10' />
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
            </Link>
            <nav className='flex flex-col justify-end '>
{/* rfregt */}
            </nav>
        </div>
    )
}

export default MobileNav