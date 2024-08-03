import { useNavigate } from 'react-router-dom';

import styles from './CardProduct.module.css';

const CardProduct = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onClick={() => navigate(`/products/details/${props.id}`)}
    >
      <h1>{props.name}</h1>
      <img src={props.img} alt="Produto" />
      <div className={styles.textContainer}>
        <p>{props.manufacturer}</p>
        <p className={styles.price}>R$ {props.price}</p>
      </div>
    </div>
  );
};

export default CardProduct;

// import { useNavigate } from 'react-router-dom';
// import styles from './CardProduct.module.css';

// const CardProduct = ({ id, name, img, manufacturer, price }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className={styles.container}
//       onClick={() => navigate(`/products/details/${id}`)}
//     >
//       <h1>{name}</h1>
//       <img src={img} alt="Produto" />
//       <div className={styles.textContainer}>
//         <p>{manufacturer}</p>
//         <p className={styles.price}>R$ {price}</p>
//       </div>
//     </div>
//   );
// };

// export default CardProduct;
