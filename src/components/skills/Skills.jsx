import "./Skills.css";
// Importamos los iconos necesarios
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
];

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <p className="skills__subtitle">TECNOLOGÍAS</p>
        <h2 className="skills__title">Habilidades Técnicas</h2>

        <div className="skills__grid">
          {skillsData.map((skill, index) => (
            <div className="skill" key={index}>
              <span className="skill__icon">{skill.icon}</span>
              <p className="skill__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;