import AuthSection from "../components/AuthSection"
import LoginForm from "../components/features/login-page/LoginForm"
import DefaultLayout from "../components/DefaultLayout"

const LoginPage = () => {
    return (
        <DefaultLayout>
            <AuthSection>
                <LoginForm />
            </AuthSection>
        </DefaultLayout>
    )
}

export default LoginPage
