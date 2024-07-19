import styles from './Footer.module.css';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>Unybay</h2>
        </div>

        <div>
          <button className={styles.talk}>
            <NavLink to="/talk">
              <h2>Fale Conosco</h2>
            </NavLink>
          </button>
        </div>
      </div>

      <p>Unyleya Educacional | Todos os direitos reservados</p>
      <div className={styles.icons}>
        <a href="http://www.linkedin.com">
          <FaLinkedin />
        </a>
        <a href="http://facebool.com">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
