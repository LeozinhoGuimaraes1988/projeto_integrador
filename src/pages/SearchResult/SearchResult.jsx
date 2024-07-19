import CardProduct from '../../components/CardProduct';
import UserTemplate from '../../templates/UserTemplate/Template';
import styles from '../ListProducts/ListProducts.module.css';

const SearchResult = () => {
  return (
    <div>
      <UserTemplate>
        <h1>Resultado da busca</h1>
        <div className={styles.container}>
          {Array.from({ length: 14 }).map(() => (
            <CardProduct />
          ))}
        </div>
        <p>Total: 4 itens</p>
      </UserTemplate>
    </div>
  );
};

export default SearchResult;
