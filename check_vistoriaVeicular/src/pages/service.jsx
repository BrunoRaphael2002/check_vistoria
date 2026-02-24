import "./services.css";
import { gerarLinkWhatsApp } from "../utils/whatsapp";

import multaImg from "../assets/01.jpeg";
import financiamentoImg from "../assets/01.jpeg";
import completaImg from "../assets/01.jpeg";
import sinistroImg from "../assets/01.jpeg";

export default function ServicesSection() {
  const services = [
    {
      title: "Consulta Completa Veicular",
      description:
        "Consulta completa com histórico detalhado, restrições, débitos, gravame, sinistro e situação atual do veículo.",
      price: "R$ 39,90",
      image: completaImg,
      message:
        "Olá, vim do site e gostaria de solicitar a Consulta Completa Veicular.",
    },
    {
      title: "Consulta de Multas e Débitos",
      description:
        "Verifique multas, IPVA, licenciamento e outras pendências antes de comprar ou vender seu veículo.",
      price: "R$ 19,90",
      image: multaImg,
      message:
        "Olá, vim do site e gostaria de consultar Multas e Débitos do meu veículo.",
    },
    {
      title: "Consulta de Gravame / Financiamento",
      description:
        "Descubra se o veículo possui alienação fiduciária ou financiamento ativo registrado.",
      price: "R$ 24,90",
      image: financiamentoImg,
      message:
        "Olá, vim do site e gostaria de consultar Gravame ou Financiamento.",
    },
    {
      title: "Consulta de Sinistro e Leilão",
      description:
        "Saiba se o veículo já passou por leilão, sofreu sinistro ou possui histórico de perda total.",
      price: "R$ 29,90",
      image: sinistroImg,
      message:
        "Olá, vim do site e gostaria de consultar Sinistro e Leilão.",
    },
  ];

  return (
    <section className="services" id="Servicos">
      <div className="services-container">
        <h2>Nossos Serviços</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />

              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-footer">
                  <span className="service-price">
                    {service.price}
                  </span>

                  <a
                    href={gerarLinkWhatsApp(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-btn"
                  >
                    Solicitar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}