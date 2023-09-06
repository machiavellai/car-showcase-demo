import { MouseEventHandler } from "react";
//when adding question mark it means it's optional
export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
} 