import React from 'react'
import SecondaryButton from './SecondaryButton'
import phone from "../../assets/image-hero-portrait@2x.png"
import curvedLine from "../../assets/pattern-curved-line-1.svg"

const Numbers = () => {
    return (
        <div className='flex gap-[63px] flex-col sm:flex-row md:flex-col items-center justify-center '>
            <div>
                <h2 className='text-[#172339] font-bold text-5xl'>2K+</h2>
                <p className='text-[#49566D] text-base font-normal'>COMPANIES</p>
            </div>
            <div className=''>
                <h2 className='text-[#172339] font-bold text-5xl'>8</h2>
                <p className='text-[#49566D] text-base font-normal'>LANGUAGES</p>
            </div>
            <div className=''>
                <h2 className='text-[#172339] font-bold text-5xl'>1.2M</h2>
                <p className='text-[#49566D] text-base font-normal'>LEADS</p>
            </div>
        </div>
    )
}

const SuperSolution = () => {
    return (
        <div className='mt-[67px] flex w-full   lg:flex-row flex-col  relative'>
            <div className='absolute top-10 left-[40%] z-20'>
                <img src={curvedLine} alt="curvedLine" />
            </div>
            <div className='pt-[103px] pb-[92px] lg:w-[60%] w-full z-20'>
 
                <p className='text-4xl sm:text-7xl text-[#172339] '>A
                    <span className='font-bold mx-5'>super solution
                    </span>
                    for your
                    <span className='font-bold mx-5'>
                        business.
                    </span>
                </p>
                <p className='text-[#49566D] text-lg my-10 lg:w-[350px] w-full'>Our marketing and sales automations help you scale your outreach to get more leads for your company. </p>
                <div className='w-[256px]'>

                    <SecondaryButton text='Request Beta Access' />
                </div>
            </div>

            <div className='relative  rounded-lg mb-[56px] lg:mb-0 w-full mx-auto sm:mx-0 lg:w-[450px] z-10'>
                <img src={phone} alt="phone" className='sm:h-[482px] lg:h-full relative lg:absolute w-full  lg:right-20  h-[240px] sm:h-full'/>
            </div>
            <Numbers />
        </div>
    )
}

export default SuperSolution