import './lgpd.css'

export default function LgpdSection() {
  return (
    <section className="lgpd-section">
      <div className="lgpd-container">
        <h2>Proteção de Dados e LGPD</h2>

        <p className="lgpd-intro">
          Seus dados estão seguros conosco. Trabalhamos em total conformidade
          com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018),
          garantindo segurança, privacidade e transparência em todas as consultas realizadas.
        </p>

        <div className="lgpd-grid">
          <div className="lgpd-card">
            <h3>🔒 Segurança</h3>
            <p>
              Utilizamos medidas técnicas e administrativas para proteger suas
              informações contra acessos não autorizados.
            </p>
          </div>

          <div className="lgpd-card">
            <h3>📄 Finalidade</h3>
            <p>
              Seus dados são utilizados exclusivamente para a realização da
              consulta solicitada.
            </p>
          </div>

          <div className="lgpd-card">
            <h3>🛡 Privacidade</h3>
            <p>
              Não compartilhamos suas informações com terceiros sem
              autorização legal.
            </p>
          </div>
        </div>

        <p className="lgpd-footer">
          Caso tenha dúvidas sobre como tratamos seus dados, entre em contato
          conosco pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}