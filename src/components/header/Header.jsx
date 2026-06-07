import "./Header.css";
import logo from "../../assets/logo.png"; // Asegúrate de que esta ruta sea correcta
import { Main } from "../main/Main"

const Header = () => {
  return (
    <header className="header">
      <nav className="navdar__container">
        {/* Contenedor del Logo + Nombre */}
        <div className="navdar__logo-container">
          <img src={logo} alt="Logo Erick Patiño" className="navdar__logo-img" />
          <p className="navdar__logo">Erick Patiño</p>
        </div>

        {/* Menú de navegación */}
        <ul className="navdar__menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#education">Educación</a></li>
          <li><a href="#certificates">Certificaciones</a></li>
          <li><a href="#project">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <Main/>
    </header>
  );
};

export default Header;