import CardProduct from '../../components/CardProduct';
import UserTemplate from '../../templates/UserTemplate/Template';

import styles from '../ListProducts/ListProducts.module.css';

const ListProducts = () => {
  return (
    <div>
      <h1>ListProducts</h1>
      <div className={styles.container}>
        {Array.from({ length: 14 }).map(() => (
          <CardProduct />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
