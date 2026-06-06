import "./Main.css";
import foto from "../../assets/erick.png";

export const Main = () => {
    return (
        <main className="hero">

            <div className="hero__content">

                <p className="hero__subtitle">
                    👋 HOLA, SOY
                </p>

                <h1 className="hero__title">
                    Erick <span>Patiño</span>
                </h1>

                <h2 className="hero__profession">
                    Estudiante de Desarrollo de Software
                </h2>

                <p className="hero__description">
                    Me apasiona crear páginas web modernas,
                    eficientes y escalables. Actualmente estoy fortaleciendo
                    mis habilidades en desarrollo Frontend, Backend y bases de datos.
                </p>

                <div className="hero__buttons">
                    <a href="#projects" className="btn btn-primary">
                        Ver Proyectos
                    </a>

                    <a
                        href="/documents/HOJA_DE_VIDA.pdf"
                        download
                        className="btn btn-secondary"
                    >
                        Descargar CV
                    </a>
                </div>

            </div>

            <div className="hero__image">
                <img src={foto} alt="Erick Patiño" />
            </div>

        </main>
    );
};

export default Main;