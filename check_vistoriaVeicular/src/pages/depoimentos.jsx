import { useState } from "react";
import "./depoimentos.css";

import user1 from "../assets/revendedora.jpg";
import user2 from "../assets/vendedor.jpg";
import user3 from "../assets/uber.jpg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Henrique",
      role: "Comprador de Veículo",
      image: user2,
      text: "Consultei antes de fechar negócio e descobri multas ocultas. Economizei dinheiro e evitei dor de cabeça!",
    },
    {
      name: "Mariana Souza",
      role: "Revendedora",
      image: user1,
      text: "Uso sempre antes de comprar carros para revenda. O sistema é rápido e extremamente confiável.",
    },
    {
      name: "João Pedro",
      role: "Motorista de App",
      image: user3,
      text: "Consulta completa em poucos segundos. Me passou muita segurança na compra do meu carro.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          O que nossos clientes dizem
        </h2>

<div className="testimonial-card">

  <div className="testimonial-author">
    <img
      src={testimonials[current].image}
      alt={testimonials[current].name}
      className="testimonial-avatar"
    />

    <div className="author-info">
      <strong>{testimonials[current].name}</strong>
      <span>{testimonials[current].role}</span>
    </div>
  </div>

  <p className="testimonial-text">
    "{testimonials[current].text}"
  </p>

</div>

        

        <div className="testimonial-controls">
          <button onClick={prevSlide} className="arrow">
            ←
          </button>

          <div className="dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="arrow">
            →
          </button>
        </div>
      </div>
    </section>
  );
}