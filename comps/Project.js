import Link from "next/link";
import styles from "../styles/project.module.css";
import Image from "next/image";

const Project = ({ href, title, paragragh, icon, iconTwo, background }) => {
  return (
    <Link href={href}>
      <div className={`${background} ${styles.hover_content} rounded-lg flex flex-col justify-end items-center`}>
        <div className={`${styles.gradiant} rounded-lg`}></div>
        <div className={styles.title}>
          <Image src={icon} width={40} height={40} />
          <p className="mt-3 text-xl text-white">{title}</p>
        </div>
        <div className={`bg-white rounded-lg p-6 w-4/5 flex flex-col justify-end mb-5 items-center ${styles.content} ${styles.animationButtom}`}>
          <div>
            <Image src={iconTwo} width={40} height={40} />
            <p className="mt-3 text-xl text-[#212529]">{title}</p>
            <p className="text-[#677289] mt-3">{paragragh}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Project
