//Activity 1.1 : Extending APIs with Express

// const currenciesData = require('./database/currencies.json')

// const express = require('express');

// const app = express();

// const port = 8082;

// app.get("/", (request, response) => {
//     response.send('<h1>Currencies Database</h1>');
// })

// app.get("/currencies",(request, response) => {
//     response.json(currenciesData);
// })

// app.listen(port, () => {
//     console.log(`Listening to the port ${port}..`)
// })


//Activity 1.2 : Extending APIs with Express and Activity 2: Filter with Query

// const currenciesData = require("./database/currencies.json");

// const express = require("express");

// const app = express();

// const port = 8082;

// app.get("/", (request, response) => {
//   response.send("<h1>Currencies Database</h1>");
// });

// app.get("/currencies", (request, response) => {
//   // Activity 2: Filter with Query
//   if (request.query.min_value) {
//     const minValue = request.query.min_value;
//     const minValueObject = currenciesData.data.filter(
//       (obj) => Number(obj.min_size) >= Number(minValue)
//     );
//     if (minValueObject) {
//       response.json(minValueObject);
//     } else {
//       response.status(404);
//       response.json({ message: "Minimum value not found" });
//     }
//   } else {
//     response.json(currenciesData);
//   }
// });

// app.get("/currencies/:symbol", (request, response) => {
//   const requestSymbol = request.params;
//   const symbolData = currenciesData.data.find(
//     (obj) => obj.id.toLowerCase() === requestSymbol.symbol.toLowerCase()
//   );
//   if (symbolData) {
//     response.json(symbolData);
//   } else {
//     response.status(404);
//     response.json({ message: "Invalid Symbol" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Listening to the port ${port}..`);
// });


//Controllers example: user => http request => controllers => http response => user.


// const express = require("express");

// const currenciesData = require("./database/currencies.json");

// const {
//   getCurrencies,
//   getCurrenciesSymbol,
// } = require("./controllers/currencies.controller");

// const app = express();

// const port = 8082;

// app.get("/", (request, response) => {
//   response.send("<h1>Currencies Database</h1>");
// });

// //Controllers example:
// app.get("/currencies", getCurrencies);

// app.get("/currencies/:symbol", getCurrenciesSymbol);

// app.listen(port, () => {
//   console.log(`Listening to the port ${port}..`);
// });


// Activity: Let’s create some /user routes


// const express = require("express");

// const {
//   getUsers,
//   getUserWithId,
//   getUserWithGenderAge,
// } = require("./controllers/users.controllers");

// const app = express();

// const port = 8082;

// app.get("/users", getUsers);

// app.get("/users/search", getUserWithGenderAge);

// app.get("/users/:uuid", getUserWithId);

// app.listen(port, () => {
//   console.log(`Listening to the port ${port}..`);
// });
