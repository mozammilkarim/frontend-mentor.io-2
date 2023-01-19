import React from 'react'
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";
import ItJustWorksSection from './ItJustWorksSection';
// md:relative md:bottom-[30rem] bg-[#F3EDE7] h-[1375px] sm:h-[464px]    absolute bottom-0
const Footer = () => {
    return (
        <div className='relative '>
            <div className=' w-full xl:px-[165px] xl:py-[50px] p-3 '>
                
            <ItJustWorksSection />
            </div>
            <div className='w-full  bottom-0  flex sm:flex-row flex-col  justify-between  xl:px-[165px] xl:py-[50px] p-3 items-center  md:pb-40'>

                <h2 className='text-3xl text-[#172339] font-bold'>suite</h2>
                <p className='font-normal text-base text-[#49566D]'>Copyright - Suite</p>
                <div className='flex gap-3'>
                    <img src={facebook} alt="socials" className='p-2 h-10 w-10 cursor-pointer' />
                    <img src={instagram} alt="socials" className='p-2 h-10 w-10 cursor-pointer' />
                    <img src={twitter} alt="socials" className='p-2 h-10 w-10 cursor-pointer' />

                </div>
            </div>
        </div>
    )
}

export default Footer