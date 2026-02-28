import { useState, useEffect } from "react";
import "./depoimentos.css";

import cliente1 from "../assets/vendedor.jpg";
import cliente2 from "../assets/revendedora.jpg";
import cliente3 from "../assets/uber.jpg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Henrique",
      role: "Comprador de Veículo",
      image: cliente1,
      text: "Consultei antes de fechar negócio e descobri multas ocultas. Economizei dinheiro e evitei dor de cabeça!",
    },
    {
      name: "Mariana Souza",
      role: "Revendedora",
      image: cliente2,
      text: "Uso sempre antes de comprar carros para revenda. O sistema é rápido e extremamente confiável.",
    },
    {
      name: "João Pedro",
      role: "Motorista de App",
      image: cliente3,
      text: "Consulta completa em poucos segundos. Me passou muita segurança na compra do meu carro.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // 🔥 PRELOAD DAS IMAGENS (REMOVE DELAY)
  useEffect(() => {
    testimonials.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials-container">

        <span className="section-badge">Depoimentos</span>

        <h2 className="testimonials-title">
          O que nossos clientes dizem
        </h2>

        <div className="testimonial-wrapper">

          <button onClick={prevSlide} className="arrow left">
            &#10094;
          </button>

          <div className="testimonial-card fade">

            <div className="quote-icon">“</div>

            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="testimonial-avatar"
              loading="eager"
              decoding="async"
            />

            <div className="testimonial-author">
              <strong>{testimonials[current].name}</strong>
              <span>{testimonials[current].role}</span>
            </div>

            <p className="testimonial-text">
              {testimonials[current].text}
            </p>

          </div>

          <button onClick={nextSlide} className="arrow right">
            &#10095;
          </button>

        </div>

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}