import { useEffect, useState } from 'react';
import CardProduct from '../../components/CardProduct';
import UserTemplate from '../../templates/UserTemplate/Template';
import styles from '../ListRecentsProducts/ListRecentsProducts.module.css';
// Certifique-se de que este caminho está correto
import { getApiAllProductsRecents } from './Services';
import ListLoading from '../../components/ListLoading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListRecentsProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoadingRecents, setLoadingRecents] = useState(true);

  async function getAllRecentsProducts() {
    setLoadingRecents(true);
    try {
      const response = await getApiAllProductsRecents();
      setAllProducts(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error('Erro ao buscar produtos por nome.'); // Chama a notificação diretamente;
    }
    setLoadingRecents(false);
  }

  useEffect(() => {
    getAllRecentsProducts();
  }, []);

  return (
    <div>
      <UserTemplate>
        <h1>Items Recentes</h1>
        {isLoadingRecents && <ListLoading />}
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
      </UserTemplate>
      <ToastContainer />
    </div>
  );
};

export default ListRecentsProducts;
