document.querySelectorAll(".screen").forEach((screen) => {
  screen.classList.remove("active");
});
document.getElementById("start-screen").classList.add("active");

document.getElementById("start-game").addEventListener("click", () => {
  document.getElementById("start-screen").remove();
  document.getElementById("menu-screen").classList.add("active");
});

const questions = {
  historia: {
    facil: [
      {
        question: "¿En qué año se declaró la independencia del Perú?",
        answer: "1821",
        image: "img/independencia.jpg"
      },
      {
        question: "¿Cuál es la capital de Perú",
        answer: "Lima",
        image: "img/lima-city.jpg"
      },
      {
        question: "¿Quién fue el primer presidente del Perú?",
        answer: "Jose de la Riva Agüero",
        image: "img/rivaguero.jpg"
      },
    ],

    medio: [
      {
        question: "¿Qué baile es considerado el símbolo nacional del Perú?",
        answer: "La marinera",
        image: "img/marinera.jpg"
      },
      {
        question: "¿Cuál fue la capital del Imperio Inca?", 
        answer: "Cusco",
        image: "img/cusco.jpg"
      },
      {
        question: "¿Cuál es la bebida alcohólica bandera del Perú?", 
        answer: "Pisco",
        image: "img/pisco.jpg"
      },
    ],

    dificil: [
      {
        question: "¿Quién lideró la campaña de la independencia del sur?",
        answer: "Jose de San Martin",
        image: "img/josesm.jpg"
      },
      {
        question: "¿En qué año cayó el Imperio Inca?",
        answer: "1532",
        image: "img/incas.jpg"
      },
      {
        question: "¿Cuál es el río más largo del Perú?",
        answer: "Río Ucayali",
        image: "img/ucayali.jpg"
      },
    ],
  },

  ciencia: {
    facil: [
      {
        question: "¿Cuál es el animal nacional del Perú?", 
        answer: "Gallito de las Rocas",
        image: "img/gallito.jpg"
      },
      {
        question: "¿Qué animal es ovíparo y mamífero?",
        answer: "Ornitorrinco",
        image: "img/ornito.jpg"
      },
      {
        question: "¿Cómo se le llama al proceso donde las plantas usan la luz del sol para transformar el CO2 y el agua en azúcares y oxígeno?",
        answer: "Fotosíntesis",
        image: "img/foto.jpg"
      },
    ],

    medio: [
      {
        question: "¿Qué planta medicinal es originaria del Perú?",
        answer: "Maca",
        image: "img/maca.jpg"
      },
      {
        question: "¿Qué fruto es símbolo de la biodiversidad selvática peruana?",
        answer: "Aguaje",
        image: "img/aguaje.jpg"
      },
      {
        question: "¿A qué temperatura hierve el agua?",
        answer: "100 grados",
        image: "img/agua.jpg"
      },
    ],

    dificil: [
      {
        question: "¿Cuántos dientes tiene un perro?",
        answer: "42",
        image: "img/perro.jpg"
      },
      {
        question: "¿Cuántos huesos tiene el cuerpo humano?",
        answer: "206",
        image: "img/humano.jpg"
      },
      {
        question: "¿Cuántos segundos hay en un día?",
        answer: "86400",
        image: "img/dia.jpg"
      },
    ],
  },

  matematica: {
    facil: [
      {
        question: "¿Cuántos lados tiene un triángulo?", 
        answer: "tres",
        image: "img/triangulo.jpg"
      },
      {
        question: "¿Cuánto es 2 + 2?",
        answer: "cuatro",
        image: "img/math.jpg"
      },
      {
        question: "¿Cómo se llama una figura de seis caras?",
        answer: "Hexágono",
        image: "img/hexa.jpg"
      },
    ],

    medio: [
      {
        question: "¿Cuál es el valor de pi (π) con dos decimales?",
        answer: "3.14",
        image: "img/pi.jpg"
      },
      {
        question: "¿Qué número suman las caras opuestas de un dado?",
        answer: "7",
        image: "img/dadp.jpg"
      },
      {
        question: "¿Cuánto es el área de un cuadrado cuyo lado mide 5 cm?",
        answer: "25 cm²",
        image: "images/square-area.jpg"
      },
    ],

    dificil: [
      {
        question: "¿Cuál es la fórmula para calcular el área de un círculo?",
        answer: "A = πr²",
        image: "images/circle-area.jpg"
      },
      {
        question: "Si una recta tiene una pendiente de 2, ¿qué valor tiene la ecuación de la recta en su forma pendiente-intersección (y = mx + b)?",
        answer: "y = 2x + b",
        image: "images/line-equation.jpg"
      },
    ],
  },

  libros: {
    facil: [
      {
        question: "¿Quién escribió el libro 'El Caballero Carmelo'?",
        answer: "Valdelomar",
        image: "img/carmelo.jpg"
      },
      {
        question: "¿Cómo se llama el autor de 'Harry Potter'?",
        answer: "Rowling",
        image: "img/potter.jpg"
      },
      {
        question: "Qué planeta tiene nombre de dios griego?",
        answer: "Urano",
        image: "img/urano.jpg"
      },
    ],

    medio: [
      {
        question: "¿En qué país se desarrolla la novela 'Cien años de soledad'?",
        answer: "Colombia",
        image: "img/soledad.jpg"
      },
      {
        question: "¿Cómo se llama el protagonista de la novela 'Don Quijote de la Mancha'?",
        answer: "Don Quijote de la Mancha",
        image: "img/quijote.jpg"
      },
    ],

    dificil: [
      {
        question: "¿Qué autor peruano escribió 'La ciudad y los perros'?",
        answer: "Mario Vargas Llosa",
        image: "img/ciudad.jpg"
      },
      {
        question: "¿En qué año fue publicada la obra '1984' de George Orwell?",
        answer: "1949",
        image: "images/1984-book.jpg"
      },
    ],
  },

  culturapopular: {
    facil: [
      {
        question: "¿Quién es el capitán histórico de EEG?",
        answer: "Nicola",
        image: "img/nicola.jpg"
      },
      {
        question: "¿Personaje que representa a Queca en la vida real?",
        answer: "Johana San Miguel",
        image: "img/queca.jpg"
      },
      {
        question: "¿Frase celebre de Monchi?",
        answer: "Horrible oye",
        image: "img/monchi.jpg"
      },
    ],

    medio: [
      {
        question: "¿Qué cantante peruano es conocido por su canción 'Que bonita es mi tierra'?",
        answer: "Arturo 'Zambo' Cavero",
        image: "images/zambo-cavero.jpg"
      },
      {
        question: "¿Cuál es el nombre del famoso parque de Lima que alberga la huaca Pucllana?",
        answer: "Miraflores",
        image: "images/miraflores.jpg"
      },
      {
        question: "¿Cómo se llama la capa externa de la Tierra?",
        answer: "Corteza",
        image: "images/earth-crust.jpg"
      },
    ],

    dificil: [
      {
        question: "¿En qué año se estrenó la película peruana 'La teta asustada' que ganó el Oso de Oro en Berlín?",
        answer: "2009",
        image: "images/la-teta-asustada.jpg"
      },
      {
        question: "¿Quién es el director de la famosa película peruana 'El espinazo del diablo'?",
        answer: "Guillermo del Toro",
        image: "images/guillermo-del-toro.jpg"
      },
      {
        question: "¿Cuál es el transporte público más peligroso de Lima?",
        answer: "Combi",
        image: "images/combi.jpg"
      },
    ],
  },
};

const menuScreen = document.getElementById("menu-screen");
const levelScreen = document.getElementById("level-screen");
const gameScreen = document.getElementById("game-screen");
const categoryItems = document.querySelectorAll(".category-item");
const audioPlayer = document.getElementById("category-audio");
const audioSource = document.getElementById("audio-source");
const levelItems = document.querySelectorAll(".level-item");
const selectedCategoryTitle = document.getElementById(
  "selected-category-title"
);
const backToCategoriesBtn = document.getElementById("back-to-categories");
const backToMenuBtn = document.getElementById("back-to-menu");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const questionImageElement = document.getElementById("question-image");
const speakBtn = document.getElementById("speak-btn");
const nextQuestionBtn = document.getElementById("next-question");
const speechText = document.getElementById("speech-text");
const resultElement = document.getElementById("result");
const currentScoreElement = document.getElementById("current-score");
const maxScoreElement = document.getElementById("max-score");
const timeLeftElement = document.getElementById("time-left");


let selectedCategory = "";
let selectedLevel = "";
let currentQuestion = 0;
let currentScore = 0;
let maxScore = 0;
let timer;
let timeLeft = 60;
let gameEndReason = "";

// End game images for different scenarios
const endGameImages = {
  timeOut: "img/cientifico_triste.gif",
  incorrectAnswer: "img/idleBoss.gif",
  lowScore: "img/cientifico_riendo.gif",
};

categoryItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectedCategory = item.dataset.category;
    menuScreen.classList.remove("active");
    levelScreen.classList.add("active");
    selectedCategoryTitle.textContent = `${item.textContent} - Selecciona Nivel`;
  });
});

levelItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectedLevel = item.dataset.level;
    levelScreen.classList.remove("active");
    gameScreen.classList.add("active");
    startGame();
  });
});

backToCategoriesBtn.addEventListener("click", () => {
  levelScreen.classList.remove("active");
  menuScreen.classList.add("active");
});

backToMenuBtn.addEventListener("click", () => {
  gameScreen.classList.remove("active");
  menuScreen.classList.add("active");
  resetGame();
});

nextQuestionBtn.addEventListener("click", loadNextQuestion);

function startGame() {
  currentQuestion = 0;
  currentScore = 0;
  timeLeft = 60;
  gameEndReason = "";
  currentScoreElement.textContent = currentScore;
  
  loadNextQuestion();
  startTimer();
}

function loadNextQuestion() {
  const categoryQuestions = questions[selectedCategory][selectedLevel];
  if (currentQuestion < categoryQuestions.length) {
    const question = categoryQuestions[currentQuestion];
    questionElement.textContent = question.question;
    
    // Update question image
    if (question.image) {
      questionImageElement.src = question.image;
      questionImageElement.alt = question.question;
      questionImageElement.style.display = 'block';
    } else {
      questionImageElement.style.display = 'none';
    }
    
    speechText.textContent = "";
    resultElement.textContent = "";
    currentQuestion++;
  } else {
    endGame("completed");
  }
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timeLeftElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame("timeOut");
    }
  }, 1000);
}

function endGame(reason) {
  clearInterval(timer);
  gameEndReason = reason;

  if (currentScore > maxScore) {
    maxScore = currentScore;
    maxScoreElement.textContent = maxScore;
  }

  // Determine the appropriate end game image
  let endImage = endGameImages.lowScore;
  if (reason === "timeOut") {
    endImage = endGameImages.timeOut;
  } else if (reason === "incorrectAnswer") {
    endImage = endGameImages.incorrectAnswer;
  }

  // Add this section to display the image
  const endGameImageElement = document.createElement('img');
  endGameImageElement.src = endImage;
  endGameImageElement.style.maxWidth = '100%';
  endGameImageElement.style.display = 'block';
  endGameImageElement.style.margin = '0 auto';

  // Optional: Create a modal or overlay to show the image
  const modalOverlay = document.createElement('div');
  modalOverlay.style.position = 'fixed';
  modalOverlay.style.top = '0';
  modalOverlay.style.left = '0';
  modalOverlay.style.width = '100%';
  modalOverlay.style.height = '100%';
  modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
  modalOverlay.style.display = 'flex';
  modalOverlay.style.justifyContent = 'center';
  modalOverlay.style.alignItems = 'center';
  modalOverlay.style.zIndex = '1000';

  modalOverlay.appendChild(endGameImageElement);
  document.body.appendChild(modalOverlay);

  // Close modal on click
  modalOverlay.addEventListener('click', () => {
    document.body.removeChild(modalOverlay);
  });

  
  resetGame();
  gameScreen.classList.remove("active");
  menuScreen.classList.add("active");
}

function resetGame() {
  clearInterval(timer);
  currentScore = 0;
  timeLeft = 60;
  currentScoreElement.textContent = currentScore;
  timeLeftElement.textContent = timeLeft;
  enemyImgElement.style.display = "none";
}

speakBtn.addEventListener("click", () => {
  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "es-ES";

    // Cambiar texto a "Escuchando..."
    speakBtn.textContent = "Escuchando...";
    speakBtn.disabled = true; // Desactivar el botón para evitar múltiples clics

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      speechText.textContent = transcript;
    
      const currentQuestions = questions[selectedCategory][selectedLevel];
      const correctAnswer = currentQuestions[currentQuestion - 1].answer.toLowerCase();
    
      if (transcript === correctAnswer) {
        // Create and display success image
        const successImageElement = document.createElement('img');
        successImageElement.src = "img/cientifico_riendo.gif"; // You can change this image
        successImageElement.style.maxWidth = '100%';
        successImageElement.style.display = 'block';
        successImageElement.style.margin = '0 auto';
    
        const modalOverlay = document.createElement('div');
        modalOverlay.style.position = 'fixed';
        modalOverlay.style.top = '0';
        modalOverlay.style.left = '0';
        modalOverlay.style.width = '100%';
        modalOverlay.style.height = '100%';
        modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
        modalOverlay.style.display = 'flex';
        modalOverlay.style.justifyContent = 'center';
        modalOverlay.style.alignItems = 'center';
        modalOverlay.style.zIndex = '1000';
    
        modalOverlay.appendChild(successImageElement);
        document.body.appendChild(modalOverlay);
    
        // Close modal on click
        modalOverlay.addEventListener('click', () => {
          document.body.removeChild(modalOverlay);
        });
    
        resultElement.textContent = "¡Respuesta correcta!";
        currentScore += 10;
        currentScoreElement.textContent = currentScore;
      } else {
        resultElement.textContent = "Respuesta incorrecta";
        endGame("incorrectAnswer");
      }
    };

    recognition.onend = function () {
      // Restaurar el texto a "Hablar"
      speakBtn.textContent = "🎤 Hablar";
      speakBtn.disabled = false; // Reactivar el botón
    };

    recognition.start();
  } else {
    alert("Su navegador no soporta reconocimiento de voz");
  }
});

// Canciones por categoría
const categorySongs = {
  historia: "sound/himno.mp3", // Cambia la ruta
  ciencia: "sound/intro.mp3",
  matematica: "sound/mate.mp3",
  libros: "sound/libro.mp3",
  culturapopular: "sound/ardepapi.mp3"
};

// Agregar eventos a las categorías
categoryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.getAttribute("data-category");
    playCategoryMusic(category);
  });
});

// Función para reproducir música
function playCategoryMusic(category) {
  const songUrl = categorySongs[category];
  if (songUrl) {
    audioSource.src = songUrl;
    audioPlayer.load();
    audioPlayer.style.display = "block"; // Mostrar controles de audio si es necesario
    audioPlayer.play();
  } else {
    console.error("No hay canción asignada a esta categoría.");
  }
}