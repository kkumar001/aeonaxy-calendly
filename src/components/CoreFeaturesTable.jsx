import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const CoreFeaturesTable = () => {
    return (
        <table className='w-full'>
            <tbody className='w-full text-xs font-medium'>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>Calendar collections per person</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>1</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>2</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>6</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>6</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>6</td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>Connect to Google, Office 365, Outlook, and iCloud Calenders</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>Access Calendly with web, iOS and Android apps</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Active event types</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>1</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Create unlimited one-on-one events</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Create meeting polls</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Create one-off meetings</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>Unlimited</td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Collective one-offs</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Customize your booking link</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Create group events</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Automated event notifications</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>Send your invitee email reminders and follow-ups</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Customize email notifications and reminders</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>Get meeting notifications by text</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>Update your cancellation policy</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Create automated workflows</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Add links to your confirmation pages</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>Redirect your invitees</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
                <tr className='w-full'>
                    <td className='w-[25%] px-4 py-3 border-[1.5px] border-[#f1f3f7] border-t-0'>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p>View analytics and insights</p>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'>-</td>
                    <td className='w-[15%] py-2 px-3 text-center bg-[#f7faff] border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                    <td className='w-[15%] py-2 px-3 text-center border-[1.5px] border-[#f1f3f7] border-t-0 border-l-0'><FontAwesomeIcon icon={faCircleCheck} /></td>
                </tr>
            </tbody>
        </table>
    )
}

export default CoreFeaturesTable