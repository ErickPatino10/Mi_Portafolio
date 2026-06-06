import "./Certificates.css";

export const Certificates = () => {
    return (
        <section className="certificates" id="certificates">

            <div className="certificates__container">

                <p className="certificates__subtitle">
                    CERTIFICACIONES
                </p>

                <h2 className="certificates__title">
                    Cursos y Diplomas
                </h2>

                <div className="certificates__grid">

                    <div className="certificate">
                        Desarrollador Front-End
                    </div>

                    <div className="certificate">
                        Lógica de Programación
                    </div>

                    <div className="certificate">
                        Introducción a la Programación
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Certificates;