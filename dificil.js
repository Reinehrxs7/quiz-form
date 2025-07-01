function verificarRespostas() {
  const respostasCertas = [
    2, 2, 2, 0, 1, 2, 0, 3, 2, 0, 2, 1, 2, 3, 1, 2, 1, 3, 2, 2, 1,
  ];

  let acertos = 0;

  for (let i = 1; i <= respostasCertas.length; i++) {
    const resposta = document.querySelector(`input[name="q${i}"]:checked`);
    if (resposta && parseInt(resposta.value) === respostasCertas[i - 1]) {
      acertos++;
    }
  }

  document.getElementById(
    "resultado"
  ).textContent = `Você acertou ${acertos} de ${respostasCertas.length} perguntas.`;
}

document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede envio padrão do form
    verificarRespostas(); // Chama função de correção
  });
function menu(){
    window.location.href="index.html";
  }
