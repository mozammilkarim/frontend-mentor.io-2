import React from 'react'
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";
import ItJustWorksSection from './ItJustWorksSection';

const Footer = () => {
    return (
        <div className='relative mt-[40rem]'>
            <div className=' bg-[#F3EDE7] h-fit sm:h-[464px]    absolute bottom-0 w-full xl:px-[165px] xl:py-[50px] p-3 pb-40'>
                <div className=' md:relative md:bottom-[30rem]'>

                    <ItJustWorksSection />
                </div>
            </div>
            <div className='w-full static md:absolute bottom-0  flex sm:flex-row flex-col  justify-between  xl:px-[165px] xl:py-[50px] p-3 pb-20 md:pb-40'>
                {/* <div> */}

                <h2 className='text-3xl text-[#172339] font-bold'>suite</h2>
                {/* <SecondaryButton text='Request Beta Access' /> */}
                <p className='font-normal text-base text-[#49566D]'>Copyright - Suite</p>
                <div className='flex gap-3'>
                    <img src={facebook} alt="socials" className='p-2 h-10 w-10 cursor-pointer' />
                    <img src={instagram} alt="socials" className='p-2 h-10 w-10 cursor-pointer' />
                    <img src={twitter} alt="socials" className='p-2 h-10 w-10 cursor-pointer' />

                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Footer