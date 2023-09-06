import styles from "../styles/project.module.css";
import Project from './Project'

const All_projects = () => {
    return (
        <div className={``}>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mr-7 mb-44">
                <Project
                    title="Wedding hall - Palace Prince"
                    href="/wedding_hall"
                    icon="/../palace.png"
                    background={styles.bgProjectOne}
                    paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                    iconTwo="/../palace2.png"
                />

                <Project
                    title="Bridal showers"
                    href="/bridal_showers"
                    icon="/../bathing.png"
                    background={styles.bgProjectTwo}
                    paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                    iconTwo="/../bathing2.png"
                />

                <Project
                    title="Private sports club"
                    href="/private_sports_club"
                    icon="/../treadmill.png"
                    background={styles.bgProjectThree}
                    paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                    iconTwo="/../treadmill2.png"
                />
                <Project
                    title="Structure stage"
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
