import Input from '../../Input'
import Button from '../../Button'
import { Link2, Check } from 'lucide-react'

const HeroSection = () => {
    return (
        <section className="bg-brand-dark pt-20 pb-32 px-6 flex flex-col items-center justify-center text-center">

            <div className="flex flex-col items-center w-full max-w-5xl">
                <h1 className="font-black text-5xl md:text-7xl tracking-tighter text-white max-w-4xl leading-[1.1] mb-6">
                    Construa conexões mais fortes com links curtos.
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-12">
                    Encurte, personalize e rastreie cada clique. Tudo na mesma plataforma.
                </p>

                {/* Flat, Bold Shortener Panel (Dark Mode) */}
                <div className="w-full max-w-4xl bg-brand-panel-dark p-6 md:p-10 rounded-xl border border-white/10 flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row items-stretch gap-4 w-full">
                        <div className="relative w-full flex items-center">
                            <Link2 className="absolute left-5 w-7 h-7 text-slate-500" />
                            <Input
                                className="bg-black border border-white/10 placeholder:text-slate-500 pl-14 pr-6 py-6 text-xl focus:border-brand-primary focus:ring-0 transition-none"
                                placeholder="Cole sua URL longa aqui"
                            />
                        </div>
                        <Button variant="primary" className="w-full md:w-auto px-10 py-6 text-xl font-black">
                            Encurtar
                        </Button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-bold text-slate-500 mt-2">
                        <span className="flex items-center gap-1.5"><Check className="w-5 h-5 text-brand-primary" strokeWidth={3} /> Grátis para usar</span>
                        <span className="flex items-center gap-1.5"><Check className="w-5 h-5 text-brand-primary" strokeWidth={3} /> Sem limite de cliques</span>
                        <span className="flex items-center gap-1.5"><Check className="w-5 h-5 text-brand-primary" strokeWidth={3} /> Rastreamento em tempo real</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
