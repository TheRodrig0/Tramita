import Button from "./Button"
import Logo from "./Logo"

const Header = () => {
    return (
        <>
            <header className=">sticky top-0 z-50  text-white flex justify-between items-center bg-brand-dark py-4 px-6">
                <a href="#" className="font-black text-2xl tracking-tighter flex items-center gap-2 transition-colors">
                    <Logo />
                    <p>Tramita</p>
                </a>

                <div className="flex items-center gap-5">
                    <Button variant="ghost">Entrar</Button>
                    <Button>Cadastra-se Grátis</Button>
                </div >
            </header >
        </>
    )
}

export default Header