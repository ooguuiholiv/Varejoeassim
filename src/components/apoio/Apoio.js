import React from "react";
import Slider from "../../services/Slider";
import { Container } from "./styles";

// import de imagens
import Cronograma from "../../assets/apoio/Cronograma.png";
import Acii from "../../assets/apoio/acii.png";
import AciiS from "../../assets/apoio/aciiS.jpeg";
import Sebrae from "../../assets/apoio/sebrae.jpeg";
import Nature from "../../assets/apoio/nature.png";
// import Cafe from "../../assets/apoio/cafevemtem.png";
// import Casa from "../../assets/apoio/casa.png";
// import Dimensao from "../../assets/apoio/dimensao.png";
// import Faustino from "../../assets/apoio/faustino.png";
// import Flat from "../../assets/apoio/flat.png";
// import Interativa from "../../assets/apoio/interativa.png";
// import Loghaly from "../../assets/apoio/loghaly.png";
// import Negao from "../../assets/apoio/negao.png";
// import Otica from "../../assets/apoio/oticasvida.png";
import Vilela from "../../assets/apoio/vilela.png";
import Vitoriosa from "../../assets/apoio/vitoriosa.png";
// import Voltz from "../../assets/apoio/voltz.png";
import Webtv from "../../assets/apoio/webtv.png";
// fim das imagens
import { SwiperSlide } from "swiper/react";

function Apoio() {
  const settings = {
    autoplay: true,
    spaceBetween: 35,
    slidesPerView: 2,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };
  return (
    <Container>
      <h1 className="title">Apoio:</h1>
      <div className="Slides">
        <Slider settings={settings}>
          {/* <SwiperSlide>
            <img src={Cafe} alt="cafe" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img src={Acii} alt="acii" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AciiS} alt="aciis" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sebrae} alt="sebrae" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Nature} alt="nature" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Casa} alt="cafe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Dimensao} alt="cafe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Faustino} alt="cafe" />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <img src={Flat} alt="cafe" />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <img src={Interativa} alt="cafe" />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <img src={Loghaly} alt="cafe" />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <img src={Negao} alt="cafe" />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <img src={Otica} alt="cafe" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img src={Vilela} alt="cafe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Vitoriosa} alt="cafe" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Voltz} alt="cafe" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img src={Webtv} alt="cafe" />
          </SwiperSlide>
        </Slider>
      </div>
      <div className="parcImg">
        <img src={Cronograma} alt="" />
      </div>
      <h1 className="subtitle">
        Seja um patrocinador ou <br /> expositor
      </h1>
      <h2 className="text">
        Aumente sua visibilidade no Ecossistema de Startups e gere <br /> novos
        negócios expondo sua marca
      </h2>
      <div className="btn">
        <button
          className="btn-garanta"
          onClick={() => {
           alert('Clicou no link')
          }}
        >
          Quero patrocinar o evento
        </button>
      </div>
    </Container>
  );
}

export default Apoio;
