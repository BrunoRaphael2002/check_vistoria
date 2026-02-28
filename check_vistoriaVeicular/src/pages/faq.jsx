import { useState } from "react";
import "./faq.css";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "O que é a consulta veicular?",
      answer:
        "A consulta veicular é um serviço que permite verificar informações importantes sobre um veículo, como multas, débitos, financiamento, restrições judiciais, histórico de sinistro e muito mais.",
    },
    {
      question: "Quais informações posso consultar?",
      answer:
        "Você pode consultar multas, débitos de IPVA, financiamento, gravame, restrições judiciais (Renajud), histórico de sinistro, entre outras informações importantes.",
    },
    {
      question: "A consulta é segura?",
      answer:
        "Sim. Trabalhamos com sistemas seguros e criptografados para garantir a proteção dos seus dados durante todo o processo.",
    },
    {
      question: "Quanto tempo leva para receber o resultado?",
      answer:
        "O resultado geralmente é enviado em poucos minutos após a confirmação do pagamento porém dependendo da região pode demorar até 1h.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Aceitamos Pix, cartão de crédito e outras formas de pagamento digital para facilitar sua consulta.",
    },
    {
      question: "Preciso informar dados pessoais?",
      answer:
        "Normalmente apenas a placa do veículo é necessária para realizar a consulta, dependendo do tipo de serviço contratado.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="Faq">
      <div className="faq-container">
        <h2>Perguntas Frequentes</h2>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}