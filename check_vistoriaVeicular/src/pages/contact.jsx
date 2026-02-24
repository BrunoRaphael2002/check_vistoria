import { useState } from "react";
import "./contact.css";
import { gerarLinkWhatsApp } from "../utils/whatsapp";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nome: "",
    placa: "",
    servico: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensagem = `Olá, vim do site e gostaria de solicitar uma consulta veicular.

Nome: ${formData.nome}
Placa: ${formData.placa}
Serviço: ${formData.servico}`;

    window.open(gerarLinkWhatsApp(mensagem), "_blank");
  };

  return (
    <section className="contact-section" id="Contato">
      {/* FUNDO COM BLUR */}
      <div className="contact-bg"></div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Solicite sua Consulta</h2>
          <p>
            Preencha os dados abaixo e envie diretamente para nosso atendimento
            via WhatsApp. Resposta rápida e segura.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Seu Nome"
            required
            value={formData.nome}
            onChange={handleChange}
          />

          <input
            type="text"
            name="placa"
            placeholder="Placa do Veículo"
            required
            value={formData.placa}
            onChange={handleChange}
          />

          <select
            name="servico"
            required
            value={formData.servico}
            onChange={handleChange}
          >
            <option value="">Selecione o Serviço</option>
            <option value="Consulta Completa Veicular">
              Consulta Completa Veicular
            </option>
            <option value="Consulta de Multas e Débitos">
              Consulta de Multas e Débitos
            </option>
            <option value="Consulta de Gravame / Financiamento">
              Consulta de Gravame / Financiamento
            </option>
            <option value="Consulta de Sinistro e Leilão">
              Consulta de Sinistro e Leilão
            </option>
          </select>

          <button type="submit">
            Enviar para WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}