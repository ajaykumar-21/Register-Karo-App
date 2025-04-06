import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Services";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <ServicesSection />
    </div>
  );
}

export default App;
