/* Session - 1*/

//Activity 1: Start a new project
// console.log("Namaste Node.js");

//Activity 2.1: Let’s create a script
// console.log("Namaste from server")
//Activity 2.2: Adding a dev script
// console.log("Namaste from server-gaurav yawale")

//Activity 3-practice

// const http = require('http');

// const server = http.createServer((request, response) => {
//     console.log("Namaste http create server")
// });

// server.listen(8082, () => {
//     console.log("Listening...");
// })


//Activity 3: Log Server Date-Time
// const http = require("http");

// const port = 8082;

// const serverInfo = {
//   serverName: "Crio Server",
//   version: "1.0.0",
//   currentDate: new Date().toDateString(),
//   currentTime: new Date().toTimeString(),
// };

// const server = http.createServer((request, response) => {
//   const serverDate = new Date();
//   console.log(
//     "local server date and time: ",
//     serverDate.toLocaleDateString(),
//     serverDate.toLocaleTimeString()
//   );
//   // response.writeHead(200, { "Content-Type": "text/html" });
//   // response.write('<h1>Namaste from Server</h1>');
//   response.writeHead(200, { "Content-Type": "applocation/json" });
//   response.write(JSON.stringify({ name: "Gaurav" }));

//   response.end();//ending the connection
// });

// server.listen(port, () => {
//   console.log(`Listening to the port ${port}..`);
// });

//Activity 4.1: Send Server Status
// const http = require("http");

// const port = 8082;

// const serverInfo = {
//   serverName: "Crio Server",
//   version: "1.0.0",
//   currentDate: new Date().toDateString(),
//   currentTime: new Date().toTimeString(),
// };

// const server = http.createServer((request, response) => {
    
//   response.writeHead(200, { "Content-Type": "application/json" });//Adding Headers: response status and type of response
//   response.write(JSON.stringify(serverInfo));//sending the data as per type mentioned, it only take string data.

//   response.end();//ending the connection
// });

// server.listen(port, () => {
//   console.log(`Listening to the port ${port}..`);
// });

//Activity 4.2: Sending request from Postman
// const http = require("http");

// const port = 8082;

// const serverInfo = {
//   serverName: "Crio Server",
//   version: "1.0.0",
//   currentDate: new Date().toDateString(),
//   currentTime: new Date().toTimeString(),
// };

// const server = http.createServer((request, response) => {

//   response.end();//ending the connection
// });

// server.listen(port, () => {
//   console.log(`Listening to the port ${port}..`);
// });

//Activity 5: Extending APIs
// const http = require("http");
// const currenciesData = require("./database/currencies.json");
// const port = 8082;

// const serverInfo = {
//   serverName: "Crio Server",
//   version: "1.0.0",
//   currentDate: new Date().toDateString(),
//   currentTime: new Date().toTimeString(),
// };

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<h1>Namaste from server</h1>");
//   } else if (request.url.includes("/currencies")) {
//     let url = request.url.split("/");
//     if (url[2]) {
//       let symbol = currenciesData.data.find(
//         (obj) => obj.id.toLowerCase() === url[2].toLowerCase()
//       );
//       if (symbol) {
//         response.writeHead(200, { "Content-Type": "application/json" });
//         response.write(JSON.stringify(symbol));
//       } else {
//         response.writeHead(404, { "Content-Type": "application/json" });
//         response.write(JSON.stringify({ message: "No Data found" }));
//       }
//     } else if (url[1] === "currencies") {
//       response.writeHead(200, { "Content-Type": "application/json" });
//       response.write(JSON.stringify(currenciesData));
//     } else {
//       response.writeHead(404, { "Content-Type": "application/json" });
//       response.write(JSON.stringify({ message: "No Data found" }));
//     }
//   } else {
//     response.writeHead(404, { "Content-Type": "application/json" });
//     response.write(JSON.stringify({ message: "No Data found" }));
//   }
//   response.end(); //ending the connection
// });

// server.listen(port, () => {
//   console.log(`Listening to the port ${port}..`);
// });
