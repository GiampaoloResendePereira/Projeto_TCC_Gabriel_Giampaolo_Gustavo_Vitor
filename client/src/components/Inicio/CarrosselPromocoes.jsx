import React from 'react';
import { Carousel } from 'react-bootstrap';
import promo1 from '../../assets/img/promo1.png';
import promo2 from '../../assets/img/promo2.png';
import promo3 from '../../assets/img/promo3.png';
import '../../styles/global.css';
import style from './Styles/CarrosselPromocoes.module.css';

const CarrosselPromocoes = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>

        <div className={style.black}>
          <div className={style.slogan}>
            <img
              className="d-block w-100" // Adicione a classe aqui
              src={promo1}

            />
          </div>
        </div>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className={style.black}>
          <div className={style.slogan}>
            <img
              className="d-block w-100 carousel-img" // Adicione a classe aqui
              src={promo2}
              alt="Promoção 2"
            />
          </div>
        </div>
        <Carousel.Caption>
          <h3>Promoção 2</h3>
          <p>Entrega garantida no mesmo dia!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className={style.black}>
          <div className={style.slogan}>
            <img
              className="d-block w-100 carousel-img" // Adicione a classe aqui
              src={promo3}
              alt="Promoção 3"
            />
          </div>
        </div>
        <Carousel.Caption>
          <h3>Promoção 3</h3>
          <p>Primeira entrega grátis para novos clientes.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrosselPromocoes;
