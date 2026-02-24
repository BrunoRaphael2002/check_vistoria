export function gerarLinkWhatsApp(mensagem) {
  const numero = "5583999965318";
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${texto}`;
}