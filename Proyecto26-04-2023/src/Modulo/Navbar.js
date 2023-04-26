import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contactenos">Contactenos</Link>
          </li>
          <li>
            <Link to="/Conocenos">Conocenos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
