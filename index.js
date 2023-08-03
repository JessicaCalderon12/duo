const questions = [
    {
      question: "¿El modelo HTML DOM se contruye como un?",
      answers: ["Arbol de objetos", "Esquema", "Estructura de código", "Modelo de objetos"],
      correctAnswer: "Arbol de objetos",
    },
    {
      question: "¿La forma más fácil de encontrar un elemento HTML en el DOM es utilizando?",
      answers: ["Document.getElementByTagName", "Class", "Id", "Var"],
      correctAnswer: "Id",
    },
    {
      question: "¿Cuál de estos es un atributo?",
      answers: ["li", "img", "href", "title"],
      correctAnswer: "href",
    },
    
    {
        question: "¿Una página web es un documento?",
        answers: ["Verdadero", "Falso",],
        correctAnswer: "Verdadero",
    },

    {
        question: "¿El DOM fue diseñado para ser independiente de cualquier lenguaje de programación?",
        answers: ["Verdadero", "Falso",],
        correctAnswer: "Verdadero",
    },

    {
        question: "¿En cuántas partes se divide el estandar W3C Dom?",
        answers: ["3", "1", "5", "2"],
        correctAnswer: "3",
    },

    {
        question: "¿Para encontrar los elementos HTML con el mismo nombre de clase se usa?",
        answers: ["getElementBy", "document.write", "getElementByTagName", "getElementByClassName"],
        correctAnswer: "getElementByClassName",
    },

    {
        question: "¿Todos los navegadores web usan el modelo de objeto de documento para ser accesibles las páginas web al script?",
        answers: ["Verdadero", "Falso",],
        correctAnswer: "Verdadero",
    },

    {
        question: "¿Que significa DOM?",
        answers: ["Model Of a Document", "Document Object Memory", "Document Object Model", "Documento Esquematizado"],
        correctAnswer: "Document Object Model",
    },

    {
        question: "¿En el DOM todos los elementos HTML se definen como objetos?",
        answers: ["Verdadero", "Falso",],
        correctAnswer: "Verdadero",
    },
  ];
  
  function createQuiz() {
    let userAnswers = [];

function startQuiz() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";
  userAnswers = [];

  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = `<p>${question.question}</p>`;

    question.answers.forEach((answer) => {
      const option = document.createElement("input");
      option.type = "radio";
      option.name = `question-${index}`;
      option.value = answer;
      option.addEventListener("change", () => {
        userAnswers[index] = answer;
      });

      const label = document.createElement("label");
      label.innerHTML = answer;

      const optionContainer = document.createElement("div");
      optionContainer.appendChild(option);
      optionContainer.appendChild(label);

      questionElement.appendChild(optionContainer);
    });

    questionContainer.appendChild(questionElement);
  });

  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "none";
}

function showResults() {
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";

  let score = 0;
  questions.forEach((question, index) => {
    if (userAnswers[index] === question.correctAnswer) {
      score++;
    }
  });

  const resultMessage = document.createElement("p");
  resultMessage.innerHTML = `Obtuviste ${score} de ${questions.length} respuestas correctas.`;

  resultContainer.innerHTML = "";
  resultContainer.appendChild(resultMessage);
}

function resetAnswers() {
  const radioButtons = document.querySelectorAll("input[type='radio']");
  radioButtons.forEach((radio) => (radio.checked = false));

  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "none";
}

startQuiz();
  }
  
  function showResults(event) {
    event.preventDefault();
    const form = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result-container");
    const userAnswers = new FormData(form);
  
    let score = 0;
    let resultHTML = "<h2>Resultados:</h2>";
  
    questions.forEach((question, index) => {
      const userAnswer = userAnswers.get(`question-${index}`);
      const isCorrect = userAnswer === question.correctAnswer;
      if (isCorrect) {
        score++;
      }
  
      resultHTML += `<div class="result">
        <p><strong>${question.question}</strong></p>
        <p>Tu respuesta: ${userAnswer}</p>
        <p>${isCorrect ? "<span class='correct'>Correcta</span>" : `<span class='incorrect'>Incorrecta</span> - Respuesta correcta: ${question.correctAnswer}`}</p>
      </div>`;
    });
  
    resultHTML += `<p>Tu puntaje: ${score} de ${questions.length}</p>`;
  
    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = "block";
  }

  function resetAnswers() {
    const form = document.getElementById("quiz-form");
    form.reset();
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "none";
  }
  
  createQuiz();
  
  const form = document.getElementById("quiz-form");
  form.addEventListener("submit", showResults);
  
  const resetButton = document.getElementById("Limpiar");
  resetButton.addEventListener("click", resetAnswers);

