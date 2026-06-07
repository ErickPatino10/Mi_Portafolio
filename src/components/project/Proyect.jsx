import "./Proyect.css";
// Importamos la imagen desde la carpeta assets
import poliGamarImg from "../../assets/PoliGamer.png"; 

export const Proyect = () => {
  return (
    <section className="proyect" id="project">
      {/* Título principal de la sección */}
      <h1 className="proyect__main-title">Proyectos</h1>
      
      <div className="proyect__container">
        <div className="proyect__card">
          <img src={poliGamarImg} alt="Proyecto PoliGamer" className="proyect__img" />
          
          <div className="proyect__content">
            {/* Título del proyecto individual */}
            <h2 className="proyect__title">PoliGamer</h2>
            
            <p className="proyect__description">
              Plataforma web diseñada para resolver la dificultad de elegir videojuegos ante una amplia oferta. 
              El sistema ofrece recomendaciones personalizadas basadas en el género, presupuesto y disponibilidad 
              de tiempo del usuario, optimizando la decisión de compra y mejorando la satisfacción del jugador.
            </p>

            <div className="proyect__buttons">
              <a 
                href="https://poligamer2.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Ver Sitio Web
              </a>
              <a 
                href="https://github.com/Alepillajof/Proyecto-DI"
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                Código Fuente (GitHub)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyect;