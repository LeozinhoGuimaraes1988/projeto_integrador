import React, { useEffect, useState } from 'react';
import CardProductAdmin from '../../components/CardProductAdmin';
import AdminTemplate from '../../templates/AdminTemplate/AdminTemplate';
import { getApiAllProducts } from './Services';
import { toast } from 'react-toastify';
import styles from './UserProducts.module.css';
import { useNavigate } from 'react-router-dom';

const UserProducts = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);

  async function getAllProducts() {
    try {
      const response = await getApiAllProducts();
      setAllProducts(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error('Houve um erro ao buscar todos os produtos recentes');
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className={styles.content}>
      <AdminTemplate>
        <div className={styles.buttons}>
          <h1>Anúncios</h1>
          <button onClick={() => navigate('/form-product')}>
            Criar anúncio
          </button>
        </div>
        <div className={styles.container}>
          {allProducts.map((product) => (
            <CardProductAdmin
              id={product._id}
              key={product._id}
              name={product.name}
              img={product.url1}
              manufacturer={product.manufacturer}
              price={product.price}
            />
          ))}
        </div>
        <p>Total: 4 itens</p>
      </AdminTemplate>
    </div>
  );
};

export default UserProducts;
