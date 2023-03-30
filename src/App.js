import Navbar from "./components/navbar/navbar";
import Section from "./components/section/section";
import BioSection from "./components/bio/bio";
import Footer from "./components/footer/foot";
import Space from "./components/space/space";
import FooterBase from "./components/footerbase/base";
import Slider from "./components/slider/slideprogram";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <BioSection />
      <Space />
      <Slider />
      <Footer />
      <FooterBase />
    </div>
  );
}

export default App;
