import AuthSection from "../components/AuthSection"
import RegisterForm from "../components/features/register-page/RegisterForm"
import DefaultLayout from "../components/DefaultLayout"

const RegisterPage = () => {
    return (
        <DefaultLayout>
            <AuthSection>
                <RegisterForm />
            </AuthSection>
        </DefaultLayout>
    )
}

export default RegisterPage
