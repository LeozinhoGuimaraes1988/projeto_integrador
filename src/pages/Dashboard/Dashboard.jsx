import React, { useEffect, useState } from 'react';
import CardProduct from '../../components/CardProduct';

import { GrGamepad } from 'react-icons/gr';
import { GiClothes } from 'react-icons/gi';
import { FaCar, FaTools, FaGift, FaSearch } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { AiOutlineSync } from 'react-icons/ai';

import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../assets/carousel1.jpg';

import styles from '../Dashboard/Dashboard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { getApiRecentsProducts, getApiRecommendedsProducts } from '../Services';
import ListLoading from '../../components/ListLoading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminTemplate from '../../templates/AdminTemplate/AdminTemplate';

const ItensCategory = [
  {
    id: 0,
    title: 'Jogos',
    icon: <GrGamepad />,
  },

  {
    id: 1,
    title: 'Roupas',
    icon: <GiClothes />,
  },

  {
    id: 2,
    title: 'Veículos',
    icon: <FaCar />,
  },

  {
    id: 3,
    title: 'Ferramentas',
    icon: <FaTools />,
  },

  {
    id: 4,
    title: 'Comidas',
    icon: <MdFastfood />,
  },

  {
    id: 5,
    title: 'Presentes',
    icon: <FaGift />,
  },

  {
    id: 6,
    title: 'Outros',
    icon: <AiOutlineSync />,
  },
];

const Home = () => {
  const navigate = useNavigate();

  // State para mostrar os produtos numa lista
  const [recentsProducts, setRecentsProducts] = useState([]);
  const [recommendedsProducts, setRecommendedsProducts] = useState([]);
  const [isLoadingRecentsProducts, setIsLoadingRecentsProducts] =
    useState(false);
  const [isLoadingRecommendedProducts, setIsLoadingRecommendedProducts] =
    useState(false);
  const [inputSearch, setInputSearch] = useState('');
  // Chamada do serviço (services)
  async function getRecentsProducts() {
    setIsLoadingRecentsProducts(true);
    try {
      const response = await getApiRecentsProducts();
      setRecentsProducts(response.data);
    } catch (error) {
      toast.error('Houve um erro ao buscar produtos recentes');
    }
    setIsLoadingRecentsProducts(false);
  }

  async function getApiRecommendeds() {
    setIsLoadingRecommendedProducts(true);
    try {
      const response = await getApiRecommendedsProducts();
      setRecommendedsProducts(response.data);
    } catch (error) {
      toast.error('Houve um erro ao buscar produtos recomendados');
    }
    setIsLoadingRecommendedProducts(false);
  }

  useEffect(() => {
    getRecentsProducts();
  }, []);

  // É bom colocar cada useEffect para cada execução
  useEffect(() => {
    getApiRecommendeds();
  }, []);

  return (
    <div className={styles.content}>
      <AdminTemplate>
        <div className={styles.carousel}>
          <Carousel showThumbs={false}>
            <div>
              <img src={carousel1} alt="carousel" />
            </div>
            <div>
              <img src={carousel1} alt="carousel" />
            </div>
            <div>
              <img src={carousel1} alt="carousel" />
            </div>
          </Carousel>
        </div>

        <div className={styles.search}>
          <input
            placeholder="Estou procurando por..."
            onChange={(e) => setInputSearch(e.target.value)}
          />

          <button>
            <div onClick={() => navigate(`/products/search/${inputSearch}`)}>
              <FaSearch className={styles.icon} />
            </div>
          </button>
        </div>
        <div className={styles.container}>
          <h2>Itens recentes</h2>
          {isLoadingRecentsProducts && (
            <>
              {console.log('ListLoading component is rendering')}
              <ListLoading />
            </>
          )}
          <div className={styles.cards}>
            {recentsProducts.map((product) => (
              <CardProduct
                key={product._id}
                product={product}
                name={product.name}
                img={product.url1}
                manufacturer={product.manufacturer}
                price={product.price}
              />
            ))}
          </div>
          <Link to="/all-recents-products" className={styles.link}>
            <p>Ver todos os produtos recentes</p>
          </Link>
          <div className={styles.category}>
            <h2>Categorias</h2>
            <div className={styles.itens}>
              {ItensCategory.map((category) => (
                <button
                  key={category.id}
                  onClick={() => navigate('/products/category/')}
                  className={styles.button}
                >
                  <div className={styles.names}>
                    <div className={styles.icon}>{category.icon}</div>
                    <span>{category.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <h2>Anúncios</h2>
          <div className={styles.cards}>
            {isLoadingRecommendedProducts && <ListLoading />}
            {recommendedsProducts.map((product) => (
              <CardProduct
                key={product._id}
                id={product._id}
                // product={product}
                name={product.name}
                img={product.url1}
                manufacturer={product.manufacturer}
                price={product.price}
              />
            ))}
          </div>
          <Link to="/all-products" className={styles.link}>
            <p>Ver todos os produtos</p>
          </Link>
        </div>
      </AdminTemplate>
      <ToastContainer />
    </div>
  );
};

export default Home;
