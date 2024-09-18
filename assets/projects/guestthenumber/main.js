const number = document.querySelector('#numbers');
const submit = document.querySelector('#submit');
const guest = document.querySelector('#input');
const hint = document.querySelector('#hint');
const answer = document.querySelector('#answer');
const generate = document.querySelector('#generate');

let randomNumbers;

generate.addEventListener("click", () => {
  randomNumbers = Math.floor(Math.random() * 10);
  number.innerHTML = "?";
  number.className = "animate__animated animate__flipInY"
  answer.innerHTML = "";
  hint.innerHTML = "";
});

submit.addEventListener("click", () => {
  var inputAnswer = guest.value;
  if (inputAnswer == randomNumbers) {
    number.innerHTML = randomNumbers;
    number.className = ""
    answer.innerHTML = "Correct";
    hint.innerHTML = "";
  } else if (inputAnswer < randomNumbers) {
    hint.innerHTML = "Higher";
  } else if (inputAnswer > randomNumbers) {
    hint.innerHTML = "Lower";
  }
});
