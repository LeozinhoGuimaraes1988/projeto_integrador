import styles from '../UserTemplate/Template.module.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const UserTemplate = (props) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.children}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default UserTemplate;
