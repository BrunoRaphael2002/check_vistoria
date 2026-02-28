import { useState } from "react";
import "./hero.css";

import heroBg from "../assets/fundo03.png";
import heroCar from "../assets/10.png";
import { gerarLinkWhatsApp } from "../utils/whatsapp";

const HeroSection = () => {
  const [placa, setPlaca] = useState("");

  const handleEnviar = () => {
    if (!placa) return;

    const mensagem = `Olá, vim do site e gostaria de realizar uma consulta veicular.\nPlaca: ${placa}`;

    window.open(gerarLinkWhatsApp(mensagem), "_blank");
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="Home"
    >
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

          {/* FORMULÁRIO */}
          <div className="hero-form">
            <input
              type="text"
              placeholder="Digite a placa (ABC1D23)"
              value={placa}
              onChange={(e) => setPlaca(e.target.value.toUpperCase())}
              maxLength={7}
            />

            <button onClick={handleEnviar}>
              Enviar
            </button>
          </div>
        </div>
      </div>

      <img src={heroCar} alt="Carro" className="hero-car" />
    </section>
  );
};

export default HeroSection;