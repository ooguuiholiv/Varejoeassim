import React from "react";
import { Container } from "./Styles";

function Youtube() {
  return (
    <>
      <Container>
        <hr />
        <h1 className="title">Assista o vídeo do evento abaixo</h1>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/IXSZsTx3-Fc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </>
  );
}

export default Youtube;
