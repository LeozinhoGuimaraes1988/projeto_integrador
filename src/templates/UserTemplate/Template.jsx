import styles from '../UserTemplate/Template.module.css';
import { useLocation } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useEffect } from 'react';

const UserTemplate = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.children}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default UserTemplate;
