import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Template() {
  return (
    <div className="App">
      <Navbar />
      <main role="main" style={{ minHeight: "53vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
