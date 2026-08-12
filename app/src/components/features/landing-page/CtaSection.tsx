import Button from "../../Button"
import { Link } from "react-router"

const CtaSection = () => {
    return (
        <section className="relative text-white px-6 md:px-12 py-50 flex flex-col items-center text-center bg-brand-dark overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-112.5 h-75 sm:h-112.5 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="font-black text-3xl md:text-5xl tracking-tight mb-4">
                    Pronto para otimizar seus Links?
                </h2>

                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
                    Crie sua conta gratuita em poucos passos e comece a personalizar seus links hoje mesmo.
                </p>

                <Link to="/register" className="w-full sm:w-auto mb-3">
                    <Button className="px-8 py-3 w-full">
                        Criar conta gratuita
                    </Button>
                </Link>

                <span className="text-sm text-slate-400">
                    ✨ Totalmente grátis para sempre no plano básico
                </span>
            </div>

            <hr className="w-full h-4 border-0 bg-brand-primary absolute bottom-0 left-0" />
        </section>
    )
}

export default CtaSection