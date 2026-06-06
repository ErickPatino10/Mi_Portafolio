import "./About.css";

export const About = () => {
    return (
        <section className="about" id="about">

            <div className="about__container">

                <div className="about__header">
                    <p className="about__subtitle">
                        CONÓCEME
                    </p>

                    <h2 className="about__title">
                        Sobre Mí
                    </h2>
                </div>

                <div className="about__content">

                    <p>
                        Soy estudiante de Desarrollo de Software en la
                        Escuela Politécnica Nacional, apasionado por la
                        programación, el desarrollo web y las tecnologías
                        que ayudan a resolver problemas reales.
                    </p>

                    <p>
                        Actualmente continúo fortaleciendo mis habilidades
                        técnicas mediante proyectos, cursos y aprendizaje
                        constante para crecer profesionalmente en el sector
                        tecnológico.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default About;