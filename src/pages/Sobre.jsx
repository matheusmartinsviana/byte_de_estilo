import React, { useState } from "react";
import "./styles/Sobre.css";

function Sobre() {
  return (
    <div class="sobre-container">
      <h1
        className="display-4"
        style={{
          color: "white",
          marginBottom: "15px",
          paddingBottom: '20px',
        }}
      >
        Sobre nós
      </h1>
      <div class="sobre-content">
        <p class="sobre-message">
          Na <strong>ByteStyle</strong>, não estamos apenas no negócio de vestir
          pessoas. Estamos no negócio de potencializar experiências. Fundada na
          interseção entre moda e tecnologia, cada peça que criamos é uma
          expressão tangível da inovação. Da integração de tecidos inteligentes
          à fusão de design ergonômico e estética contemporânea, nossa missão é
          transcender os limites do vestuário tradicional, proporcionando uma
          experiência única e revolucionária para aqueles que buscam mais do que
          simplesmente se vestir, mas sim se conectar com o futuro.
        </p>
        <p class="sobre-message">
          Na <strong>ByteStyle</strong>, a moda não é apenas uma declaração de
          estilo, é uma afirmação de vanguarda. Nossa abordagem visionária une
          elegância e funcionalidade, criando um universo onde o design estético
          se funde perfeitamente com a tecnologia de ponta. Cada peça é
          meticulosamente projetada para elevar não apenas o guarda-roupa, mas
          também a própria experiência de vestir. Na convergência entre moda e
          inovação, a Byte se destaca como um farol de criatividade e
          excelência, redefinindo os padrões do que é possível na indústria da
          moda tecnológica.
        </p>
      </div>
    </div>
  );
}

export default Sobre;
