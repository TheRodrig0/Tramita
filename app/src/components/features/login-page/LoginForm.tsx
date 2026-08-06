import { Link } from "react-router"
import Button from "../../Button"
import Input from "../../Input"
import PasswordInput from "../../PasswordInput"

const LoginForm = () => {
    const handleSubmit = (_formData: FormData) => {
        // const email = formData.get("email")
        // const password = formData.get("password")
        // const rememberMe = formData.get("remember-me")
    }

    return (
        <form action={handleSubmit} className="flex flex-col gap-4 text-white">
            <div className="text-center mb-2">
                <h1 className="text-3xl lg:text-4xl font-black">Bem-vindo ao Tramita!</h1>
                <p className="text-lg text-slate-200 font-medium mt-1">Faça login para continuar</p>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <Input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-medium text-slate-300">Senha</label>
                <PasswordInput id="password" name="password" placeholder="Digite sua senha" required />
            </div>

            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="remember-me" id="remember-me" className="rounded border-slate-700 bg-slate-800" />
                    <label htmlFor="remember-me" className="text-slate-300 cursor-pointer">Lembrar-se de mim</label>
                </div>

                <Link to="/forgot-password" className="text-teal-400 hover:underline">Esqueci minha senha</Link>
            </div>

            <Button className="mt-2">Entrar</Button>

            <span className="text-center text-sm text-slate-400 mt-2">
                Não tem uma conta?{" "}
                <Link to="/register" className="text-teal-400 hover:underline">
                    Registre-se
                </Link>
            </span>
        </form>
    )
}

export default LoginForm
