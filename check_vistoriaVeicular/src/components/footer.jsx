import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1 - Sobre */}
        <div className="footer-column">
          <h3>Consulta Veicular</h3>
          <p>
            Plataforma especializada em consultas veiculares online. 
            Verifique multas, débitos, financiamento e restrições de forma rápida e segura.
          </p>
        </div>

        {/* Coluna 2 - Links */}
        <div className="footer-column">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#Home">Início</a></li>
            <li><a href="#Servicos">Serviços</a></li>
            <li><a href="#Faq">Perguntas Frequentes</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Serviços */}
        <div className="footer-column">
          <h4>Nossos Serviços</h4>
          <ul>
            <li>Consulta de Multas</li>
            <li>Consulta de Financiamento</li>
            <li>Consulta de Gravame</li>
            <li>Consulta de Sinistro</li>
          </ul>
        </div>

        {/* Coluna 4 - Contato */}
        <div className="footer-column">
          <h4>Contato</h4>
          <ul>
            <li>Email: contato@seudominio.com</li>
            <li>WhatsApp: (83) 99999-9999</li>
            <li>Atendimento Online</li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="footer-bottom">
        <p>© {currentYear} Consulta Veicular. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}