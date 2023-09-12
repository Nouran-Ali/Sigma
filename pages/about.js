import Head from "next/head"
import { useTranslation } from "react-i18next";

const About = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <>
            <Head>
                <title>About us - Sigma</title>
                <link rel="icon" href="logo3.png" />
            </Head>

            <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1" dir={language == "ar" ? "rtl" : "ltr"}>
                <div className="relative d_none">
                    <div>
                        <img src='../rightTriangle2.png' width='20px' className="absolute right-20 top-20" />
                        <img src='../yield.png' width='20px' className="absolute right-44 top-10" />
                        <img src='../rightTriangle3.png' width='20px' className="absolute left-20 top-96" />
                        <img src='../yield2.png' width='20px' className="absolute left-10 top-80" />
                        <img src='../circle4.png' width='10px' className="absolute left-36 top-20" />
                        <img src='../circle3.png' width='10px' className="absolute left-52 top-96" />
                        <img src='../circle4.png' width='10px' className="absolute right-24 top-44" />
                        {/* <img src='../yield2.png' width='20px' /> */}
                    </div>
                    <div className='r-hex'>
                        <div className='r-hex-inner'>
                            <div className='r-hex-inner-2'></div>
                        </div>
                    </div>
                    <div className={`flex absolute  ${language == "ar" ? "-left-10 " : "right-20 "} top-96`}>
                        <img src='../dots2.png' width='50px' />
                        <img src='../dots2.png' width='50px' className="mx-[-5px]" />
                    </div>
                </div>
                <div className=''>
                    <div className={`${language == "ar" ? "bgAbout_ar" : "bgAbout"}`}></div>
                    <div className={`absolute ${language == "ar" ? "right-12" : "left-12"} top-52`}>
                        <img src='../dots.png' width='50px' className="d_none" />
                        <img src='../dots.png' width='50px' className="mt-[-5px] d_none" />
                    </div>
                    <div className="mt-20 max-xl:mt-7 max-xl:ml-5 animation max-xl:mb-7">
                        <h1 className="text-4xl font-bold uppercase leading-relaxed title">{t("About.About")}<span className="text-[#7a9595]">{t("SIGMA")}</span></h1>
                        <p className="text-[#909191] leading-relaxed mt-4">{t("About.paragragh")}<br />
                        {t("About.paragragh2")}<br />
                        {t("About.paragragh3")}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
