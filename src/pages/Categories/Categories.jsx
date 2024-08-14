import UserTemplate from '../../templates/UserTemplate/Template';
import getCategory from './Services';
import { useState, useEffect } from 'react';
import CardProduct from '../../components/CardProduct';
import { useParams } from 'react-router-dom';
import ListLoading from '../../components/ListLoading';
import styles from '../Categories/Categories.module.css';

const Categories = () => {
  const params = useParams();
  const name = params?.name;

  const [productsCategories, setProductsCategories] = useState([]);
  const [isLoadingRecents, setLoadingRecents] = useState(true);

  const { category } = useParams(); // Pega a categoria a partir dos parâmetros da URL

  async function getProductsCategories() {
    try {
      setLoadingRecents(true);
      const response = await getCategory(category); // Passa a categoria para a função de busca
      setProductsCategories(response.data);
    } catch (error) {
      alert('Erro ao buscar produtos por categoria.');
    }
    setLoadingRecents(false);
  }

  useEffect(() => {
    getProductsCategories();
  }, [category]);

  return (
    <div>
      <UserTemplate>
        <h1>Categorias: {category}</h1> {/* Exibe o nome da categoria */}
        <div className={styles.container}>
          {isLoadingRecents && <ListLoading />}
          {productsCategories.map((product) => (
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
    </div>
  );
};

export default Categories;
