import React, { useState, useEffect } from "react";
import "./header.css";
import { gerarLinkWhatsApp } from "../utils/whatsapp";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false); // fecha menu ao clicar
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">Check Veicular BR</div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Sobre" >Sobre</a></li>
            <li><a href="#Servicos">Serviços</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </nav>

        <a
          href={gerarLinkWhatsApp(
            "Olá, vim do site e gostaria de realizar uma consulta veicular completa."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta-header"
        >
          Consulta Veicular Completa
        </a>

        {/* HAMBURGER */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;