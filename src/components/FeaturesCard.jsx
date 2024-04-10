import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import CoreFeaturesTable from './CoreFeaturesTable';

const FeaturesCard = () => {
    const [isCoreFeaturesOpen, setIsCoreFeaturesOpen] = useState(false);
    const [isTeamsOpen, setIsTeamsOpen] = useState(false);
    const [isCustomizationsOpen, setIsCustomizationsOpen] = useState(false);
    const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false);
    const [isBusinessSupportOpen, setIsBusinessSupportOpen] = useState(false);

    const handleCoreFeaturesOpen = () => {
        setIsCoreFeaturesOpen(!isCoreFeaturesOpen);
        setIsTeamsOpen(false);
        setIsCustomizationsOpen(false);
        setIsIntegrationsOpen(false);
        setIsBusinessSupportOpen(false);
    }
    const handleTeamsOpen = () => {
        setIsCoreFeaturesOpen(false);
        setIsTeamsOpen(!isTeamsOpen);
        setIsCustomizationsOpen(false);
        setIsIntegrationsOpen(false);
        setIsBusinessSupportOpen(false);
    }
    const handleCustomizationsOpen = () => {
        setIsCoreFeaturesOpen(false);
        setIsTeamsOpen(false);
        setIsCustomizationsOpen(!isCustomizationsOpen);
        setIsIntegrationsOpen(false);
        setIsBusinessSupportOpen(false);
    }
    const handleIntegrationsOpen = () => {
        setIsCoreFeaturesOpen(false);
        setIsTeamsOpen(false);
        setIsCustomizationsOpen(false);
        setIsIntegrationsOpen(!isIntegrationsOpen);
        setIsBusinessSupportOpen(false);
    }
    const handleBusinessSupportOpen = () => {
        setIsCoreFeaturesOpen(false);
        setIsTeamsOpen(false);
        setIsCustomizationsOpen(false);
        setIsIntegrationsOpen(false);
        setIsBusinessSupportOpen(!isBusinessSupportOpen);
    }

    return (
        <div className='w-full flex flex-col overflow-auto'>
            <div className='w-full flex h-[200px] py-6 min-w-[720px]'>
                <div className='w-full flex gap-2 h-full text-[#072e51] justify-between'>
                    <div className='flex flex-col justify-between w-[25%] h-full'>
                        <p className='text-xs font-medium'>FEATURES</p>
                        <h6 className='text-xl font-medium'>Features by plan</h6>
                        <p className='text-sm font-extralight'>Find the subscription that makes the most sense for you or your team</p>
                    </div>
                    <div className='flex flex-col justify-between items-center w-[15%] h-full border-[1.5px] border-[#f1f3f7] rounded-lg p-3'>
                        <p className='text-sm font-medium'>BASIC</p>
                        <h6 className='text-xl font-semibold'>Free</h6>
                        <button className='border-[1.5px] font-medium p-[6px] rounded-lg border-[#072e51] w-full text-xs'>Sign Up</button>
                    </div>
                    <div className='flex flex-col justify-between items-center w-[15%] h-full border-[1.5px] border-[#f1f3f7] rounded-lg p-3'>
                        <p className='text-sm font-medium'>ESSENTIALS</p>
                        <h6 className='text-xl font-semibold'>$8</h6>
                        <button className='border-[1.5px] font-medium p-[6px] rounded-lg border-[#072e51] w-full text-xs'>Sign Up</button>
                    </div>
                    <div className='flex flex-col justify-between items-center w-[15%] h-full border-[1.5px] border-[#f1f3f7] rounded-lg p-3'>
                        <p className='text-sm font-medium'>PROFESSIONAL</p>
                        <h6 className='text-xl font-semibold'>$12</h6>
                        <button className='text-white bg-[#2f6af5] font-medium p-[7.5px] rounded-lg w-full text-xs'>Sign Up</button>
                    </div>
                    <div className='flex flex-col justify-between items-center w-[15%] h-full border-[1.5px] border-[#f1f3f7] rounded-lg p-3'>
                        <p className='text-sm font-medium'>TEAM</p>
                        <h6 className='text-xl font-semibold'>$16</h6>
                        <button className='border-[1.5px] font-medium p-[6px] rounded-lg border-[#072e51] w-full text-xs'>Sign Up</button>
                    </div>
                    <div className='flex flex-col justify-between items-center w-[15%] h-full border-[1.5px] border-[#f1f3f7] rounded-lg p-3'>
                        <p className='text-sm font-medium'>ENTERPRISE</p>
                        <h6 className='text-xl font-semibold'>-</h6>
                        <button className='border-[1.5px] font-medium p-[6px] rounded-lg border-[#072e51] w-full text-xs'>Contact Sales</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col pb-6 gap-4 text-[#072e51] min-w-[720px]'>
                <div>
                    <button
                        className={`w-full py-2 px-3 flex justify-between border-[1.5px] border-[#f1f3f7] ${isCoreFeaturesOpen ? 'rounded-b-none' : ''} rounded-lg items-center`}
                        onClick={handleCoreFeaturesOpen}
                    >
                        <p className={`text-lg ${isCoreFeaturesOpen ? 'text-[#2f6af5]' : ''}`}>Core Features</p>
                        <FontAwesomeIcon icon={isCoreFeaturesOpen ? faChevronDown : faChevronRight} className='text-lg' />
                    </button>
                    {isCoreFeaturesOpen ? (
                        <CoreFeaturesTable />
                    ) : ''}
                </div>
                <div>
                    <button
                        className={`w-full py-2 px-3 flex justify-between border-[1.5px] border-[#f1f3f7] ${isTeamsOpen ? 'rounded-b-none' : ''} rounded-lg items-center`}
                        onClick={handleTeamsOpen}
                    >
                        <p className={`text-lg ${isTeamsOpen ? 'text-[#2f6af5]' : ''}`}>Teams</p>
                        <FontAwesomeIcon icon={isTeamsOpen ? faChevronDown : faChevronRight} className='text-lg' />
                    </button>
                </div>
                <div>
                    <button
                        className={`w-full py-2 px-3 flex justify-between border-[1.5px] border-[#f1f3f7] ${isCustomizationsOpen ? 'rounded-b-none' : ''} rounded-lg items-center`}
                        onClick={handleCustomizationsOpen}
                    >
                        <p className={`text-lg ${isCustomizationsOpen ? 'text-[#2f6af5]' : ''}`}>Customizations</p>
                        <FontAwesomeIcon icon={isCustomizationsOpen ? faChevronDown : faChevronRight} className='text-lg' />
                    </button>
                </div>
                <div>
                    <button
                        className={`w-full py-2 px-3 flex justify-between border-[1.5px] border-[#f1f3f7] ${isIntegrationsOpen ? 'rounded-b-none' : ''} rounded-lg items-center`}
                        onClick={handleIntegrationsOpen}
                    >
                        <p className={`text-lg ${isIntegrationsOpen ? 'text-[#2f6af5]' : ''}`}>Integrations</p>
                        <FontAwesomeIcon icon={isIntegrationsOpen ? faChevronDown : faChevronRight} className='text-lg' />
                    </button>
                </div>
                <div>
                    <button
                        className={`w-full py-2 px-3 flex justify-between border-[1.5px] border-[#f1f3f7] ${isBusinessSupportOpen ? 'rounded-b-none' : ''} rounded-lg items-center`}
                        onClick={handleBusinessSupportOpen}
                    >
                        <p className={`text-lg ${isBusinessSupportOpen ? 'text-[#2f6af5]' : ''}`}>Business Support</p>
                        <FontAwesomeIcon icon={isBusinessSupportOpen ? faChevronDown : faChevronRight} className='text-lg' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturesCard