import React from 'react'
import Navbar from './Navbar'
import Steper from './Steper';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    return (
        <div>
            {loading ? (
                <div className='flex flex-col justify-center items-center'>Loading...</div>
            ) : (
                <>
                    <Navbar />
                    <div className='px-24 max-xl:px-10'>
                        {children}
                    </div>
                    <Steper />
                </>
            )}
        </div>
    )
}
export default Layout;