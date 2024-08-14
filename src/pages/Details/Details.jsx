import { Carousel } from 'react-responsive-carousel';

import { useParams } from 'react-router-dom';

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
    if (id) {
      getDetailsProduct();
    } else {
      toast.error('ID do produto não encontrado.');
    }
  }, [id]);

  const productDescriptions = {
    'Cookies Zero Integral Laranja 80g':
      'Descubra o sabor delicioso e saudável dos Cookies Zero Integral de Laranja! Com apenas 80g, esses cookies são a escolha perfeita para quem busca uma opção de lanche leve e nutritivo. Feitos com ingredientes integrais, eles são ricos em fibras e não contêm adição de açúcar, ideal para quem quer manter uma dieta equilibrada sem abrir mão do sabor. A refrescante combinação de laranja dá um toque cítrico irresistível, tornando cada mordida uma explosão de sabor. Perfeitos para o café da manhã, lanches rápidos ou para matar a vontade de doce de forma saudável!',
    'Top Sem Costura PumaFeminino':
      'Desenvolvido em microfibra com conceito sem costura, o top nadador PumaTem maior elasticidade e melhor ajuste, proporcionando o máximo de conforto Busto Anatômico, permitindo melhor acomodação dos seios na medida ideal, sem amassar Possui base mais larga para melhor sustentação dos seios e garante maior durabilidade! Top nadador, feito com fios especiais, que torna a peça macia, com modelagem especial.',
    'Camisa Gola Polo Com Proteção Uv Premium':
      'Nossas camisetas Gola Polo tem um tecido leve e confortável. Composto de Piquet Roma Perfetto Anti-Pilling, não da bolinhas após lavagem e ainda tem proteção Uv contra Raios Solares! Seu caimento é mais Slim e tem como principal diferencial não encolher e nem desbotar após lavagem! Corte Mais justo, perfeito para uso no dia a dia!',
    'GameSir G7 Controle com fio para Xbox':
      'Uma nova maneira sem esforço de reestilizar a configuração de jogos Xbox com o GameSir G7 - o controlador Xbox com fio personalizado de última geração. Armado com 2 placas frontais que podem ser trocadas, modo de acionamento do cabelo adicional, botões extras para trás, software GameSir Nexus, e muito mais. Você é capaz de personalizar facilmente um controlador Xbox verdadeiramente único, de dentro para fora para você mesmo ou para os outros especiais.',
  };

  return (
    <div>
      <UserTemplate>
        <p className={styles.title}>{product.name}</p>
        <div className={styles.container}>
          <div>
            <div className={styles.carousel}>
              <Carousel showThumbs={false}>
                <div className={styles.img}>
                  <img src={product.url1} />
                </div>
                <div className={styles.img}>
                  <img src={product.url2} />
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            <div className={styles.data}>
              <p>
                {productDescriptions[product.name] ||
                  'Descrição não disponível.'}
              </p>
            </div>
            <div className={styles.data}>
              <p className={styles.price}> R$ {product.price}</p>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </div>
      </UserTemplate>
      <ToastContainer />
    </div>
  );
};

export default Details;
