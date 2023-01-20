import React from 'react'
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";
import ItJustWorksSection from './ItJustWorksSection';
const Footer = () => {
    return (
        <div className='relative '>
            <div className=' w-full xl:px-[165px] xl:py-[50px] sm:p-3 p-1'>
                <ItJustWorksSection />

            </div>
            {/* <div className='z-10 absolute hidden sm:block  bottom-16 bg-[#F3EDE7] h-[50%] w-full '></div> */}
            <div className='w-full bg-[#F3EDE7]  bottom-0  flex sm:flex-row flex-col  justify-between  xl:px-[165px] xl:py-[50px] p-3  items-center  md:pb-40'>

                <h2 className='text-3xl text-[#172339] font-bold'>suite</h2>
                <p className='font-normal text-base text-[#49566D]'>Copyright - Suite</p>
                <div className='flex gap-3'>
                    <img src={facebook} alt="socials" className='p-2 h-10 w-10 cursor-pointer hover:opacity-50' />
                    <img src={instagram} alt="socials" className='p-2 h-10 w-10 cursor-pointer hover:opacity-50' />
                    <img src={twitter} alt="socials" className='p-2 h-10 w-10 cursor-pointer hover:opacity-50' />

                </div>
            </div>
        </div>
    )
}

export default Footer