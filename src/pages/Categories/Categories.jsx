import UserTemplate from '../../templates/UserTemplate/Template';
import getCategory from './Services';
import { useState, useEffect } from 'react';
import CardProduct from '../../components/CardProduct';
import { useParams } from 'react-router-dom';

const Categories = () => {
  const params = useParams();
  const name = params?.name;

  const [productsCategories, setProductsCategories] = useState({});
  const { category } = useParams(); // Pega a categoria a partir dos parâmetros da URL

  async function getProductsCategories() {
    try {
      console.log('Fetching product details for categories:', name.category);
      const response = await getCategory(category); // Passa a categoria para a função de busca
      setProductsCategories(response.data);
      console.log(response.data);
    } catch (error) {
      alert('Erro ao buscar produtos por categoria.');
    }
  }

  useEffect(() => {
    console.log('Current category:', category);
    if (category) {
      getProductsCategories();
    }
  }, [category]);

  return (
    <div>
      <UserTemplate>
        <h1>Categorias: {category}</h1> {/* Exibe o nome da categoria */}
        <div>
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
