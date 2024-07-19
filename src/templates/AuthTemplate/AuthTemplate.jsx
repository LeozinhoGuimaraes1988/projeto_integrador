import React from 'react';
import Footer from '../../components/Footer';
import styles from '../AuthTemplate/AuthTemplate.module.css';
import { NavLink } from 'react-router-dom';
const AuthTemplate = ({ children }) => (
  <div className={styles.container}>
    <div>
      <div className={styles.header}>
        <NavLink to="/">
          <h1>Unybay</h1>
        </NavLink>
      </div>
    </div>
    <div className={styles.children}>{children}</div>
    <Footer />
  </div>
);

export default AuthTemplate;
