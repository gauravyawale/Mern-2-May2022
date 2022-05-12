const http = require("http");

const port = 8081;

//MileStone 1 and MileStone 2

// http
//   .createServer((request, response) => {
//     const { headers, method, url } = request;

//     // console.log("H", headers, "-X", method, "URL", url);

//     if (method === "GET") {
//       if (url === "/todos") {
//         // Set response status code and response headers
//         response.writeHead(200, { contentType: "text/html" });

//         // Set response body i.e, data to be sent
//         response.write("<h1>TODO : Created by Gaurav Yawale</h1>");

//         // Tell the server the response is complete and to close the connection
//         response.end();
//       }else{
//         response.statusCode = 404;
//         response.end();
//       }
//     } else {
//       response.statusCode = 501;
//       response.end();
//     }
//   })
//   .listen(port, () => {
//     // Log text to the terminal once the server starts
//     console.log(`Nodejs server started on port ${port}`);
//   });

//MileStone 3-

let todoList = ["Complete Node Byte", "Play Cricket"];

http
  .createServer((request, response) => {
    const { method, headers, url } = request;

    if (method === "GET") {
      if (url === "/todos") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(todoList));
      } else {
        response.statusCode = 404;
      }
    } else if (method === "POST") {
      if (url === "/todos") {
        let body = [];
        request
          .on("data", (chunk) => {
            body.push(chunk);
          })
          .on("end", () => {
            body = Buffer.concat(body).toString();
            body = JSON.parse(body);
            if (body) {
              todoList.push(body["name"]);
              console.log(todoList);
            }
          });
        response.statusCode = 201;
      } else {
        response.statusCode = 404;
      }
    } else if (method === "DELETE") {
      if (url === "/todos") {
        let body = [];

        request
          .on("data", (chunk) => {
            body.push(chunk);
          })
          .on("end", () => {
            body = Buffer.concat(body).toString();
            body = JSON.parse(body);
            if(todoList.includes(body.name)){
              let idx = todoList.findIndex(elem => elem === body.name);
              todoList.splice(idx,1);
            }
            console.log(todoList);
          });

          response.statusCode = 204;
      } else {
        response.statusCode = 404;
      }
    } else {
      response.statusCode = 501;
    }

    response.end();
  })
  .listen(port, () => {
    console.log("Server started on the PORT= ", port);
  });