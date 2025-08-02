import React from 'react'
import Community from '../components/Community';
import SliderSection from '../components/SliderSection';
import HeroSection from '../components/HeroSection';
import LiveDataSection from '../components/LiveDataSection';
import CaseStudySection from '../components/CaseStudySection';
import GrowthSection from '../components/GrowthSection';
import BlurredBox from '../components/BlurredBox';
import GallerySlider from '../components/GallerySlider';

const Home = () => {
    return (
        <>
            <section className='w-full py-5 bg-[rgb(18,18,18)] text-white diatype overflow-hidden relative text-center'>

                {/* top background images(circle) */}
                <img src="images/bg-circle.png" alt="" className='z-10 absolute -left-[46%] -top-[3%] w-[80%]' />
                <img src="images/bg-circle.png" alt="" className='z-10 absolute -right-[62%] -top-[0%]' />

                {/* Hero Section */}
                <HeroSection/>

                {/* Slider */}
                <SliderSection/>                

                {/* Join Community */}
                <Community />

                {/* Live Data */}
            <img src="images/bg-3.png" alt="" className='absolute md:hidden block left-0 w-full z-0' />

                <LiveDataSection />

                {/* Designed for real world use. */}
                <CaseStudySection />

                {/* Build for growth. */}
                <GrowthSection />

                {/* Gallery Slider */}
                <GallerySlider />

                {/* Blurred box bg Image */}
                <img src="images/bg-2.png" alt="" className='absolute left-0 -bottom-[10%] w-full z-10' />

                {/* Blurred Content Box */}
                <BlurredBox />

            </section>
        </>
    )
}

export default Home