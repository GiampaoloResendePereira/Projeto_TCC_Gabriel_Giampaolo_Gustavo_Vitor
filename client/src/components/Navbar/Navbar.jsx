import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-primary">
      <nav
        className={`container navbar navbar-expand ${styles.barra_navegacao}`}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="" alt="" />
            Moto Connect
          </a>
        </div>
        <div>
          <span className="navbar-brand">Nome Usuario</span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Simulação de Calculo Frete
            </Link>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Logar
              </button>
              <li>
                <a class="dropdown-item active" href="#">
                  Cliente
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Motoboy
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Admin
                </a>
              </li>
            </div>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Casdastrar
              </button>
              <li>
                <a class="dropdown-item active" href="#">
                  Cliente
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Motoboy
                </a>
              </li>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
