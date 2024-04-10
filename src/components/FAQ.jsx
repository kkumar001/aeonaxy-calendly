import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const FAQ = () => {
    return (
        <div className='w-full flex md:flex-row flex-col md:items-start items-center gap-10 py-[60px] bg-[#f8f8f8] text-[#072e51] justify-center px-4'>
            <div className='flex'>
                <h3 className='text-3xl font-semibold text-center'>Frequently <br className='md:flex hidden'/> Asked <br className='md:flex hidden'/> Questions</h3>
            </div>
            <div className='flex flex-col gap-4 text-lg font-medium max-w-[400px] md:w-auto w-full'>
                <div className='p-3 gap-4 bg-white border-[1.5px] border-[#f1f3f7] flex justify-between items-center rounded-lg'>
                    <p>What happens at the end of my trial?</p>
                    <button>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className='p-3 gap-4 bg-white border-[1.5px] border-[#f1f3f7] flex justify-between items-center rounded-lg'>
                    <p>Can we try Calendly with multiple users?</p>
                    <button>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className='p-3 gap-4 bg-white border-[1.5px] border-[#f1f3f7] flex justify-between items-center rounded-lg'>
                    <p>What does the renewal process look like?</p>
                    <button>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className='p-3 gap-4 bg-white border-[1.5px] border-[#f1f3f7] flex justify-between items-center rounded-lg'>
                    <p>How do I upgrade or downgrade?</p>
                    <button>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className='p-3 gap-4 bg-white border-[1.5px] border-[#f1f3f7] flex justify-between items-center rounded-lg'>
                    <p>We are a non-profit organization, is there special pricing available?</p>
                    <button>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className='p-3 gap-4 bg-white border-[1.5px] border-[#f1f3f7] flex justify-between items-center rounded-lg'>
                    <p>What payment methods do you accept?</p>
                    <button>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FAQ