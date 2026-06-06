import "./Skills.css";

export const Skills = () => {
    return (
        <section className="skills" id="skills">

            <div className="skills__container">

                <p className="skills__subtitle">
                    TECNOLOGÍAS
                </p>

                <h2 className="skills__title">
                    Habilidades Técnicas
                </h2>

                <div className="skills__grid">

                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">React</div>
                    <div className="skill">Java</div>
                    <div className="skill">MySQL</div>
                    <div className="skill">Git</div>
                    <div className="skill">GitHub</div>

                </div>

            </div>

        </section>
    );
};

export default Skills;