import { useEffect, useState } from 'react';
import CardProduct from '../../components/CardProduct';
import UserTemplate from '../../templates/UserTemplate/Template';
import styles from '../ListAllProducts/ListAllProducts.module.css';
import { getApiAllProducts, getApiAllProductsOrdered } from './Services';
import ListLoading from '../../components/ListLoading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoadingRecents, setLoadingRecents] = useState(true);

  async function getAllRecentsProducts() {
    setLoadingRecents(true);
    try {
      const response = await getApiAllProducts();
      setAllProducts(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error('Houve um erro ao buscar todos os produtos recentes');
    }
    setLoadingRecents(false);
  }

  // Função para pegar os produtos com uma ordenação
  async function getAllOrderProducts(order) {
    setAllProducts([]); // Seta o array para vazio antes de fazer a requisção
    setLoadingRecents(true);

    try {
      const response = await getApiAllProductsOrdered(order);
      setAllProducts(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error('Houve um erro ao buscar todos os produtos recentes');
    }
    setLoadingRecents(false);
  }

  useEffect(() => {
    getAllRecentsProducts();
  }, []);

  return (
    <div>
      <UserTemplate>
        <h1>Todos os produtos</h1>
        <div>
          <p>
            Ordenar por:
            <button onClick={() => getAllOrderProducts('ascending')}>
              Menor preço
            </button>
            | Ordenar por:
            <button onClick={() => getAllOrderProducts('descending')}>
              Maior preço
            </button>
          </p>
        </div>
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

export default ListAllProducts;
