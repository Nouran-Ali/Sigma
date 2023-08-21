import { ArrowRightOutlined } from '@ant-design/icons';
import { useState } from 'react';

const services = () => {

    const [stepOne, setStepOne] = useState(false)

    return (
        <div className='flex mt-10'>
            <div >
                <p className='text-[#d1a916] font-semibold text-2xl'>Services</p>
                <h1 className='font-bold text-4xl text-[#304644]'>Sigma Architectural Contracting</h1>
            </div>
            <div className='text-center bg-[#e8e8e8] rounded-[80px] w-4/5 h-56 p-8'>
                <p className='text-[#7c7c7c]'>loremgerherherdhrddddddddrjttttttttttttttttttttttttttertjrtjrstjrftjhrstjrstjsthtjxdthtrjrstjhrd</p>
                <div className='grid grid-cols-3 gap-5 mt-10'>
                    <div className='bg-white rounded-[80px] h-80 p-8'>
                        <img src='../logo.png' width="50px" className='mx-auto' />
                        <h2 className='font-semibold'>Design</h2>
                        <p>Expert architectural design service for stunning and functional spaces that enhance your lifestyle.</p>
                        <div className='text-right rounded-full bg-[#304644]'>
                            <ArrowRightOutlined />
                        </div>
                    </div>
                    <div className='bg-white rounded-[80px] h-80 p-8'>
                        <img src='../logo.png' width="50px" className='mx-auto' />
                        <h2 className='font-semibold'>Construction</h2>
                        <p>Professional building solutions for residential , industrial and commercial projects, ensuring quality, efficiency, and safety.</p>
                        <div className='text-right rounded-full bg-[#304644]' onClick={setStepOne}>
                            <ArrowRightOutlined />
                        </div>
                    </div>
                    {
                        stepOne ? <>
                            <div className='bg-white rounded-[80px] h-80 p-5'>
                                <img src='../logo.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold'>Engineering Services</h2>
                                <p>Providing expert technical designs, analysis, troubleshooting and project management for all engineering needs.</p>
                                <div className='text-right rounded-full bg-[#304644]'>
                                    <ArrowRightOutlined />
                                </div>
                            </div>
                        </>
                            :
                            <div className='rounded-[80px] h-80 p-5'>
                                <img src='../logo.png' width="50px" className='mx-auto' />
                                <h2 className='font-semibold'>Engineering Services</h2>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default services
