import "./App.css";
import Home from "./Components/Home";
import Facilities from "./Components/Facilities";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import NewRide from "./Components/NewRide";

function App() {
  return (
    <div className="App">
      <Home />
      <Facilities />
      <NewRide />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
