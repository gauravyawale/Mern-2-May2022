const express = require('express');

const app = express();

app.use(express.json())

const port = 8081;

let todoList = ["Complete Node Byte", "Play Cricket"];

app.get('/todos',(request, response) => {

  response.send(JSON.stringify(todoList));
})

app.post('/todos',(request, response) => {
  
  let newTodo = request.body.name;

  
  todoList.push(newTodo);
  
  response.status(201).send();
  
})

app.delete('/todos', (request, response) => {
  let deleteTodo = request.body.name;
  
  let idxOfDeleteTodo = todoList.findIndex(element => element === deleteTodo);
  
  todoList.splice(idxOfDeleteTodo, 1);
  response.status(204).send();
})


app.all("/todos", (request, response) =>{
  response.status(501).send();
})

app.all("*", (request, response) =>{
  response.status(404).send();
})

app.listen(port, () => {
  console.log(`Server started at the port:${port}`)
})