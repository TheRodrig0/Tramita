import { type InputHTMLAttributes, forwardRef } from "react"
import { cn } from "../lib/utils"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex-grow w-full min-w-0 px-5 py-3 text-lg text-white",
                    "bg-white/10 border border-white/20 rounded-lg",
                    "placeholder-slate-400 focus:outline-none",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export default Input
