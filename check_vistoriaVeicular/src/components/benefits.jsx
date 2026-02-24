import React from 'react';
import './benefits.css';
// Importe seus ícones (ex: Lucide React) ou use SVGs/Imagens
import { ShieldAlert, ShieldCheck, Truck } from 'lucide-react';

const Benefits = () => {
  const benefitsData = [
    {
      icon: <ShieldAlert size={40} />,
      title: "Evite Golpes",
      description: "Descubra restrições, multas, débitos e o histórico completo do veículo."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Compra Segura",
      description: "Confira restrições, leilão e histórico para uma negociação sem riscos."
    },
    {
      icon: <Truck size={40} />,
      title: "Entrega Rápida",
      description: "Receba o relatório detalhado do veículo de forma instantânea em seu e-mail."
    }
  ];

  return (
    <section className="benefits-section">
      <div className="container benefits-wrapper">
        {benefitsData.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">
              {benefit.icon}
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-text">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;