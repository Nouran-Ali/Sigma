import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import styles from "../styles/home.module.css";
import TextsmsIcon from '@mui/icons-material/Textsms';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Contact_home = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    const [showContacts, setShowContacts] = useState(false);

    const mediaQuery = window.matchMedia('(max-width: 1280px)');

    const handleMouseEnter = () => {
        setShowContacts(true);
    };

    const handleMouseLeave = () => {
        setShowContacts(false);
    };

    return (
        <div dir={language == "ar" ? "rtl" : "ltr"}>
            <div className={`fixed bottom-4 max-xl:bottom-11 ${language == "ar" ? "right-18 max-xl:right-10" : "left-16 max-xl:left-10"} flex items-center`} dir={language == "ar" ? "rtl" : "ltr"}>
                <div>
                    <Link href="https://wa.me/00966568591586" target="_blank" rel="noopener noreferrer" className='ml-4'>
                        <WhatsAppIcon sx={{ fontSize: "30px" }} className='text-[#7a9595]' />
                    </Link>
                </div>
                <div className=''>
                    <Link href="tel:00966568591586" className={`ml-4 text-[#7a9595] ${styles.number_link}`}>
                        {
                            language == "ar" ? <><PhoneIcon sx={{ fontSize: "30px" }} className='text-[#7a9595]' /><span className={styles.number}>+966568591586</span> </>
                                :
                                <><PhoneIcon sx={{ fontSize: "30px" }} className='text-[#7a9595]' /> <span className={styles.number}>+966568591586</span></>
                        }
                    </Link>
                </div>
                <div className=''>
                    <Link href="mailto:sigma.architectural@gmail.com" className='ml-4'>
                        <MailIcon sx={{ fontSize: "30px" }} className='text-[#7a9595]' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact_home
