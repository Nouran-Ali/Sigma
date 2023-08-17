
const About = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className='r-hex'>
                <div className='r-hex-inner'>
                    <div className='r-hex-inner-2'></div>
                </div>
            </div>
            <div className=''>
                <div className={`bgAbout`}></div>
                <div className="mt-24">
                    <h1 className="text-4xl font-bold uppercase leading-relaxed title">About <span className="text-[#7a9595]">Sigma</span></h1>
                    <p className="text-[#909191] leading-relaxed mt-4">SIGMA IS a progressive architectural practice providing high quality architectural and construction services for the domestic , industrial and commercial sectors. We are committed to low energy sustainable design providing appropriate, imaginative, cost effective and technical solutions to meet our client’s individual requirements. We implement and manage our input into each project to the highest professional standards, meeting with our clients requirements with clear communication throughout the project.</p>
                </div>
            </div>
        </div>
    )
}

export default About
