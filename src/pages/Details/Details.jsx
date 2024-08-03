import { Carousel } from 'react-responsive-carousel';

import { useParams } from 'react-router-dom';

import carousel1 from '../../assets/carousel1.jpg';

import styles from '../Details/Details.module.css';

import UserTemplate from '../../templates/UserTemplate/Template';
import { getApiDetailsProduct } from './Services';
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState({}); // É um objeto vazio porque vai ser armazenado um conjunto de produtos

  async function getDetailsProduct() {
    try {
      console.log('Fetching product details for ID:', id);
      const response = await getApiDetailsProduct(id ?? '');
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error('Erro ao buscar produtos por nome.');
    }
  }

  useEffect(() => {
    getDetailsProduct();
  }, []);

  return (
    <div>
      <UserTemplate>
        <p className={styles.title}>{product.name}</p>
        <div className={styles.container}>
          <div>
            <div className={styles.carousel}>
              <Carousel showThumbs={false}>
                <div>
                  <img src={product.url1} />
                </div>
                <div>
                  <img src={product.url2} />
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            <div className={styles.data}>
              <p>Informações do vendedor</p>
              <p>Leonardo Guimarães </p>
              <p>Jaraguá GO</p>
              <p>Email: leosinhoguimaraes@hotmail.com</p>
              <p>Contato: (62) 99999-9999</p>
            </div>
            <div className={styles.data}>
              <p className={styles.price}>{product.price}</p>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <h3>Detalhes do produto</h3>
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </div>
      </UserTemplate>
      <ToastContainer />
    </div>
  );
};

export default Details;
