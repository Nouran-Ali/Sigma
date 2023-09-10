import Image from 'next/image'
import { Button } from 'antd';
import styles from "../styles/home.module.css";
import Steper from '@/comps/Steper';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { useTranslation } from "react-i18next";

export default function Home() {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <>
      <Head>
        <title>Sigma</title>
        <link rel="icon" href="logo.png" />
      </Head>

      <div className='home_page' dir={language == "ar" ? "rtl" : "ltr"}>
        <div className='grid grid-cols-2 gap-4 '>
          <img src='../circle.png' width="100px" className={`absolute top-36 ${language == "ar" ? "right-16 max-lg:right-2" : "left-16 max-lg:left-2"}  z-[-1]`} />
          <div className='mt-28'>
            <div className={`${language == "ar" ? styles.animation_ar : styles.animation} pr-3`}>
              <h1 className='text-4xl max-lg:text-xl font-bold uppercase leading-relaxed'><span className='text-[#7a9595]'>{t("SIGMA")} </span> <br /> <span className=''>{t("ARCHITECTURAL_CONTRACTING")}</span></h1>
              <p className='text-[#909191] leading-relaxed mt-4 mb-8 w-96 max-md:w-full'>{t("home.paragragh")}</p>
              <Link href="/about" className='' style={{ backgroundColor: "#384e4c10", color: "#7a9595", border: "1px solid #384e4c3b", borderRadius: "20px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px", paddingTop: "10px" }}>
                 {t('home.read_more')}
                <img src='../star.png' width='25px' height="10px" className={`${language == "ar" ? "mr-3" : "ml-3" } inline-block`} />
              </Link>
              <div className=''>

              </div>
            </div>
            <img src='../wave2.png' width="90px" className={`absolute top-3/4 ${language == "ar" ? "right-10" : "left-10"} mt-16`} />
            <img src='../close.png' width="30px" className={`absolute top-80 start-1/2 ${styles.close}`} />
          </div>
          <div className=''>
            <div className={`absolute origin-center rotate-45 ${styles.background} ${language == "ar" && styles.background_ar }`}></div>
            <img src='../waves.png' width="90px" className={`absolute top-5 ${language == "ar" ? "left-32" : "right-32"} h-[50px] ${styles.waves}`} />
            <img src='../close2.png' width="30px" className={`absolute top-44 ${language == "ar" ? "left-16" : "right-16"} ${styles.close}`} />
            <img src='../architectural.png' width="350px" className={` ${styles.architectural} ${language == "ar" && styles.architectural_ar}`} />
          </div>
        </div>
      </div>
    </>
  )
}
