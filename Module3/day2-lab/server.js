const express = require("express");
const app = express();
const PORT = 3000;

app.get("/greeting/:name", (req, res) => {
  res.send(`<h1>Whats up ${req.params.name}</h1>`);
});


app.get("/tip/:total/:tipPercentage", (req, res) => {
  let {total, tipPercentage} = req.params
  res.send(` tip will be ${total * (tipPercentage /100)}`)
  console.log(req.params);
});

const questions = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

console.log(questions.length);

const random = Math.floor(Math.random() * questions.length)
console.log(random);

app.get("/magic/:question", (req, res) => {
  res.send(`Your Question: ${req.params.question} Answer: ${questions[random]}`);
//   res.send(req.params.question + `<h1>${}</h1>`);
});

app.listen(3000, function () {
  console.log(`server is running on port ${PORT}`);
});
