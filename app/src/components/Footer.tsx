import Logo from "./Logo"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <>
            <footer className='relative flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-10 gap-6 md:gap-0'>
                <div className='flex items-center gap-4'>
                    <Logo className="brightness-0 h-6" />
                    <p className='font-black text-xl tracking-tighter'>
                        Tramita
                    </p>
                </div>

                <p className="text-slate-800 text-sm md:text-base md:absolute md:left-1/2 md:-translate-x-1/2 text-center">
                    @{year} Tramita. Todos direitos reservados.
                </p>

                <div className='flex gap-4 md:gap-2 text-sm md:text-base'>
                    <a href="">Termos</a>
                    <a href="">Privacidade</a>
                    <a href="https://github.com/TheRodrig0/Tramita">GitHub</a>
                </div>
            </footer>
        </>
    )
}

export default Footer