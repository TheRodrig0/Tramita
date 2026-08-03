import { useState, type InputHTMLAttributes, type Ref } from "react"
import { Eye, EyeOff } from "lucide-react"
import Input from "./Input"

export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    ref?: Ref<HTMLInputElement>
}

const PasswordInput = ({ className, ref, ...props }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="relative flex items-center w-full">
            <Input
                ref={ref}
                type={showPassword ? "text" : "password"}
                className={className}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
    )
}

export default PasswordInput
