import React from 'react'
import CMO from "../../assets/image-jeremy-large@2x.png"
import curvedLine from "../../assets/pattern-curved-line-2.svg"


const ItJustWorksSection = () => {
    return (
        <div className=' bg-[#172339]  flex flex-col xl:flex-row items-center  text-[#F3EDE7]  justify-center rounded-3xl mb-0 my-20 sm:mb-20  py-[64px] pt-0 '>
            <div className='relative xl:left-[5rem] left-0 -top-10 px-3'>

                <img src={CMO} alt="CMO" className='z-20 h-[590px] xl:w-[360px] w-full   bottom-[2rem] ' />
                <div className='bg-[#DB65E2] hidden md:block z-10 opacity-[0.48] blur-[68px] h-[300px] w-full rounded-full absolute top-[40%] left-[2rem]  '>

                </div>
            </div>
            <div className='flex xl:flex-row flex-col gap-5 xl:gap-20 relative px-3 xl:px-40'>

                <img src={curvedLine} alt="curvedLine" className='h-16 w-16  text-center m-auto right-[50%]' />
                <div className='flex flex-col xl:items-start items-center mt-[88px]  right-[20%]'>
                    <h2 className=' text-5xl text-[#FAF8F6] text-center xl:text-start'>It just <span className='font-bold'> works.</span></h2>
                    <p className='w-full xl:w-[350px] my-[40px] text-xl text-center xl:text-start'>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
                    <div className='text-center xl:text-start w-full'>
                        <h3 className='text-[#FAF8F6] font-bold'>JEREMY ROBINSON</h3>
                        <h4>CMO, FYLO</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItJustWorksSection