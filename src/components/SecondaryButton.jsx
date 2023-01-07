import React from 'react'
const SecondaryButton = ({text="SecondaryButton"}) => {
  return (
    <div  className='text-center px-5 py-2 border-2 border-[#172339] bg-white text-[#172339] hover:text-[#FAF8F6] hover:bg-[#172339]   rounded-[6px]'>{text}</div>
  )
}

export default SecondaryButton