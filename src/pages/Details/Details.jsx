import { Carousel } from 'react-responsive-carousel';

import carousel1 from '../../assets/carousel1.jpg';

import styles from '../Details/Details.module.css';

import UserTemplate from '../../templates/UserTemplate/Template';

const Details = () => {
  return (
    <div>
      <UserTemplate>
        <p className={styles.title}>Echo Dot (8ª Geração)</p>
        <div className={styles.container}>
          <div>
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
              <p className={styles.price}>R$ 799,00</p>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <h3>Detalhes do produto</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            bibendum metus eu lorem malesuada ultrices. Nullam id fringilla
            elit. Donec semper imperdiet nunc eget maximus. Proin euismod erat
            quis est dictum aliquet. Cras ac commodo felis. Sed non nisl eget
            sem maximus scelerisque. Pellentesque eu lacus fermentum, volutpat
            nulla quis, fermentum neque. Praesent tempus magna sit amet neque
            laoreet tempor. Vestibulum ut nisl eu libero varius condimentum.
            Curabitur condimentum pellentesque ante, sed pretium mi condimentum
            at. Mauris ultricies nisi vehicula, maximus quam sit amet,
            consectetur nunc. Etiam mauris dui, hendrerit et purus eget, rutrum
            rhoncus turpis. Morbi ultrices consectetur tortor, ut rhoncus diam.
          </p>
          <p>
            Proin accumsan sodales felis, id egestas risus varius dapibus.
            Suspendisse potenti. Etiam ornare dignissim dui quis viverra. Duis
            varius erat nec erat blandit mattis. Praesent ullamcorper a lectus
            vel hendrerit. Nam egestas neque leo, eu consequat dolor mollis id.
            Maecenas et aliquet nulla. Proin bibendum turpis vel ipsum
            sollicitudin auctor. Sed sit amet condimentum metus, eu tincidunt
            nulla. Duis non semper augue, in vulputate lacus. Aenean tristique
            euismod ornare. Donec at eros id ex elementum tincidunt. Aenean
            sollicitudin lacus in augue auctor consequat quis sit amet orci.
            Etiam placerat purus quis tortor vehicula finibus. Aenean ipsum
            lorem, porta rhoncus egestas vitae, tincidunt sit amet libero. Nam
            tempor suscipit nulla ac lacinia.
          </p>
        </div>
      </UserTemplate>
    </div>
  );
};

export default Details;
