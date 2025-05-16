import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import MainContent from "./Components/MainContent.jsx";
import MainAboutUs from "./Components/MainAboutUs.jsx";
import OurServises from "./Components/OurServises.jsx";

function App() {
  return (
    <div>
        <Navbar />
        <MainContent />
        <MainAboutUs />
        <OurServises/>
    </div>
  );
}

export default App;
