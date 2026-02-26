import "./services.css";
import { gerarLinkWhatsApp } from "../utils/whatsapp";

import atpve from "../assets/atpve01.png";
import crlv from "../assets/crlv.png";
import crv from "../assets/crv.png";
import multas from "../assets/multas01.png";
import leilao from '../assets/leilao.png';
import completo from '../assets/completo.png'

export default function ServicesSection() {
  const services = [
    {
      title: "Consulta Veicular Completa ",
      description:
        "Consulta completa com histórico detalhado, restrições, débitos, gravame, sinistro e situação atual do veículo.",
      price: "R$ 49,90",
      image: completo,
      message:
        "Olá, vim do site e gostaria de solicitar a Consulta Veicular Completa .",
    },
    {
      title: "Numero do CRV",
      description:
        "Verifique multas, IPVA, licenciamento e outras pendências antes de comprar ou vender seu veículo.",
      price: "R$ 39,90",
      image: crv,
      message:
        "Olá, vim do site e gostaria de consultar Numero do CRV do meu veículo.",
    },
    {
      title: "Consulta de Segunda via da ATPVe",
      description:
        "Descubra se o veículo possui alienação fiduciária ou financiamento ativo registrado.",
      price: "R$ 49,90",
      image: atpve,
      message:
        "Olá, vim do site e gostaria de consultar Gravame ou Financiamento.",
    },
    {
      title: "Consulta de CRLV Digital",
      description:
        "Saiba se o veículo já passou por leilão, sofreu sinistro ou possui histórico de perda total.",
      price: "R$ 29,90",
      image: crlv,
      message:
        "Olá, vim do site e gostaria de consultar Sinistro e Leilão.",
    },

      {
      title: "Consulta de leilão",
      description:
        "Saiba se o veículo já passou por leilão, sofreu sinistro ou possui histórico de perda total.",
      price: "R$ 19.90",
      image: leilao,
      message:
        "Olá, vim do site e gostaria de consultar Sinistro e Leilão.",
    },

       {
      title: "Consulta de Debitos e Multas",
      description:
        "Saiba se o veículo já passou por leilão, sofreu sinistro ou possui histórico de perda total.",
      price: "R$ 19,90",
      image: multas,
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