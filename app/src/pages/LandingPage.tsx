import HeroSection from "../components/features/landing-page/HeroSection"
import FeaturesSection from "../components/features/landing-page/FeaturesSection"
import CtaSection from "../components/features/landing-page/CtaSection"
import DefaultLayout from "../components/DefaultLayout"

const LandingPage = () => {
    return (
        <DefaultLayout>
            <HeroSection />
            <FeaturesSection />
            <CtaSection />
        </DefaultLayout>
    )
};

export default LandingPage;