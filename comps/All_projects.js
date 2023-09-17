import styles from "../styles/project.module.css";
import Project from './Project'
import { useTranslation } from "react-i18next";

const All_projects = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <div className={``} dir={language == "ar" ? "rtl" : "ltr"}>
            <div className={`grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mb-44 ${styles.animation_projects}`}>
                <Project
                    title={t("all_project.title_wedding")}
                    href="/wedding_hall"
                    icon="/../palace.png"
                    background={styles.bgProjectOne}
                    paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                    iconTwo="/../palace2.png"
                />

                <Project
                    title={t("all_project.title_showers")}
                    href="/bridal_showers"
                    icon="/../bathing.png"
                    background={styles.bgProjectTwo}
                    paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                    iconTwo="/../bathing2.png"
                />

                <Project
                    title={t("all_project.title_sports")}
                    href="/private_sports_club"
                    icon="/../treadmill.png"
                    background={styles.bgProjectThree}
                    paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                    iconTwo="/../treadmill2.png"
                />
                <Project
                    title={t("all_project.title_structure")}
                    href="/structure_stage"
                    icon="/../concrete.png"
                    background={styles.bgProjectFour}
                    paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                    iconTwo="/../concrete2.png"
                />
            </div>
        </div>
    )
}

export default All_projects
