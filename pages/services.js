import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styles from "../styles/services.module.css";
import Head from 'next/head';
import { useTranslation } from "react-i18next";

const services = () => {

    const [currentCardNumber, setCurrentCardNumber] = useState(0)

    const handleNextCard = () => {
        if (currentCardNumber == 2) {
            setCurrentCardNumber(0)
        }
        else {
            setCurrentCardNumber(currentCardNumber + 1)
        }
    }

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <>
            <Head>
                <title>Services - Sigma</title>
                <link rel="icon" href="logo3.png" />
            </Head>
            <div className='2xl:flex mt-9' dir={language == "ar" ? "rtl" : "ltr"}>
                <div className={`2xl:absolute top-28 ${language == "ar" ? styles.animation_ar : styles.animation}`}>
                    <p className='text-[#d1a916] font-semibold text-2xl'>{t("Services.Services")}</p>
                    <h1 className='font-bold text-4xl max-lg:text-2xl text-[#304644] mt-3'>{t("Services.Sigma_Architectural")}<br />{t("Services.Contracting")} </h1>
                </div>
                <div className={`bg-[#e8e8e8] rounded-[80px] w-9/12 max-xl:w-full h-80 max-xl:h-full pl-20 max-xl:pl-5 p-10 max-xl:p-5 ${language == "ar" ? "mr-auto ml-5" : "ml-auto"} max-xl:ml-0 2xl:mr-5 max-xl:mt-60`}>
                    <h3 className={`absolute ${language == "ar" ? "right-80" : "left-80"} top-64 font-bold -rotate-90 text-5xl text-white opacity-25 ${styles.d_none}`}>{t("Services.Services")}</h3>
                    <img src='../clean.png' className={`${styles.stars} ${language == "ar" && styles.stars_ar} absolute`} />
                    <p className={`text-[#7c7c7c] ml-4 ${styles.animation3}`}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className={`grid grid-cols-3 max-xl:grid-cols-1 gap-5 mt-10 max-xl:mt-0 text-center ${styles.animation2}`}>

                        {/* {
                        currentCardNumber == 0 ?
                            <div className='bg-white rounded-[70px] h-80 p-5 relative' id='0'>
                                <img src='../design.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold mt-3 mb-3'>Design</h2>
                                <p className='text-base text-[#919191]'>Expert architectural design service for stunning and functional spaces that enhance your lifestyle.</p>
                                <button className='absolute bottom-10 right-10 pb-3 pt-1 px-3 rounded-full bg-[#304644] text-[#d1a916]' onClick={handleNextCard}>
                                    <ArrowRightOutlined />
                                </button>
                            </div>
                            :
                            <div className='rounded-[80px] h-80 p-5'>
                                <img src='../design.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold mt-3 mb-3'>Design</h2>
                            </div>
                    } */}


                        {
                            currentCardNumber == 0 ?
                                <div className='bg-white rounded-[80px] h-80 max-xl:h-88 p-5 max-xl:p-3 relative' id='0'>
                                    <img src='../Supervision.png' width="50px" className='mx-auto' />
                                    <h2 className='font-semibold mt-3 mb-3'>{t("Services.Supervision")}</h2>
                                    <p className='text-base text-[#919191]'>{t("Services.card_one")}</p>
                                    <div className={`absolute bottom-7 ${language == "ar" ? "left-10" : "right-10"} pb-3 pt-1 px-3 rounded-full bg-[#304644] text-[#d1a916] cursor-pointer`} onClick={handleNextCard}>
                                        {
                                            language == "ar" ? <ArrowLeftOutlined /> : <ArrowRightOutlined />
                                        }
                                    </div>
                                </div>
                                :
                                <div className='rounded-[80px] h-80 max-xl:h-28 p-5'>
                                    <img src='../Supervision.png' width="50px" className='mx-auto' />
                                    <h2 className='font-semibold mt-3 mb-3'>{t("Services.Supervision")}</h2>
                                </div>
                        }

                        {
                            currentCardNumber == 1 ?
                                <div className='bg-white rounded-[80px] h-80 max-xl:h-88 p-5 max-xl:p-3 relative' id='0'>
                                    <img src='../construction.png' width="50px" className='mx-auto' />
                                    <h2 className='font-semibold mt-3 mb-3'>{t("Services.Construction")}</h2>
                                    <p className='text-base text-[#919191]'>{t("Services.card_two")}</p>
                                    <div className={`absolute bottom-7 ${language == "ar" ? "left-10" : "right-10"} pb-3 pt-1 px-3 rounded-full bg-[#304644] text-[#d1a916] cursor-pointer`} onClick={handleNextCard}>
                                        {
                                            language == "ar" ? <ArrowLeftOutlined /> : <ArrowRightOutlined />
                                        }
                                    </div>
                                </div>
                                :
                                <div className='rounded-[80px] h-80 max-xl:h-28 p-5'>
                                    <img src='../construction.png' width="50px" className='mx-auto' />
                                    <h2 className='font-semibold mt-3 mb-3'>{t("Services.Construction")}</h2>
                                </div>
                        }

                        {
                            currentCardNumber == 2 ?
                                <div className='bg-white rounded-[80px] h-80 max-xl:h-88 p-5 max-xl:p-3 relative' id='1'>
                                    <img src='../analysis.png' width="50px" className='mx-auto' />
                                    <h2 className='font-semibold mt-3 mb-3'>{t("Services.Engineering_Services")} </h2>
                                    <p className='text-base text-[#919191]'>{t("Services.card_three")}</p>
                                    <div className={`absolute bottom-7 ${language == "ar" ? "left-10" : "right-10"} pb-3 pt-1 px-3 rounded-full bg-[#304644] text-[#d1a916] cursor-pointer`} onClick={handleNextCard}>
                                        {
                                            language == "ar" ? <ArrowLeftOutlined /> : <ArrowRightOutlined />
                                        }
                                    </div>
                                </div>
                                :
                                <div className='rounded-[80px] h-80 max-xl:h-36 p-5'>
                                    <img src='../analysis.png' width="50px" className='mx-auto' />
                                    <h2 className='font-semibold mt-3 mb-3'>{t("Services.Engineering_Services")}</h2>
                                </div>
                        }

                        {/* <div className='rounded-[80px] h-80 p-5'>
                        <img src='../design.png' width="50px" className='mx-auto' />
                        <h2 className='font-semibold mt-3 mb-3'>Engineering Services</h2>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default services
