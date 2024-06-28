import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero/hero";
import SectionOne from "./components/hero/sectionOne";
import SectionTwo from "./components/hero/sectionTwo";
import ProjectSection from "./components/hero/projectSection";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <SectionOne /> 
      <ProjectSection />
      <SectionTwo />
      <Footer/>

    </div>
  );
}
