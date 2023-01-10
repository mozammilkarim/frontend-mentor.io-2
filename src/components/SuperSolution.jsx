import React from 'react'
import SecondaryButton from './SecondaryButton'
import phone from "../../assets/image-hero-portrait@2x.png"
import curvedLine from "../../assets/pattern-curved-line-1.svg"

const Numbers = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
            <div>
                <h2 className='text-[#172339] font-bold text-5xl'>2K+</h2>
                <p className='text-[#49566D] text-base font-normal'>COMPANIES</p>
            </div>
            <div className='mt-[63px]'>
                <h2 className='text-[#172339] font-bold text-5xl'>8</h2>
                <p className='text-[#49566D] text-base font-normal'>LANGUAGES</p>
            </div>
            <div className='mt-[63px]'>
                <h2 className='text-[#172339] font-bold text-5xl'>1.2M</h2>
                <p className='text-[#49566D] text-base font-normal'>LEADS</p>
            </div>
        </div>
    )
}

const SuperSolution = () => {
    return (
        <div className='mt-[67px] flex w-full   sm:flex-row flex-col pb-20 mb-20  sm:pb-40 sm:mb-40 relative'>
            <div className='absolute top-10 left-[40%] z-20'>
                <img src={curvedLine} alt="curvedLine" />
            </div>
            <div className='pt-[103px] pb-[92px] w-[60%] z-20'>
 
                <p className='text-4xl sm:text-7xl text-[#172339] '>A
                    <span className='font-bold mx-5'>super solution
                    </span>
                    for your
                    <span className='font-bold mx-5'>
                        business.
                    </span>
                </p>
                <p className='text-[#49566D] text-lg my-10 w-[350px]'>Our marketing and sales automations help you scale your outreach to get more leads for your company. </p>
                <div className='w-[256px]'>

                    <SecondaryButton text='Request Beta Access' />
                </div>
            </div>

            <div className='relative w-[450px] z-10'>
                <img src={phone} alt="phone" className='absolute w-full right-20 h-full'/>
            </div>
            <Numbers />
        </div>
    )
}

export default SuperSolution