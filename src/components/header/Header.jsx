import { Main } from "../main/Main"
import "./Header.css"

const Header = () => {
  return (
    <header>
        <nav className="navdar__container">
            <p className="navdar__logo">Erick Patiño</p>
            <ul className="navdar__menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#project">Proyectos</a></li>
                    <li><a href="#expertice">Experiencia</a></li>
                    <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
        <Main/> 
    </header>
  )
}

export default Header