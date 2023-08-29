import React from 'react'
import Navbar from './Navbar'
import Steper from './Steper';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='px-24'>
                {children}
            </div>
            <Steper />
        </div>
    )
}
export default Layout;