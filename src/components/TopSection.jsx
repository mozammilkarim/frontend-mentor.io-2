import React from 'react'
import SecondaryButton from './SecondaryButton'

const TopSection = () => {
  return (
    <div className='flex justify-between w-full'>
        <h2 className='text-3xl text-[#172339] font-bold'>suite</h2>
        <SecondaryButton text='Request Beta Access'/>
    </div>
  )
}

export default TopSection