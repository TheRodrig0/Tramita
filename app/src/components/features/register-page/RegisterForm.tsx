import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../Button"
import Input from "../../Input"
import PasswordInput from "../../PasswordInput"

const RegisterForm = () => {
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = (formData: FormData) => {
        setError(null)
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
        const confirmPassword = formData.get("confirm-password")

        if (password !== confirmPassword) {
            setError("As senhas não coincidem.")
            return
        }

        console.log({ name, email, password })
    }

    return (
        <form action={handleSubmit} className="flex flex-col gap-4 text-white">
            <div className="text-center mb-2">
                <h1 className="text-3xl lg:text-4xl font-black">Crie sua conta!</h1>
                <p className="text-lg text-slate-200 font-medium mt-1">Comece a encurtar seus links agora</p>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Nome</label>
                <Input id="name" type="text" name="name" placeholder="Digite seu nome" required />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <Input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-medium text-slate-300">Senha</label>
                <PasswordInput id="password" name="password" placeholder="Digite sua senha" required />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="confirm-password" className="text-sm font-medium text-slate-300">Confirmar Senha</label>
                <PasswordInput id="confirm-password" name="confirm-password" placeholder="Confirme sua senha" required />
            </div>

            {error && (
                <p className="text-sm text-rose-400 font-semibold text-center mt-1">
                    {error}
                </p>
            )}

            <Button className="mt-2">Registrar</Button>

            <span className="text-center text-sm text-slate-400 mt-2">
                Já tem uma conta?{" "}
                <Link to="/login" className="text-teal-400 hover:underline">
                    Faça login
                </Link>
            </span>
        </form>
    )
}

export default RegisterForm
