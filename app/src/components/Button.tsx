import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'dark' | 'white'
}

const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-colors whitespace-nowrap"

    const variants = {
        primary: "bg-brand-primary hover:bg-teal-500 text-white rounded-lg px-5 py-2.5 text-[15px]",
        ghost: "hover:text-brand-primary bg-transparent",
        dark: "bg-brand-primary-hover hover:bg-brand-primary-darker text-teal-50 px-6 py-3 rounded",
        white: "bg-white hover:bg-slate-100 text-brand-dark px-8 py-4 sm:py-5 text-lg"
    }

    const combinedClasses = cn(baseStyles, variants[variant], className)

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    )
}

export default Button
