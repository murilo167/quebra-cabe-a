const pecas = document.querySelectorAll(".peca");
const contador = document.getElementById("contador");
const mensagem = document.getElementById("mensagemFinal");

pecas.forEach((peca) => {

  const botao = peca.querySelector(".btn-desbloquear");
  const icone = peca.querySelector(".icone");
  const texto = peca.querySelector(".texto");

  let ativada = false;

  botao.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!ativada) {
      peca.classList.add("ativa");
      icone.innerText = "🔓";
      texto.innerText = "Clique para entrar";

      botao.innerText = "Desbloqueada";
      botao.disabled = true;

      ativada = true;

      atualizarContador();
    }
  });

  peca.addEventListener("click", () => {
    if (ativada) {
      window.location.href = peca.dataset.link;
    }
  });

});

function atualizarContador() {
  const total = document.querySelectorAll(".peca.ativa").length;
  contador.innerText = `Peças desbloqueadas: ${total}`;

  if (total === 4) {
    mensagem.innerText = "🎉 Parabéns! Você completou!";
  }
}