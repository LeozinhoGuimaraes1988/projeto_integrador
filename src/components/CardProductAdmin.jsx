import { useNavigate } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import styles from './CardProductAdmin.module.css';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const CardProductAdmin = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.cardProductAdmin}>
      <div className={styles.container}>
        <h1>{props.name}</h1>
        <img src={props.img} alt="Produto" />
        <div className={styles.details}>
          <div className={styles.textContainer}>
            <p>{props.manufacturer}</p>
            <p className={styles.price}>R$ {props.price}</p>
          </div>
          <div>
            <button
              className={styles.button}
              onClick={() => navigate('/form-product')}
            >
              <AiOutlineEdit />
            </button>
            <button className={styles.button} onClick={() => setIsOpen(true)}>
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h1>Excluir produto</h1>
        <p>Deseja realmente excluir este produto?</p>
        <div className={styles.buttons}>
          <div className={styles.yes}>
            <button className={styles.modalButton}>Sim</button>
          </div>
          <div className={styles.no}>
            <button
              className={styles.modalButton}
              onClick={() => setIsOpen(false)}
            >
              Não
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardProductAdmin;

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
