import React from 'react';
import CardProduct from '../components/CardProduct';
import UserTemplate from '../templates/UserTemplate/Template';

import { GrGamepad } from 'react-icons/gr';
import { GiClothes } from 'react-icons/gi';
import { FaCar, FaTools, FaGift, FaSearch } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { AiOutlineSync } from 'react-icons/ai';

import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../assets/carousel1.jpg';

import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

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
  return (
    <div className={styles.content}>
      <UserTemplate>
        <div className={styles.carousel}>
          <Carousel showThumbs={false}>
            <div>
              <img src={carousel1} />
            </div>
            <div>
              <img src={carousel1} />
            </div>
            <div>
              <img src={carousel1} />
            </div>
          </Carousel>
        </div>

        <div className={styles.search}>
          <input placeholder="Estou procurando por..." />
          <button>
            <div onClick={() => navigate('/products/search')}>
              <FaSearch className={styles.icon} />
            </div>
          </button>
        </div>
        <div className={styles.container}>
          <h2>Itens recentes</h2>
          <div className={styles.cards}>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
          <p>Ver mais</p>

          <div className={styles.category}>
            <h2>Categorias</h2>
            <div className={styles.itens}>
              {ItensCategory.map((category) => (
                <div className={styles.names}>
                  <div className={styles.icon}>{category.icon}</div>
                  <span>{category.title}</span>
                </div>
              ))}
            </div>
          </div>

          <h2>Anúncios</h2>
          <div className={styles.cards}>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
          <p>Ver mais</p>
        </div>
      </UserTemplate>
    </div>
  );
};

export default Home;
