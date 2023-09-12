import Link from "next/link";
import styles from "../styles/project.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Project = ({ href, title, paragragh, icon, iconTwo, background }) => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <Link href={href}>
      <div className={`${background} ${styles.hover_content} rounded-lg flex flex-col justify-end items-center`}>
        <div className={`${styles.gradiant} rounded-lg`}></div>
        <div className={language == "ar" ? styles.title_ar : styles.title}>
          <Image src={icon} width={40} height={40} />
          <p className="mt-3 text-xl text-white">{title}</p>
        </div>
        <div className={`bg-white rounded-lg xl:p-6 max-lg:p-4 w-4/5 flex flex-col justify-end mb-5 items-center ${styles.content} ${styles.animationButtom}`}>
          <div>
            <Image src={iconTwo} width={40} height={40} />
            <p className="mt-3 text-xl max-lg:text-lg text-[#212529]">{title}</p>
            <p className="text-[#677289] mt-3">{paragragh}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Project
