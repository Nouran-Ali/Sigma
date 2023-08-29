import { ArrowRightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styles from "../styles/services.module.css";

const services = () => {

    const [currentCardNumber, setCurrentCardNumber] = useState(0)

    const handleNextCard = () => {
        if (currentCardNumber == 1) {
            setCurrentCardNumber(0)
        } else {
            setCurrentCardNumber(currentCardNumber + 1)
        }
    }

    return (
        <div className='2xl:flex mt-9'>
            <div className={`2xl:absolute top-28 ${styles.animation}`}>
                <p className='text-[#d1a916] font-semibold text-2xl'>Services</p>
                <h1 className='font-bold text-4xl text-[#304644] mt-3'>Sigma Architectural<br /> Contracting</h1>
            </div>
            <div className='bg-[#e8e8e8] rounded-[80px] w-9/12 max-xl:w-full h-80 max-xl:h-full pl-20 max-xl:pl-10 p-10 max-xl:p-5 ml-auto max-xl:ml-0 2xl:mr-5 max-xl:mt-52'>
                <h3 className={`absolute left-80 top-64 font-bold -rotate-90 text-5xl text-white opacity-25 ${styles.d_none}`}>Services</h3>
                <img src='../clean.png' className={`${styles.stars} absolute`} />
                <p className={`text-[#7c7c7c] ml-4 ${styles.animation3}`}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <div className={`grid grid-cols-3 max-xl:grid-cols-2 gap-5 mt-10 text-center ${styles.animation2}`}>

                    {/* {
                        currentCardNumber == 0 ?
                            <div className='bg-white rounded-[70px] h-80 p-5 relative' id='0'>
                                <img src='../design.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold mt-3 mb-3'>Design</h2>
                                <p className='text-base text-[#919191]'>Expert architectural design service for stunning and functional spaces that enhance your lifestyle.</p>
                                <button className='absolute bottom-10 right-10 pb-3 pt-1 px-3 rounded-full bg-[#304644] text-[#d1a916]' onClick={handleNextCard}>
                                    <ArrowRightOutlined />
                                </button>
                            </div>
                            :
                            <div className='rounded-[80px] h-80 p-5'>
                                <img src='../design.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold mt-3 mb-3'>Design</h2>
                            </div>
                    } */}

                    {
                        currentCardNumber == 0 ?
                            <div className='bg-white rounded-[80px] h-80 max-xl:h-full p-5 relative' id='0'>
                                <img src='../construction.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold mt-3 mb-3'>Construction</h2>
                                <p className='text-base text-[#919191]'>Professional building solutions for residential , industrial and commercial projects, ensuring quality, efficiency, and safety.</p>
                                <div className='absolute bottom-7 right-10 pb-3 pt-1 px-3 rounded-full bg-[#304644] text-[#d1a916]' onClick={handleNextCard}>
                                    <ArrowRightOutlined />
                                </div>
                            </div>
                            :
                            <div className='rounded-[80px] h-80 p-5'>
                                <img src='../construction.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold mt-3 mb-3'>Construction</h2>
                            </div>
                    }

                    {
                        currentCardNumber == 1 ?
                            <div className='bg-white rounded-[80px] h-80 p-5 relative' id='1'>
                                <img src='../analysis.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold mt-3 mb-3'>Engineering Services</h2>
                                <p className='text-base text-[#919191]'>Providing expert technical designs, analysis, troubleshooting and project management for all engineering needs.</p>
                                <div className='absolute bottom-7 right-10 pb-3 pt-1 px-3 rounded-full bg-[#304644] text-[#d1a916]' onClick={handleNextCard}>
                                    <ArrowRightOutlined />
                                </div>
                            </div>
                            :
                            <div className='rounded-[80px] h-80 p-5'>
                                <img src='../analysis.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold mt-3 mb-3'>Engineering Services</h2>
                            </div>
                    }

                    {/* <div className='rounded-[80px] h-80 p-5'>
                        <img src='../design.png' width="50px" className='mx-auto' />
                        <h2 className='font-semibold mt-3 mb-3'>Engineering Services</h2>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default services
