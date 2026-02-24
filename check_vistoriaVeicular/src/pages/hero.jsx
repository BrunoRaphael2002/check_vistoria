import React from "react";
import "./hero.css";

import heroBg from "../assets/fundo03.png";
import heroCar from "../assets/10.png";
import { gerarLinkWhatsApp } from "../utils/whatsapp";

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    id="Home">
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-text">
          <h1>
            Consulta Veicular <br />
            Completa.
          </h1>

          <p>
            Descubra restrições, multas, débitos, leilão e histórico do
            veículo antes de comprar. Atendimento rápido e seguro.
          </p>

          <div className="hero-buttons">
          <a href="#Servicos"
  className="btn-primary"
>
  Ver Serviços
</a>

            <a
              href={gerarLinkWhatsApp(
                "Olá, vim do site e gostaria de realizar uma consulta veicular completa. Placa:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Consulta Veicular Completa
            </a>
          </div>
        </div>
      </div>

      <img src={heroCar} alt="Carro" className="hero-car" />
    </section>
  );
};

export default HeroSection;