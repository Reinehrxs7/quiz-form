function verificarRespostas() {
    const respostasCertas = [2, 2, 2, 0, 1, 2, 0, 3, 2, 0];
    let acertos = 0;

    for (let i = 1; i <= 10; i++) {
      const resposta = document.querySelector(`input[name="q${i}"]:checked`);
      if (resposta && parseInt(resposta.value) === respostasCertas[i - 1]) {
        acertos++;
      }
    }

    document.getElementById("resultado").textContent =
      `Você acertou ${acertos} de 10 perguntas.`;
  }

document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio tradicional do form
  verificarRespostas();   // Chama sua função que mostra os acertos
});
function menu(){
    window.location.href="index.html";
  }
