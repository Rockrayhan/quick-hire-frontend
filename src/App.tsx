import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/Footer";


function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
