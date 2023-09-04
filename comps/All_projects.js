import styles from "../styles/project.module.css";
import Project from './Project'

const All_projects = () => {
    return (
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
            <Project
                title="Wedding hall - Palace Prince"
                href="/"
                icon="/../palace.png"
                background={styles.bgProjectOne}
                paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                iconTwo="/../palace2.png"
            />

            <Project
                title="Bridal showers"
                href="/"
                icon="/../bathing.png"
                background={styles.bgProjectTwo}
                paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                iconTwo="/../bathing2.png"
            />

            <Project
                title="Private sports club"
                href="/"
                icon="/../treadmill.png"
                background={styles.bgProjectThree}
                paragragh="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
                iconTwo="/../treadmill2.png"
            />
        </div>
    )
}

export default All_projects
