import React from 'react'
import  "./button.css";
const PrimaryButton = ({text="Primary"}) => {
  return (
    <div  className='primaryButton px-5 py-2 text-white bg-[#172339]   rounded-[6px]'>{text}</div>
  )
}

export default PrimaryButton