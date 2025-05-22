import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NewArrival from "./components/New Arrival/NewArrival";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Banner />
      <NewArrival />
      {/* New arrival section */}
      <Footer />
    </div>
  );
}

export default App;
