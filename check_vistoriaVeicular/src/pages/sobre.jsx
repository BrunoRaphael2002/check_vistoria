import "./sobre.css";
import aboutImg from "../assets/logo.png"; // pode trocar por uma imagem melhor depois

export default function AboutSection() {
  return (
    <section className="about-section" id="Sobre">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Consulta Veicular" />
        </div>

        <div className="about-content">
          <h2>Sobre a Check Veicular BR</h2>

          <p>
            A <strong>Check Veicular BR</strong> é especializada em consultas
            veiculares online, oferecendo informações completas e seguras para
            quem deseja comprar, vender ou regularizar um veículo.
          </p>

          <p>
            Nosso objetivo é trazer transparência e segurança nas negociações,
            permitindo que você verifique multas, débitos, restrições,
            financiamento, sinistro e histórico completo antes de tomar qualquer decisão.
          </p>

          <p>
            Trabalhamos com atendimento rápido via WhatsApp, garantindo
            agilidade, praticidade e total confidencialidade dos dados.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <h4>✔ Atendimento Rápido</h4>
              <span>Retorno em poucos minutos</span>
            </div>

            <div className="highlight-card">
              <h4>✔ Consulta Segura</h4>
              <span>Dados protegidos e sigilosos</span>
            </div>

            <div className="highlight-card">
              <h4>✔ Informações Atualizadas</h4>
              <span>Dados confiáveis e completos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}