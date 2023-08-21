import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import styles from "../styles/home.module.css";
import { useState } from 'react';
import { useRouter } from 'next/router';

const Steper = () => {

  const pages = ['/', '/about', '/services', '/our_work', '/contact'];

  const router = useRouter()
  const {pathname} = router;

  const handleNext = () => {
    const index = pages.indexOf(pathname)
    if (index + 1 < pages.length)
      router.push(pages[index + 1])
  }

  const handlePrev = () => {
    const index = pages.indexOf(pathname)
    if (index - 1 >= 0)
      router.push(pages[index - 1])
  }

  return (
    <div className='flex absolute left-1/2 bottom-20 ml-3'>
      <button className={`${styles.arrows} pb-3 pt-1 px-3 rounded-full mr-4`} onClick={handlePrev}>
        <LeftOutlined />
      </button>
      <button className={`${styles.arrows} ${styles.next} pb-3 pt-1 px-3 rounded-full`} onClick={handleNext}>
        <RightOutlined />
      </button>
    </div>
  )
}

export default Steper
