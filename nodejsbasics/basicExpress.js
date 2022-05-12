const express = require('express');

const app = express();

const port = 8081;

let todoList = ["Complete Node Byte", "Play Cricket"];

app.get('/todos',(request, response) => {
  response.send(JSON.stringify(todoList));
})

app.listen(port, () => {
  console.log(`Server started at the port:${port}`)
})
