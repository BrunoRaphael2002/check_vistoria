import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Header from "./components/header";
import LgpdSection from "./components/lgpd";
import ContactFormSection from "./pages/contact";
import TestimonialsSection from "./pages/depoimentos";
import FAQSection from "./pages/faq";
import HeroSection from "./pages/hero";
import ServicesSection from "./pages/service";
import AboutSection from "./pages/sobre";



function App() {
  return (
    <>
      <Header />
    <HeroSection/>
    <Benefits/>
    <AboutSection/>
    <ServicesSection/>
    <ContactFormSection/>
    <TestimonialsSection/>
    <FAQSection/>
    <LgpdSection/>
    <Footer/>
    </>
  );
}

export default App;