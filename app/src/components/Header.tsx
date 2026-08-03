import Button from "./Button"
import Logo from "./Logo"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-brand-dark text-white flex justify-between items-center py-4 px-4 md:px-10 border-b border-white/10">
            <Link to="/" className="font-black text-xl sm:text-2xl tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Logo />
                <p>Tramita</p>
            </Link>

            <div className="flex items-center gap-2 md:gap-5">
                <Link to="/login">
                    <Button variant="ghost" className="px-2 text-slate-400 hover:text-white hover:bg-white/10">Entrar</Button>
                </Link>

                <Link to="/register">
                    <Button className="px-4 md:px-5 py-2 md:py-2.5 text-xs sm:text-[15px]">Cadastre-se</Button>
                </Link>
            </div>
        </header>
    )
}

export default Header