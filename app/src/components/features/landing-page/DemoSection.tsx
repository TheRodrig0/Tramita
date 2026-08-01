import Input from "../../Input"
import Button from "../../Button"

const DemoSection = () => {
    return (
        <section className="bg-brand-light py-10 md:py-20 px-6 md:px-20 lg:px-50 flex flex-col gap-10">
            <div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Simples e direto ao ponto</h2>
                <p className="text-lg text-slate-600 font-medium">Personalize e copie seus links rapidamente através de um painel desenhado para agilidade.</p>
            </div>

            <div className="text-white bg-brand-card-dark rounded-xl p-6 md:p-10 flex flex-col gap-8">
                <div>
                    <label className="text-xs text-slate-400 mb-2 flex">DESTINO</label>
                    <Input
                        className="w-full"
                        readOnly
                        defaultValue="https://seusistema.com.br/relatorio-anual-2026"
                    />
                </div>

                <div>
                    <label className="text-xs text-slate-400 mb-2 flex">URL CURTO (SLUG)</label>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex rounded-lg border border-white/20 bg-white/10 flex-1">
                            <div className="flex items-center px-4 border-r border-white/20 text-slate-400 whitespace-nowrap">
                                otramita.me/
                            </div>

                            <Input
                                className="bg-transparent border-0 rounded-none flex-1 min-w-0"
                                readOnly
                                defaultValue="relatorio26"
                            />
                        </div>
                        <Button className="w-full md:w-auto">Copiar Link</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DemoSection