import Image from 'next/image'
import { Button } from 'antd';
import styles from "../styles/home.module.css";
import Steper from '@/comps/Steper';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const { pathname } = router;

  return (
    <div className='home_page'>
      <div className='grid grid-cols-2 gap-4 '>
        <img src='../circle.png' width="100px" className={`absolute top-36 left-16 z-[-1]`} />
        <div className='mt-28'>
          <div className={styles.animation}>
            <h1 className='text-4xl font-bold uppercase leading-relaxed'><span className='text-[#7a9595]'>Sigma</span> <br /> <span className=''>Architectural Contracting</span></h1>
            <p className='text-[#909191] leading-relaxed mt-4 w-96'>Sigma is a progressive architectural practice providing high-quality architectural and construction services for the domestic, industrial, and commercial sectors.</p>
            <Button shape="round" size="large" className='mt-7' style={{backgroundColor: "#384e4c10" , color: "#7a9595" , border: "1px solid #384e4c3b" , width: "150px"}} onClick={()=> pathname == '/about'}>
              <div className='flex content-center'>
                Read more
                <img src='../star.png' width='25px' height="10px" className={`ml-3`}/>
              </div>
            </Button>
          </div>
          <img src='../wave2.png' width="90px" className={`absolute top-3/4 left-10 mt-16`} />
          <img src='../close.png' width="30px" className={`absolute top-80 start-1/2 ${styles.close}`} />
        </div>
        <div className=''>
          <div className={`absolute origin-center rotate-45 ${styles.background}`}></div>
          <img src='../waves.png' width="90px" className={`absolute top-5 right-32 h-[50px] ${styles.waves}`} />
          <img src='../close2.png' width="30px" className={`absolute top-44 right-16 ${styles.close}`} />
          <img src='../architectural.png' width="350px" className={` ${styles.architectural}`} />
        </div>
      </div>
    </div>
  )
}
