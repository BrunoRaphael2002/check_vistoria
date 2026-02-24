export function scrollToSection(id, offset = 80) {
  const container = document.querySelector(".main-wrapper");
  const element = document.getElementById(id);

  if (container && element) {
    const y =
      element.offsetTop - offset;

    container.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
}