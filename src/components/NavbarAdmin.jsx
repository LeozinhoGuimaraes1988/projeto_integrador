import { NavLink, useNavigate } from 'react-router-dom';
import styles from './NavbarAdmin.module.css';

const NavbarAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.nav} onClick={() => navigate('/')}>
        <h1>Unybay</h1>
      </div>
      <div className={styles.links}>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sair</NavLink>
          </li>
          <li className={styles.annouce}>
            <NavLink to="/form-product">Anunciar</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarAdmin;
