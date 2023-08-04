const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "ans1",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "ans2",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    answer: "ans1",
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "ans4",
  },
  {
    question: "Which country is home to the Great Pyramid of Giza?",
    options: ["Egypt", "Greece", "Mexico", "China"],
    answer: "ans1",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
    ],
    answer: "ans1",
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    answer: "ans1",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "ans1",
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
    answer: "ans1",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Brain", "Skin"],
    answer: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;

const loadQuestions = () => {
  const questionList = quiz[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.options[0];
  option2.innerText = questionList.options[1];
  option3.innerText = questionList.options[2];
  option4.innerText = questionList.options[3];
};

loadQuestions();

getCheckAns = () => {
  let answer;

  answers.forEach((x) => {
    if (x.checked) {
      answer = x.id;
    }
  });
  return answer;
};

const deselect = () => {
  answers.forEach((x) => {
    if (x.checked) {
      x.checked = false;
    }
  });
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAns();
  console.log(checkedAnswer);

  if (checkedAnswer === quiz[questionCount].answer) {
    score++;
  }

  questionCount++;

  deselect();

  if (questionCount < quiz.length) {
    loadQuestions();
  } else {
    showScore.innerHTML = `
      <h3>Your Score ${score}</h3>
      <button id="submit" onclick="location.reload()">Play Again</button>
    
    `;
    showScore.classList.remove("scoreArea");
  }
});
