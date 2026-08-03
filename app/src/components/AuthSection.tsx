import type { ReactNode } from "react"

interface AuthSectionProps {
    children: ReactNode
}

const AuthSection = ({ children }: AuthSectionProps) => {
    return (
        <section className="bg-brand-dark py-24 px-6 border-b border-slate-200 flex-1 flex items-center">
            <div className="max-w-md mx-auto w-full text-left">
                {children}
            </div>
        </section>
    )
}

export default AuthSection

