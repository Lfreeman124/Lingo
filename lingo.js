const words = [
  "apple",
  "brown",
  "chair",
  "month",
  "shape",
  "stuff",
  "woman",
  "equal",
  "start",
  "large",
];

// Generate a random 5-letter word
let randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);
// Make an array of the answer
const answerArray = randomWord.split("");

const al1 = document.getElementById("a-l1");
const al2 = document.getElementById("a-l2");
const al3 = document.getElementById("a-l3");
const al4 = document.getElementById("a-l4");
const al5 = document.getElementById("a-l5");

// Display random word in answer row
const a1 = randomWord[0];
const a2 = randomWord[1];
const a3 = randomWord[2];
const a4 = randomWord[3];
const a5 = randomWord[4];

const g1l1 = document.getElementById("g1-l1");
const g1l2 = document.getElementById("g1-l2");
const g1l3 = document.getElementById("g1-l3");
const g1l4 = document.getElementById("g1-l4");
const g1l5 = document.getElementById("g1-l5");

const g2l1 = document.getElementById("g2-l1");
const g2l2 = document.getElementById("g2-l2");
const g2l3 = document.getElementById("g2-l3");
const g2l4 = document.getElementById("g2-l4");
const g2l5 = document.getElementById("g2-l5");

const g3l1 = document.getElementById("g3-l1");
const g3l2 = document.getElementById("g3-l2");
const g3l3 = document.getElementById("g3-l3");
const g3l4 = document.getElementById("g3-l4");
const g3l5 = document.getElementById("g3-l5");

const g4l1 = document.getElementById("g4-l1");
const g4l2 = document.getElementById("g4-l2");
const g4l3 = document.getElementById("g4-l3");
const g4l4 = document.getElementById("g4-l4");
const g4l5 = document.getElementById("g4-l5");

const g5l1 = document.getElementById("g5-l1");
const g5l2 = document.getElementById("g5-l2");
const g5l3 = document.getElementById("g5-l3");
const g5l4 = document.getElementById("g5-l4");
const g5l5 = document.getElementById("g5-l5");

const colorChange = (guess, answer) => {
  if (guess.value.toLowerCase() === answer) {
    guess.style.backgroundColor = "green";
  } else if (answerArray.includes(guess.value.toLowerCase())) {
    guess.style.backgroundColor = "yellow";
  } else {
    guess.style.backgroundColor = "white";
  }
};

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (document.activeElement.id === "g1-l5") {
      colorChange(g1l1, a1);
      colorChange(g1l2, a2);
      colorChange(g1l3, a3);
      colorChange(g1l4, a4);
      colorChange(g1l5, a5);
      if (
        g1l1.value === a1 &&
        g1l2.value === a2 &&
        g1l3.value === a3 &&
        g1l4.value === a4 &&
        g1l5.value === a5
      ) {
        console.log("winner");
        al1.innerText = a1;
        al2.innerText = a2;
        al3.innerText = a3;
        al4.innerText = a4;
        al5.innerText = a5;
      }
      document.getElementById("g2-l1").focus();
    } else if (document.activeElement.id === "g2-l5") {
      colorChange(g2l1, a1);
      colorChange(g2l2, a2);
      colorChange(g2l3, a3);
      colorChange(g2l4, a4);
      colorChange(g2l5, a5);
      if (
        g2l1.value === a1 &&
        g2l2.value === a2 &&
        g2l3.value === a3 &&
        g2l4.value === a4 &&
        g2l5.value === a5
      ) {
        console.log("winner");
        al1.innerText = a1;
        al2.innerText = a2;
        al3.innerText = a3;
        al4.innerText = a4;
        al5.innerText = a5;
      }
      document.getElementById("g3-l1").focus();
    } else if (document.activeElement.id === "g3-l5") {
      colorChange(g3l1, a1);
      colorChange(g3l2, a2);
      colorChange(g3l3, a3);
      colorChange(g3l4, a4);
      colorChange(g3l5, a5);
      if (
        g3l1.value === a1 &&
        g3l2.value === a2 &&
        g3l3.value === a3 &&
        g3l4.value === a4 &&
        g3l5.value === a5
      ) {
        console.log("winner");
        al1.innerText = a1;
        al2.innerText = a2;
        al3.innerText = a3;
        al4.innerText = a4;
        al5.innerText = a5;
      }
      document.getElementById("g4-l1").focus();
    } else if (document.activeElement.id === "g4-l5") {
      colorChange(g4l1, a1);
      colorChange(g4l2, a2);
      colorChange(g4l3, a3);
      colorChange(g4l4, a4);
      colorChange(g4l5, a5);
      if (
        g4l1.value === a1 &&
        g4l2.value === a2 &&
        g4l3.value === a3 &&
        g4l4.value === a4 &&
        g4l5.value === a5
      ) {
        console.log("winner");
        al1.innerText = a1;
        al2.innerText = a2;
        al3.innerText = a3;
        al4.innerText = a4;
        al5.innerText = a5;
      }
      document.getElementById("g5-l1").focus();
    } else if (document.activeElement.id === "g5-l5") {
      colorChange(g5l1, a1);
      colorChange(g5l2, a2);
      colorChange(g5l3, a3);
      colorChange(g5l4, a4);
      colorChange(g5l5, a5);
      if (
        g5l1.value === a1 &&
        g5l2.value === a2 &&
        g5l3.value === a3 &&
        g5l4.value === a4 &&
        g5l5.value === a5
      ) {
        console.log("winner");
        al1.innerText = a1;
        al2.innerText = a2;
        al3.innerText = a3;
        al4.innerText = a4;
        al5.innerText = a5;
      }
    }
  }
});

function moveOnMax(field, nextFieldID) {
  if (field.value.length >= field.maxLength) {
    nextFieldID.focus();
  }
}
