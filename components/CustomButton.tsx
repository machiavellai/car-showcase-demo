"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

//using props to make this a reusable componenents where we are rendering the components
const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
           {title} 
        </span>
    </button>
  )
}

export default CustomButton