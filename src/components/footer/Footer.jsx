import "./Footer.css";
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {}
        <div className="footer__section">
          <h3>Erick Patiño</h3>
          <p>Proyecto desarrollado como parte de la formación académica en la EPN.</p>
          <div className="footer__contact">
            <p><strong>Tel:</strong> 0984546724</p>
            <p><strong>Email:</strong> erickpatino777@gmail.com</p>
          </div>
        </div>

        {}
        <div className="footer__section">
          <h3>Sígueme</h3>
          <div className="footer__social">
            <a href="https://www.facebook.com/erick.patino.5680" target="_blank" rel="noreferrer">
              <FaFacebook className="footer__icon" /> Facebook
            </a>
            <a href="https://github.com/ErickPatino10" target="_blank" rel="noreferrer">
              <FaGithub className="footer__icon" /> GitHub
            </a>
            <a href="https://www.instagram.com/theerickyt03/" target="_blank" rel="noreferrer">
              <FaInstagram className="footer__icon" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p>© 2026 Erick Patiño. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;