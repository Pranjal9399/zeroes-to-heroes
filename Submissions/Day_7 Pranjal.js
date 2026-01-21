function checkEvenOdd(input) {
  const number = Number(input);

  if (!Number.isInteger(number)) {
    return "Invalid input";
  }

  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd("07"));
