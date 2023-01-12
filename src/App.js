import logo from "./logo.svg";
import "./App.css";
import Footer from "./Compounts/Compont/Footer";
import AllRoutes from "./Compounts/Compont/AllRoutes";
import Navbar from "./Compounts/Compont/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
