const botaoMobile = document.getElementById("botao-mobile");

function menuMobile(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const navegacao = document.getElementById("navegacao");
  navegacao.classList.toggle("active");
  const ativo = navegacao.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", ativo);
  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

botaoMobile.addEventListener("click", menuMobile);
botaoMobile.addEventListener("touchstart", menuMobile);
