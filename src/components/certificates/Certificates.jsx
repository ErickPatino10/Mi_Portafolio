import "./Certificates.css";

const certsData = [
  { 
    id: 1, 
    title: "Desarrollador Front-End", 
    provider: "Capacitate para el empleo Fundacion Carlos Slim", 
    icon: "🌐", 
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
    file: "/documents/Ceritificado_desarrolador_front-end.pdf" // Añadido
  },
  { 
    id: 2, 
    title: "Lógica de Programación", 
    provider: "Capacitate para el empleo Fundacion Carlos Slim", 
    icon: "🧠", 
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
    file: "/documents/Curso_logica_de_programacion.pdf" // Añadido
  },
  { 
    id: 3, 
    title: "Introducción a la Programación", 
    provider: "Capacitate para el empleo Fundacion Carlos Slim", 
    icon: "💻", 
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400",
    file: "/documents/Curso_introcuccion_a_la_programacion.pdf" // Añadido
  },
];

export const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <div className="certificates__container">
        <p className="certificates__subtitle">CERTIFICACIONES</p>
        <h2 className="certificates__title">Cursos y Diplomas</h2>

        <div className="certificates__grid">
          {certsData.map((cert) => (
            /* Envolvemos el div en un enlace para que sea clicable */
            <a 
              key={cert.id} 
              href={cert.file} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="certificate-link"
            >
              <div className="certificate">
                <div className="certificate__image-wrap">
                  <img src={cert.img} alt={cert.title} />
                  <span className="certificate__icon">{cert.icon}</span>
                </div>
                <div className="certificate__body">
                  <h3>{cert.title}</h3>
                  <p>{cert.provider}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;