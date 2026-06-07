import "./Certificates.css";

const certsData = [
  { 
    id: 1, 
    title: "Desarrollador Front-End", 
    provider: "Alura Latam", 
    icon: "🌐", 
    // He añadido esta URL de ejemplo para que la imagen se vea
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" 
  },
  { 
    id: 2, 
    title: "Lógica de Programación", 
    provider: "Alura Latam", 
    icon: "🧠", 
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400" 
  },
  { 
    id: 3, 
    title: "Introducción a la Programación", 
    provider: "Alura Latam", 
    icon: "💻", 
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400" 
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
            <div className="certificate" key={cert.id}>
              <div className="certificate__image-wrap">
                <img src={cert.img} alt={cert.title} />
                <span className="certificate__icon">{cert.icon}</span>
              </div>
              <div className="certificate__body">
                <h3>{cert.title}</h3>
                <p>{cert.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;