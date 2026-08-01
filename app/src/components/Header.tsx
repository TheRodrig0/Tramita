import Button from "./Button"
import Logo from "./Logo"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 text-white flex justify-between items-center bg-brand-dark py-4 px-4 md:px-10">
            <a href="#" className="font-black text-xl sm:text-2xl tracking-tighter flex items-center gap-2 transition-colors">
                <Logo />
                <p>Tramita</p>
            </a>

            <div className="flex items-center gap-2 md:gap-5">
                <Button variant="ghost" className="px-2">Entrar</Button>
                <Button className="px-3 md:px-5 py-2 md:py-2.5 text-xs sm:text-[15px]">Cadastre-se<span className="hidden sm:inline"> Grátis</span></Button>
            </div >
        </header >
    )
}

export default Header