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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </Container>
    </>
  );
}

export default Youtube;
