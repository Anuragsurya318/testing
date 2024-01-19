//Code for generating a random number between 1 to 10 without repetition
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

function generateUniqueRandomNumbers(count, min, max) {
  let numbers = [];
  while (numbers.length < count) {
    let randomNumber = getRandomNumber(min, max);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

let uniqueRandomNumbers = generateUniqueRandomNumbers(10, 1, 10);
console.log(uniqueRandomNumbers);

//
uniqueRandomNumbers.map(function (value) {
  let main = document.querySelector(".main");
  let card = document.createElement("span");
  let num = document.createTextNode(value);
  card.appendChild(num);
  main.appendChild(card);
  card.className = "card";
});
