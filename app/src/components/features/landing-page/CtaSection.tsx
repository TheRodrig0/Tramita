import Button from "../../Button"
import { Link } from "react-router"

const CtaSection = () => {
    return (
        <section className="relative text-white px-6 md:px-12 py-50 flex flex-col items-center text-center bg-brand-dark">
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

            <hr className="w-full h-4 border-0 bg-brand-primary absolute bottom-0 left-0" />
        </section>
    )
}

export default CtaSection