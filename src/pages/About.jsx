import styles from '../pages/About.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UserTemplate from '../templates/UserTemplate/Template';

// images
import img1 from '../assets/cellphone.jpg';
import img2 from '../assets/headphone.avif';
import img3 from '../assets/pc_screen.jpg';
import img4 from '../assets/pc.avif';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const About = () => {
  return (
    <div>
      <UserTemplate>
        <div className={styles.content}>
          <div className={styles.container}>
            <h1>Sobre a Unybay</h1>
          </div>
          <div className={styles.who}>
            <h2>Quem somos nós</h2>
            <p>
              A Unybay é uma empresa líder na venda de produtos eletrônicos,
              comprometida em oferecer uma experiência de compra excepcional
              para todos os nossos clientes. Desde a nossa fundação, temos nos
              dedicado a proporcionar uma ampla gama de produtos de alta
              qualidade, combinada com um atendimento ao cliente de excelência.
            </p>
          </div>
          <div className={styles.who}>
            <h2>Nossa missão</h2>
            <p>
              Nossa missão é ser a principal escolha dos consumidores quando se
              trata de produtos eletrônicos, proporcionando inovação, qualidade
              e confiança. Nos empenhamos em oferecer preços competitivos,
              atendimento personalizado e um portfólio diversificado que atende
              às necessidades e desejos de cada cliente.
            </p>
          </div>
          <div className={styles.who}>
            <h2>Nossos valores</h2>
            <p>
              Na Unybay, nossos valores guiam todas as nossas ações e decisões:
              Inovação:
              <br />
              Estamos constantemente buscando novas tecnologias e produtos que
              melhorem a vida dos nossos clientes.
              <br />
              Qualidade: Comprometemo-nos com a excelência em todos os aspectos
              do nosso negócio, desde a seleção de produtos até o atendimento
              pós-venda.
              <br />
              Confiança: Construímos relações duradouras com nossos clientes
              através da transparência, honestidade e integridade.
              <br />
              Satisfação do cliente: A satisfação do cliente é a nossa
              prioridade número um. Trabalhamos arduamente para garantir que
              cada experiência de compra seja agradável e sem complicações.
            </p>
          </div>

          <h2>Nossos produtos</h2>
          <div className={styles.carousel}>
            <Carousel responsive={responsive}>
              <div>
                <img src={img1} />
              </div>
              <div>
                <img src={img2} />
              </div>
              <div>
                <img src={img3} />
              </div>
              <div>
                <img src={img4} />
              </div>
            </Carousel>
          </div>
          <div className={styles.doubts}>
            <h1>Confira as perguntas mais comuns que recebemos</h1>
            <button>Confira</button>
          </div>
        </div>
      </UserTemplate>
    </div>
  );
};

export default About;
