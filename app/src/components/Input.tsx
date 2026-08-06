import { type InputHTMLAttributes, type Ref } from "react"
import { cn } from "../lib/utils"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    ref?: Ref<HTMLInputElement>
}

const Input = ({ className, type, ref, ...props }: InputProps) => {
    return (
        <input
            type={type}
            ref={ref}
            className={cn(
                "grow w-full min-w-0 px-5 py-3 text-lg text-white",
                "bg-white/10 border border-white/20 rounded-lg",
                "placeholder-slate-400 focus:outline-none",
                className
            )}
            {...props}
        />
    )
}

export default Input
