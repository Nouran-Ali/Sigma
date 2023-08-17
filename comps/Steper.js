import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import styles from "../styles/home.module.css";

const Steper = () => {
  return (
    <div className='flex absolute left-1/2 bottom-20 ml-3'>
      <div className={`${styles.arrows} pb-3 pt-1 px-3 rounded-full mr-4`}><LeftOutlined /></div>
      <div className={`${styles.arrows} ${styles.next} pb-3 pt-1 px-3 rounded-full`}><RightOutlined /></div>
    </div>
  )
}

export default Steper
