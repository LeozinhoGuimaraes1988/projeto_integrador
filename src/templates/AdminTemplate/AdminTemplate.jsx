import React from 'react';
import Footer from '../../components/Footer';

import NavbarAdmin from '../../components/NavbarAdmin';
import styles from '../AdminTemplate/AdminTemplate.module.css';

const AdminTemplate = ({ children }) => (
  <div className={styles.container}>
    <div>
      <div className={styles.header}>
        <NavbarAdmin />
      </div>
    </div>
    <div className={styles.children}>{children}</div>
    <Footer />
  </div>
);

export default AdminTemplate;
