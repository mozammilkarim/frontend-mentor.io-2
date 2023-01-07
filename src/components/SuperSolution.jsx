import React from 'react'
import SecondaryButton from './SecondaryButton'

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
        <div>
            <p className='text-7xl text-[#172339] w-[635px]'>A
                <span className='font-bold mx-5'>super solution
                </span> 
                for your
                <span className='font-bold mx-5'>
                    business.
                </span>
            </p>
            <p className='text-[#49566D] text-lg my-10 w-[350px]'>Our marketing and sales automations help you scale your outreach to get more leads for your company. </p>
            <div className='w-[256px]'>

            <SecondaryButton text='Request Beta Access'/>
            </div>
            <Numbers/>
        </div>
    )
}

export default SuperSolution