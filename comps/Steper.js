import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import styles from "../styles/home.module.css";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Steper = () => {

  const pages = ['/', '/about', '/services', '/our_work', '/contact'];

  const router = useRouter()
  const {pathname} = router;

  const [isNextPage, setIsNextPage] = useState(false);
  const [isPrevPage, setIsPrevPage] = useState(false);

  useEffect(() => {
    const index = pages.indexOf(pathname);
    setIsNextPage(index + 1 < pages.length);
    setIsPrevPage(index - 1 >= 0);
  }, [pathname]);

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
    <div className={`flex fixed bottom-5 d_none ${styles.steper}`}>
      <button className={`${styles.arrows} ${isPrevPage ? styles.next : ""} pb-3 pt-1 px-3 rounded-full mr-4`} onClick={handlePrev}>
        <LeftOutlined />
      </button>
      <button className={`${styles.arrows} ${isNextPage ? styles.next : " "} pb-3 pt-1 px-3 rounded-full`} onClick={handleNext}>
        <RightOutlined />
      </button>
    </div>
  )
}

export default Steper
