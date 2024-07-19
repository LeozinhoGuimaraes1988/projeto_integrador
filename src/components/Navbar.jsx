import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.nav} onClick={() => navigate('/')}>
        <h1>Unybay</h1>
      </div>
      <ul className={styles.links_list}>
        <li className={styles.links_list}>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className={styles.links_list}>
          <NavLink to="/about">Sobre</NavLink>
        </li>

        <li className={styles.links_list}>
          <button>
            <NavLink to="/login" onClick={() => navigate('/login')}>
              Entrar
            </NavLink>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
