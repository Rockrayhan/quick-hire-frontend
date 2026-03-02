import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
