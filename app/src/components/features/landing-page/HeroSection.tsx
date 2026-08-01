import Input from '../../Input'
import Button from '../../Button'

const HeroSection = () => {
    return (
        <>
            <section className="text-white bg-brand-dark flex flex-col pt-20 pb-25 px-6 gap-6 items-center justify-center text-center">

                <h1 className="font-black text-4xl md:text-6xl tracking-tight max-w-4xl leading-tight">
                    Crie links que geram resultados com nosso poderoso encurtador de URL
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                    Crie conexões instantâneas com seu público usando links enxutos, confiáveis e rastreáveis na plataforma Tramita.
                </p>

                <div className="flex items-stretch w-full max-w-xl px-4 mx-auto">
                    <Input className="px-5 py-4 rounded-r-none" placeholder="Coloque sua URL longa aqui" />
                    <Button variant="white">Encurtar URL</Button>
                </div>


            </section>
        </>
    )
}

export default HeroSection
