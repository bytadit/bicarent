import { Routes, Route } from "react-router-dom";
import Template from "./template";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="cars" element={<Cars />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
