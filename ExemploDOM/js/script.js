const botao = document.getElementById("btnAtivar");
const peca = document.getElementById("peca");

const statusTexto = document.getElementById("statusTexto");
const icone = document.getElementById("iconePeca");
const titulo = document.getElementById("tituloPeca");
const texto = document.getElementById("textoPeca");

// BOTÃO ATIVAR
botao.addEventListener("click", () => {
  // muda status
  statusTexto.innerText = "Desbloqueada";

  // muda visual da peça (fica verde)
  peca.classList.remove("bloqueada");
  peca.classList.add("ativa");

  // muda conteúdo
  icone.innerText = "🔓";
  titulo.innerText = "Peça Ativa";
  texto.innerText = "Clique para ir para a próxima página!";

  // ativa clique na peça
  peca.addEventListener("click", () => {
    // redireciona para aula.html
    window.location.href = "aula.html";
  });
});