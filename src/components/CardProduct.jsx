import { useNavigate } from 'react-router-dom';
import img_product from '../assets/product.jpg';

import styles from './CardProduct.module.css';

const CardProduct = () => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onClick={() => navigate('/products/details')}
    >
      <h1>Produto</h1>
      <img src={img_product} alt="Produto" />
      <div className={styles.textContainer}>
        <p>Amazon</p>
        <p className={styles.price}>R$799,99</p>
      </div>
    </div>
  );
};

export default CardProduct;
