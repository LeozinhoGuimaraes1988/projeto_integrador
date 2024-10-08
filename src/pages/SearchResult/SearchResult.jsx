import CardProduct from '../../components/CardProduct';
import UserTemplate from '../../templates/UserTemplate/Template';
import styles from '../ListRecentsProducts/ListRecentsProducts.module.css';
import { useParams } from 'react-router-dom';
import { getApiProductsbyName } from './Services';
import { useEffect, useState } from 'react';
import ListLoading from '../../components/ListLoading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchResult = () => {
  const params = useParams();

  const [allProducts, setAllProducts] = useState([]);
  const [isLoadingProducts, setLoadingProducts] = useState(true);

  const nameProduct = params?.product; // A interrogação serve para dizer que o valor pode ser nulo

  async function getProductByName() {
    setLoadingProducts(true);
    const response = await getApiProductsbyName(nameProduct ?? '');
    setAllProducts(response.data); // Está recebendo os dados do response

    try {
    } catch (error) {
      toast('Erro ao buscar produtos por nome.'); // Chama a notificação diretamente
    }
    setLoadingProducts(false);
  }

  useEffect(() => {
    getProductByName();
  }, [nameProduct]);

  return (
    <div>
      <UserTemplate>
        <h1>Resultado da busca</h1>
        {isLoadingProducts && <ListLoading />}
        <div className={styles.container}>
          {allProducts.map((product) => (
            <CardProduct
              id={product._id}
              key={product._id}
              name={product.name}
              img={product.url1}
              manufacturer={product.manufacturer}
              price={product.price}
            />
          ))}
        </div>
        <p>Total: {allProducts.length} itens</p>
      </UserTemplate>
      <ToastContainer />
    </div>
  );
};

export default SearchResult;
