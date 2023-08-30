import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
const { TextArea } = Input;
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';


export const Contact_form = () => {

    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    return (
        <div>
            <div className='bg_contact'></div>
            <h1 className='text-2xl font-semibold text-[#304644] title_contact'>Connect With Us</h1>
            <p className='text-base mt-3 text-[#7c7c7c]'>Lorem ipsum is placeholder text commonly used in the graphic, and publishing industries.</p>
            <form className='mt-4'>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4'>
                    <Input placeholder="First Name*" className='bg-[#f1f2f3]' style={{ backgroundColor: "#f1f2f3", border: "1px solid #dddddd", boxShadow: "0 0 2px 1px #dddddd" }} />
                    <Input placeholder="Last Name*" className='bg-[#f1f2f3]' style={{ backgroundColor: "#f1f2f3", border: "1px solid #dddddd", boxShadow: "0 0 2px 1px #dddddd" }} />
                    <Input placeholder="Enter Email*" className='bg-[#f1f2f3]' style={{ backgroundColor: "#f1f2f3", border: "1px solid #dddddd", boxShadow: "0 0 2px 1px #dddddd" }} />
                    <Input placeholder="Phone No." className='bg-[#f1f2f3]' style={{ backgroundColor: "#f1f2f3", border: "1px solid #dddddd", boxShadow: "0 0 2px 1px #dddddd" }} />
                </div>
                <TextArea
                    showCount
                    maxLength={100}
                    style={{
                        height: 120,
                        resize: 'none',
                        backgroundColor: "#f1f2f3",
                        border: "1px solid #dddddd",
                        boxShadow: "0 0 2px 1px #dddddd"
                    }}
                    onChange={onChange}
                    placeholder="Message here..."
                    className='bg-[#f1f2f3] mt-3'
                />
                <Button className='mt-5 font-semibold w-full h-10 submit_button'>Send Now</Button>
            </form>
            <div className='flex justify-center mt-5'>
                <Link
                    href="https://wa.me/01019818304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='mr-3 text-[#008069]'
                >
                    <WhatsAppIcon />
                </Link>
                <Link href="https://www.facebook.com/" className='mr-3 text-[#3a5a99]'>
                    <FacebookOutlinedIcon />
                </Link>
                <Link href="https://www.instagram.com/" className='mr-3 text-[#d50362]'>
                    <InstagramIcon />
                </Link>
                <Link href="mailto:noranali237@gmail.com" className='mr-3 text-[#dd4a3e]'>
                    <GoogleIcon />
                </Link>
            </div>
        </div>
    )
}
