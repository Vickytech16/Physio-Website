import Navbar from "./components/Navbar";
import Hero from "./components/homepage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}
