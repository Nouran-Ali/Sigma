import React from 'react'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

export const Contact_info = () => {
    return (
        <>
            <div className='flex items-center relative mt-10 max-xl:mt-0 ml-10 max-xl:ml-0 max-xl:mr-10 max-xl:py-8 max-xl:px-5 circule_contact'>
                {/* <div className='circule_one'></div>
                <div className='circule_center'></div>
                <div className='circule_two'></div> */}
                <div className='ml-16 max-xl:ml-5'>
                    <div className='flex items-center'>
                        <div className='bg-[#f7f7f7] text-[#d1a916] p-3 rounded-full mr-4'>
                            <LocationOnIcon />
                        </div>
                        <div>
                            <p className='text-[#d1a916] font-semibold'>Location:</p>
                            <p className='text-[#7c7c7c] max-xl:text-sm'>Dahran street, almalaz, Riyadh, Saudi Arabia</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-4'>
                        <div className='bg-[#f7f7f7] text-[#d1a916] pt-2 pb-4 px-4 rounded-full mr-4'>
                            <MailOutlined />
                        </div>
                        <div>
                            <p className='text-[#d1a916] font-semibold'>Email:</p>
                            <p className='text-[#7c7c7c] max-xl:text-sm'>info@example.com</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-4'>
                        <div className='bg-[#f7f7f7] text-[#d1a916] pt-2 pb-4 px-4 rounded-full mr-4'>
                            <PhoneOutlined />
                        </div>
                        <div>
                            <p className='text-[#d1a916] font-semibold'>Phone:</p>
                            <p className='text-[#7c7c7c] max-xl:text-sm'>00966568591586</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
