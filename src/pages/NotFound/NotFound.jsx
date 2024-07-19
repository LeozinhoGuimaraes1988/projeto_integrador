import React from 'react';
import styles from '../NotFound/NotFound.module.css';
import UserTemplate from '../../templates/UserTemplate/Template';

const NotFound = () => {
  return (
    <div>
      <UserTemplate>
        <div className={styles.container}>
          <h1>Página não encontrada</h1>
        </div>
      </UserTemplate>
    </div>
  );
};

export default NotFound;
