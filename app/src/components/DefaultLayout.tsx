import Header from "./Header"
import Footer from "./Footer"

type DefaultLayoutProps = {
    children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout