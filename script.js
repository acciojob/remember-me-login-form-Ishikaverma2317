// ------------------------------
// QUIZ QUESTIONS
// ------------------------------
const questions = [
  {
    q: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: 0
  },
  {
    q: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    q: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    answer: 1
  },
  {
    q: "Node.js is built on which engine?",
    options: ["Java VM", "V8 Engine", "SpiderMonkey", "Panda"],
    answer: 1
  },
  {
    q: "LocalStorage stores data in?",
    options: ["Server", "Browser", "RAM", "Cache"],
    answer: 1
  }
];

// ------------------------------
// LOAD SAVED PROGRESS (SESSION STORAGE)
// ------------------------------
let savedProgress = JSON.parse(sessionStorage.getItem("progress")) || {};


// ------------------------------
// RENDER QUESTIONS
// ------------------------------
const quizForm = document.getElementById("quizForm");

questions.forEach((item, index) => {
  let div = document.createElement("div");
  div.className = "question";

  let html = `<h3>${index + 1}. ${item.q}</h3>`;

  item.options.forEach((opt, optIndex) => {
    const isChecked = savedProgress[index] == optIndex ? "checked" : "";

    html += `
      <label>
        <input 
          type="radio" 
          name="q${index}" 
          value="${optIndex}" 
          ${isChecked}
          onchange="saveProgress(${index}, ${optIndex})"
        >
        ${opt}
      </label><br>
    `;
  });

  div.innerHTML = html;
  quizForm.appendChild(div);
});


// ------------------------------
// SAVE TO SESSION STORAGE
// ------------------------------
function saveProgress(qIndex, optIndex) {
  savedProgress[qIndex] = optIndex;
  sessionStorage.setItem("progress", JSON.stringify(savedProgress));
}


// ------------------------------
// SUBMIT QUIZ
// ------------------------------
function submitQuiz() {
  let score = 0;

  questions.forEach((q, index) => {
    if (savedProgress[index] == q.answer) {
      score++;
    }
  });

  // store score in localStorage
  localStorage.setItem("quizScore", score);

  alert(`Your Score: ${score}/5`);
}
