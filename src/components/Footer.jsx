import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import apple from '../assets/apple.svg'
import google from '../assets/google.png'


const Footer = () => {

  return (
    <>
      <div className='w-full lg:px-16 px-4 pt-16 flex lg:flex-row flex-col gap-20 text-[#11253e] lg:items-start items-center'>
        <div className='flex flex-col gap-4 max-w-[450px] justify-between lg:text-left text-center'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-3xl font-bold'>Easy <br className='lg:flex hidden '/> <span className='text-[#2f6af5]'>ahead</span></h3>
            <p className='font-extralight'>We take the work out of connecting with others so you can accomplish more.</p>
          </div>
          <div className='relative w-full flex '>
            <select className='w-full cursor-pointer focus:outline-none p-2 border-[1.5px] border-[#f1f3f7] rounded-lg text-black text-sm font-medium appearance-none'>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="russian">Russian</option>
            </select>
            <div className='absolute right-2 top-2 cursor-pointer'>
              <FontAwesomeIcon icon={faChevronDown} className='' />
            </div>
          </div>
          <div className='flex gap-2 h-16 items-center lg:justify-normal justify-center'>
            <Link>
              <img src={apple} alt="apple" />
            </Link>
            <Link>
              <img src={google} alt="google" className='h-[60px]' />
            </Link>
          </div>
          <div className='flex gap-6 lg:justify-normal justify-center'>
            <Link>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-8 text-[#11253e] font-extralight'>
          <div className='flex md:gap-14 gap-8 sm:text-base text-xs flex-wrap lg:justify-normal justify-center'>
            <div className='flex flex-col gap-4 sm:w-[168px] w-[100px]'>
              <h6 className='font-bold'>About</h6>
              <Link>About Calendly</Link>
              <Link>Contact Us</Link>
              <Link>Newsroom</Link>
              <Link>Careers</Link>
              <Link>Security</Link>
            </div>
            <div className='flex flex-col gap-4 sm:w-[168px] w-[100px]'>
              <h6 className='font-bold'>Solutions</h6>
              <Link>Customer Success</Link>
              <Link>Sales</Link>
              <Link>Recruiting</Link>
              <Link>Information Technology</Link>
              <Link>Marketing</Link>
            </div>
            <div className='flex flex-col gap-4 sm:w-[168px] w-[100px]'>
              <h6 className='font-bold'>Popular Features</h6>
              <Link>Embed Calendly</Link>
              <Link>Availability</Link>
              <Link>Sending Notifications</Link>
              <Link>Using Calendly Mobile</Link>
            </div>
            <div className='flex flex-col gap-4 sm:w-[168px] w-[100px]'>
              <h6 className='font-bold'>Support</h6>
              <Link>Help Center</Link>
              <Link>Video Tutorials</Link>
            </div>
            <div className='flex flex-col gap-4 sm:w-[168px] w-[100px]'>
              <h6 className='font-bold'>Add-Ons</h6>
              <Link>Download for Chrome</Link>
              <Link>Download for Firefox</Link>
            </div>
            <div className='flex flex-col gap-4 sm:w-[168px] w-[100px]'>
              <h6 className='font-bold'>Developers</h6>
              <Link>Developer Tools</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:px-16 px-4 pt-2 pb-4 flex gap-10 justify-between items-center text-[#2f6af5]'>
        <p className='text-xs font-thin'>Copyright Calendly 2024</p>
        <p className='text-xs font-thin'>Privacy / Terms and Conditions</p>
      </div>
    </>
  )
}

export default Footer