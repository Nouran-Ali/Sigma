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
        <div>
            {
                mediaQuery.matches ?
                    <>
                        <div className={`absolute max-xl:bottom-11 ${language == "ar" ? "right-11 max-xl:right-10" : "left-7 max-xl:left-10"} max-xl:flex max-xl:items-center`} dir={language == "ar" ? "rtl" : "ltr"}>
                            <div>
                                <Link href="https://wa.me/00966568591586" target="_blank" rel="noopener noreferrer" className='ml-4'>
                                    <WhatsAppIcon sx={{ fontSize: "33px" }} className='text-[#7a9595]' />
                                </Link>
                            </div>
                            <div className='mt-3'>
                                <Link href="tel:00966568591586" className={`ml-4 text-[#7a9595] ${styles.number_link}`}>
                                    {
                                        language == "ar" ? <><PhoneIcon sx={{ fontSize: "33px" }} className='text-[#7a9595]' /><span className={styles.number}>+966568591586</span> </>
                                            :
                                            <><PhoneIcon sx={{ fontSize: "33px" }} className='text-[#7a9595]' /> <span className={styles.number}>+966568591586</span></>
                                    }
                                </Link>
                            </div>
                            <div className='mt-3'>
                                <Link href="mailto:sigma.architectural@gmail.com" className='ml-4'>
                                    <MailIcon sx={{ fontSize: "33px" }} className='text-[#7a9595]' />
                                </Link>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {showContacts && (
                                <div className={`absolute top-2/3 max-xl:top-3/4 ${language == "ar" ? "right-11 max-xl:right-10" : "left-7 max-xl:left-10"} max-xl:flex max-xl:items-center`} dir={language == "ar" ? "rtl" : "ltr"}>
                                    <div>
                                        <Link href="https://wa.me/00966568591586" target="_blank" rel="noopener noreferrer" className='ml-4'>
                                            <WhatsAppIcon sx={{ fontSize: "33px" }} className='text-[#7a9595]' />
                                        </Link>
                                    </div>
                                    <div className='mt-3'>
                                        <Link href="tel:00966568591586" className={`ml-4 text-[#7a9595] ${styles.number_link}`}>
                                            {
                                                language == "ar" ? <><PhoneIcon sx={{ fontSize: "33px" }} className='text-[#7a9595]' /><span className={styles.number}>+966568591586</span> </>
                                                    :
                                                    <><PhoneIcon sx={{ fontSize: "33px" }} className='text-[#7a9595]' /> <span className={styles.number}>+966568591586</span></>
                                            }
                                        </Link>
                                    </div>
                                    <div className='mt-3'>
                                        <Link href="mailto:sigma.architectural@gmail.com" className='ml-4'>
                                            <MailIcon sx={{ fontSize: "33px" }} className='text-[#7a9595]' />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`bg-[#7a9595] text-white absolute p-4 px-5 pt-5 rounded-full ${language == "ar" ? "right-7 max-xl:right-10" : "left-7 max-xl:left-10"} ${styles.contacts} ${showContacts ? styles.showContacts : ''}`}>
                            <TextsmsIcon sx={{ fontSize: "28px" }} />
                        </Link>
                    </>
            }

        </div>
    )
}

export default Contact_home
