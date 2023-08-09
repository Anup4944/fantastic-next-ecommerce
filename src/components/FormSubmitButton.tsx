"use client";

import { ComponentProps } from "react";
import {experimental_useFormStatus as useFormSts} from "react-dom"

type FormSubmitButtonProps = {
    children: React.ReactNode, 
    className?: string,


} & ComponentProps<"button">

export default function FormSubmitButton({children, className, ...props}: FormSubmitButtonProps) {

    const {pending} = useFormSts()
    
return (
    <button 
    {...props}
    className={` btn btn-primary  ${className}`}
    type="submit"
    disabled={pending}
    >
        { pending && <span className="loading loading-spinner" />
}
        
        {children}</button>
)
}
