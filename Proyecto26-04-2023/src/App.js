import "./styles.css";
import { Navbar } from "./Modulo/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Empresa } from "./pages/Empresa";
import { Conocenos } from "./pages/conocenos";
import { Contactanos } from "./pages/Contactanos";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contactenos" element={<Contactanos />} />
          <Route path="/conocenos" element={<Conocenos />} />
        </Routes>
      </Router>
    </div>
  );
}
