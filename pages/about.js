
const About = () => {
    return (
        <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
            <div className="relative d_none">
                <div>
                    <img src='../rightTriangle2.png' width='20px' className="absolute right-20 top-20" />
                    <img src='../yield.png' width='20px' className="absolute right-44 top-10" />
                    <img src='../rightTriangle3.png' width='20px' className="absolute left-20 top-96" />
                    <img src='../yield2.png' width='20px' className="absolute left-10 top-80" />
                    <img src='../circle4.png' width='10px' className="absolute left-36 top-20" />
                    <img src='../circle3.png' width='10px' className="absolute left-52 top-96" />
                    <img src='../circle4.png' width='10px' className="absolute right-24 top-44" />
                    {/* <img src='../yield2.png' width='20px' /> */}
                </div>
                <div className='r-hex'>
                    <div className='r-hex-inner'>
                        <div className='r-hex-inner-2'></div>
                    </div>
                </div>
                <div className="flex absolute right-20 top-96">
                    <img src='../dots2.png' width='50px' />
                    <img src='../dots2.png' width='50px' className="mx-[-5px]" />
                </div>
            </div>
            <div className=''>
                <div className={`bgAbout`}></div>
                <div className="absolute left-12 top-52">
                    <img src='../dots.png' width='50px' />
                    <img src='../dots.png' width='50px' className="mt-[-5px]" />
                </div>
                <div className="mt-20 max-xl:mt-7 max-xl:ml-5 animation">
                    <h1 className="text-4xl font-bold uppercase leading-relaxed title">About <span className="text-[#7a9595]">Sigma</span></h1>
                    <p className="text-[#909191] leading-relaxed mt-4">Sigma is a progressive architectural practice providing high quality architectural and construction services for the domestic , industrial and commercial sectors. <br />
                        We are committed to providing appropriate, imaginative, cost-effective, and technical solutions to meet our client’s individual requirements.<br />
                        We implement and manage our input into each project to the highest professional standards, meeting with our clients requirements with clear communication throughout the project.</p>

                </div>
            </div>
        </div>
    )
}

export default About
