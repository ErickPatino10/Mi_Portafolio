import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__main-title">Contáctanos</h1>
      
      <div className="contact__container">
        {/* Columna Izquierda: Formulario */}
        <div className="contact__form-card">
          <h2 className="contact__subtitle">Envíanos un Mensaje</h2>
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre..." />
            
            <label>Email</label>
            <input type="email" placeholder="ejemplo@correo.com" />
            
            <label>Asunto</label>
            <input type="text" placeholder="¿En qué te puedo ayudar?" />
            
            <label>Mensaje</label>
            <textarea rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
            
            <button type="submit" className="btn-send">Enviar Mensaje</button>
          </form>
        </div>

        {/* Columna Derecha: Mapa y Detalles */}
        <div className="contact__info-col">
          <div className="contact__map">
            {/* Reemplaza la URL del src con el embed real de tu ubicación */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.765003119374!2d-78.411198!3d-0.296207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTcnNDYuNCJTIDc4wrAyNCc0MC4zIlc!5e0!3m2!1ses-419!2sec!4v1780795504743!5m2!1ses-419!2sec" 
              allowFullScreen="" 
              loading="lazy" 
              title="Ubicación La Merced"
            ></iframe>
          </div>
          
          <div className="contact__details">
            <div className="contact__item">
              <span>📍</span> 
              <p><strong>Ubicación</strong><br/>La Merced, Quito, Ecuador</p>
            </div>
            <div className="contact__item">
              <span>✉️</span> 
              <p><strong>Email</strong><br/>erickpatino777@gmail.com</p>
            </div>
            <div className="contact__item">
              <span>📞</span> 
              <p><strong>Teléfono</strong><br/>0984546724</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;