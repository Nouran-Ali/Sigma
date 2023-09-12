import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
const { TextArea } = Input;
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

export const Contact_form = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    return (
        <div>
            <div className='bg_contact'></div>
            <h1 className='text-2xl font-semibold text-[#304644] title_contact'>{t("contact.Connect_With_Us")}</h1>
            <p className='text-base mt-3 text-[#7c7c7c]'>Lorem ipsum is placeholder text commonly used in the graphic, and publishing industries.</p>
            <form className='mt-4'>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4'>
                    <Input size="large" placeholder={t("contact.First_Name")} className='bg-[#f1f2f3]' style={{ backgroundColor: "#f1f2f3", border: "1px solid #dddddd", boxShadow: "0 0 2px 1px #dddddd" }} />
                    <Input size="large" placeholder={t("contact.Last_Name")} className='bg-[#f1f2f3]' style={{ backgroundColor: "#f1f2f3", border: "1px solid #dddddd", boxShadow: "0 0 2px 1px #dddddd" }} />
                    <Input size="large" placeholder={t("contact.Enter_Email")} className='bg-[#f1f2f3]' style={{ backgroundColor: "#f1f2f3", border: "1px solid #dddddd", boxShadow: "0 0 2px 1px #dddddd" }} />
                    <Input size="large" placeholder={t("contact.Phone_No")} className='bg-[#f1f2f3]' style={{ backgroundColor: "#f1f2f3", border: "1px solid #dddddd", boxShadow: "0 0 2px 1px #dddddd" }} />
                </div>
                <TextArea
                    showCount
                    maxLength={100}
                    size="large"
                    style={{
                        height: 100,
                        resize: 'none',
                        backgroundColor: "#f1f2f3",
                        border: "1px solid #dddddd",
                        boxShadow: "0 0 2px 1px #dddddd"
                    }}
                    onChange={onChange}
                    placeholder={t("contact.Message_here")}
                    className='bg-[#f1f2f3] custom-textarea mt-3'
                />
                <Button className='mt-5 font-semibold w-full h-10 submit_button'>{t("contact.Send_Now")}</Button>
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
                <Link href="mailto:abuahmad2006@outlook.sa" className='mr-3 text-[#dd4a3e]'>
                    <GoogleIcon />
                </Link>
            </div>
        </div>
    )
}
