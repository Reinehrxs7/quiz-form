const questions = [
  {
    question: "Qual é o nome da estrutura que os tubarões usam para detectar campos elétricos?",
    options: ["Ampolas de Lorenzini", "Células de Malpighi", "Órgãos de Golgi", "Corpúsculos de Pacini"],
    correct: 0,
  },
  {
    question: "Qual tubarão pode sobreviver em água doce por períodos prolongados?",
    options: ["Tubarão-mako", "Tubarão-baleia", "Tubarão-cabeça-chata", "Tubarão-martelo"],
    correct: 2,
  },
  {
    question: "Quantos anos estima-se que os tubarões tenham existido na Terra?",
    options: ["10 milhões", "50 milhões", "100 milhões", "400 milhões"],
    correct: 3,
  },
  {
    question: "Qual é a espécie de tubarão mais rápida registrada?",
    options: ["Tubarão-branco", "Tubarão-mako", "Tubarão-tigre", "Tubarão-lixa"],
    correct: 1,
  },
  {
    question: "Qual tubarão é conhecido por sua capacidade de andar no fundo do oceano?",
    options: ["Tubarão-zebra", "Tubarão-cobre", "Tubarão-epaulette", "Tubarão-martelo"],
    correct: 2,
  },
  {
    question: "Os tubarões possuem ossos em seus corpos?",
    options: ["Sim", "Não", "Apenas na cabeça", "Apenas nas barbatanas"],
    correct: 1,
  },
  {
    question: "Qual dessas espécies tem a mordida mais forte registrada?",
    options: ["Tubarão-mako", "Tubarão-branco", "Tubarão-tigre", "Tubarão-touro"],
    correct: 3,
  },
  {
    question: "Qual é a principal razão pela qual os tubarões são caçados por humanos?",
    options: ["Pele", "Dentes", "Nadadeiras", "Órgãos internos"],
    correct: 2,
  },
  {
    question: "Qual tubarão é capaz de modificar sua temperatura corporal para se adaptar a diferentes ambientes?",
    options: ["Tubarão-mako", "Tubarão-tigre", "Tubarão-branco", "Tubarão-baleia"],
    correct: 2,
  },
  {
    question: "Qual espécie de tubarão pode viver por mais de 400 anos?",
    options: ["Tubarão-martelo", "Tubarão-da-Groenlândia", "Tubarão-branco", "Tubarão-azul"],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

const form = document.getElementById("quiz-form");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.innerText = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}" required />
      ${option}
    `;
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement("br"));
  });

  nextButton.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selected = parseInt(
    document.querySelector('input[name="answer"]:checked').value
  );
  const correct = questions[currentQuestion].correct;

  const allLabels = optionsContainer.querySelectorAll("label");
  allLabels.forEach((label, index) => {
    label.style.color = index === correct ? "green" : "red";
  });

  if (selected === correct) {
    score++;
    scoreDisplay.innerText = `Acertos: ${score}`;
  }

  nextButton.style.display = "inline-block";
  form.querySelector("button[type='submit']").disabled = true;
});

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    form.querySelector("button[type='submit']").disabled = false;
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h2>Quiz Finalizado!</h2>
      <p>Você acertou ${score} de ${questions.length} perguntas.</p>
    `;
  }
}

loadQuestion();

function menu(){
    window.location.href="index.html";
  }