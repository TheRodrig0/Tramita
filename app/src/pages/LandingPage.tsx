import HeroSection from "../components/features/landing-page/HeroSection";
import FeaturesSection from "../components/features/landing-page/FeaturesSection";
import CtaSection from "../components/features/landing-page/CtaSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <CtaSection></CtaSection>
            <Footer />
        </>
    )
};

export default LandingPage;